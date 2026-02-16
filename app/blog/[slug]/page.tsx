import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

// Image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  // Only build URL if the source has an asset reference
  if (source && source.asset) {
    return builder.image(source);
  }
  return null;
}

// Helper to safely get image URL
function getImageUrl(source: any, width: number, height: number) {
  const url = urlFor(source);
  if (url) {
    return url.width(width).height(height).url();
  }
  return null;
}

// Fetch a single post by slug
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    body,
    "category": categories[0]->title,
    "author": author->{name, bio, image}
  }`;
  
  return client.fetch(query, { slug }, { next: { revalidate: 60 } });
}

// Fetch all post slugs for static generation
async function getAllSlugs() {
  const query = `*[_type == "post" && defined(slug.current)].slug.current`;
  return client.fetch(query);
}

// Format date
function formatDate(dateString: string) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Estimate read time from body
function getReadTime(body: any[]) {
  if (!body) return "5 min read";
  const text = body
    .filter((block: any) => block._type === "block")
    .map((block: any) => block.children?.map((child: any) => child.text).join(" "))
    .join(" ");
  const words = text.split(" ").length;
  const minutes = Math.max(3, Math.ceil(words / 200));
  return `${minutes} min read`;
}

// Portable Text components for rendering rich content
const portableTextComponents = {
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">{children}</h4>,
    normal: ({ children }: any) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-green-500 pl-4 my-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="ml-4">{children}</li>,
    number: ({ children }: any) => <li className="ml-4">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a href={value.href} className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://takalamenglish.ma";
  const excerpt = post.body?.[0]?.children?.[0]?.text || "Read this helpful article from Takalam English Center.";

  return {
    title: post.title,
    description: excerpt,
    openGraph: {
      title: `${post.title} | Takalam English Center`,
      description: excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      url: `${siteUrl}/blog/${slug}`,
      siteName: "Takalam English Center",
      images: getImageUrl(post.mainImage, 1200, 630) ? [getImageUrl(post.mainImage, 1200, 630)!] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: excerpt,
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug: string) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const excerpt = post.body?.[0]?.children?.[0]?.text || "Read this helpful article.";

  // Article Schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": excerpt,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Said",
      "jobTitle": "English Teacher",
      "worksFor": {
        "@type": "Organization",
        "name": "Takalam English Center"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Takalam English Center",
      "logo": {
        "@type": "ImageObject",
        "url": "https://takalamenglish.ma/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://takalamenglish.ma/blog/${slug}`
    },
    "image": getImageUrl(post.mainImage, 1200, 630) || undefined
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://takalamenglish.ma"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://takalamenglish.ma/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://takalamenglish.ma/blog/${slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Article and Breadcrumb Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="TAKALAM"
                width={600}
                height={150}
                className="h-20 w-auto -my-2"
              />
            </Link>
            <Link
              href="/blog"
              className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              All Posts
            </Link>
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <nav className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
          </li>
          <li>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li>
            <Link href="/blog" className="hover:text-green-600 transition-colors">Blog</Link>
          </li>
          <li>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </li>
          <li className="text-gray-900 font-medium truncate max-w-xs">{post.title}</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              {post.category || "Learning Tips"}
            </span>
            <span className="text-gray-500 text-sm">{getReadTime(post.body)}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              {getImageUrl(post.author?.image, 40, 40) ? (
                <Image
                  src={getImageUrl(post.author.image, 40, 40)!}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-semibold text-sm">
                    {post.author?.name?.charAt(0) || "S"}
                  </span>
                </div>
              )}
              <span className="font-medium">{post.author?.name || "Said"}</span>
            </div>
            <span className="text-gray-400">•</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>
        </div>

        {/* Featured Image */}
        {getImageUrl(post.mainImage, 800, 400) ? (
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
            <Image
              src={getImageUrl(post.mainImage, 800, 400)!}
              alt={post.mainImage?.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-8 flex items-center justify-center">
            <svg className="w-20 h-20 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-lg prose-green max-w-none">
          <PortableText value={post.body} components={portableTextComponents} />
        </article>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to Practice?</h2>
          <p className="text-green-100 mb-6">
            Put these tips into action with personalized 1-on-1 English coaching.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 font-semibold rounded-xl hover:bg-green-50 transition-colors"
          >
            Book Your Session
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Share */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4 text-center">Found this helpful? Share it!</p>
          <div className="flex justify-center gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://takalamenglish.ma/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://takalamenglish.ma/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - https://takalamenglish.ma/blog/' + slug)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm">© {new Date().getFullYear()} TAKALAM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
