import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Blog posts content
const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}> = {
  "5-tips-to-improve-english-speaking": {
    title: "5 Practical Tips to Improve Your English Speaking",
    excerpt: "Discover actionable strategies to boost your spoken English skills, even if you're starting from scratch.",
    date: "January 25, 2026",
    readTime: "5 min read",
    category: "Speaking",
    content: `
## Why Speaking English Feels So Hard

Many English learners can read and write well, but freeze when they need to speak. This is completely normal! Speaking requires you to think and produce language in real-time, which is a different skill than reading or writing.

The good news? Speaking fluency can be developed with the right practice. Here are 5 tips that actually work:

## 1. Talk to Yourself Daily

This might sound strange, but it works! Every day, spend 10-15 minutes talking to yourself in English. Describe what you're doing, narrate your thoughts, or explain something you learned.

**Try this:** While cooking, describe each step in English. "Now I'm chopping the onions. The oil is heating up in the pan..."

## 2. Record and Listen to Yourself

Use your phone to record yourself speaking for 2-3 minutes about any topic. Listen back and notice:
- Where do you pause too long?
- Which words are unclear?
- What sounds unnatural?

Don't be too critical—the goal is awareness, not perfection.

## 3. Learn Phrases, Not Just Words

Native speakers use chunks of language together. Instead of learning individual words, learn common phrases:

- "To be honest..." instead of just "honest"
- "As far as I know..." instead of memorizing each word
- "The thing is..." to introduce a point

## 4. Shadow Native Speakers

Find a YouTube video or podcast in English. Listen to a sentence, pause, and repeat it exactly as you heard it—same rhythm, same intonation. This trains your mouth to produce natural English sounds.

## 5. Embrace Mistakes

Every mistake is a learning opportunity. The fear of making mistakes stops more people than actual mistakes do. Set a goal to make at least 5 mistakes today—it means you're trying!

## Ready for Real Practice?

These tips are great for self-study, but nothing replaces real conversation practice with a patient teacher who can guide you. At TAKALAM, we focus 80% of each lesson on speaking—because that's how you actually improve.
    `,
  },
  "overcome-fear-of-speaking-english": {
    title: "How to Overcome the Fear of Speaking English",
    excerpt: "Learn proven techniques to build confidence and speak English without anxiety or self-doubt.",
    date: "January 20, 2026",
    readTime: "4 min read",
    category: "Confidence",
    content: `
## You're Not Alone

If your heart races when you need to speak English, you're not alone. Studies show that "foreign language anxiety" affects up to 33% of language learners. But here's the truth: this fear can be overcome.

## Why We Fear Speaking

Understanding the root of your fear is the first step to conquering it:

1. **Fear of judgment** - Worrying what others think
2. **Perfectionism** - Wanting to speak perfectly before speaking at all
3. **Past embarrassment** - A bad experience that stuck with you
4. **Comparison** - Measuring yourself against native speakers

## Techniques That Actually Work

### 1. Reframe Your Mindset

Instead of thinking "I must speak perfectly," try:
- "Communication is my goal, not perfection"
- "Every native speaker makes mistakes too"
- "People appreciate my effort to learn their language"

### 2. Start in Safe Spaces

Build confidence gradually:
- Talk to yourself in the mirror
- Practice with a supportive friend
- Work with a patient teacher one-on-one
- Then gradually expand to group situations

### 3. Prepare for Common Situations

Anxiety decreases when you feel prepared. Practice phrases for:
- Introducing yourself
- Asking for clarification ("Could you repeat that?")
- Buying time ("Let me think about that...")

### 4. Focus Outward, Not Inward

When speaking, shift focus from "How do I sound?" to "Am I communicating my message?" This simple shift reduces self-consciousness dramatically.

### 5. Celebrate Small Wins

Did you order coffee in English? Celebrate it! Did you ask a question in a meeting? That's progress! Building confidence requires acknowledging your victories.

## The TAKALAM Approach

At TAKALAM, we create a judgment-free space where mistakes are welcomed. There's no pressure, no embarrassment—just supportive practice that builds real confidence over time.

Your fluency journey starts with one conversation. Are you ready?
    `,
  },
  "ielts-preparation-guide": {
    title: "Complete IELTS Preparation Guide for Beginners",
    excerpt: "Everything you need to know about IELTS exam structure, scoring, and preparation strategies.",
    date: "January 15, 2026",
    readTime: "8 min read",
    category: "Exam Prep",
    content: `
## What is IELTS?

IELTS (International English Language Testing System) is one of the world's most popular English proficiency tests. It's accepted by over 11,000 organizations worldwide for study, work, and immigration purposes.

## IELTS Format Overview

The test has 4 sections:

### 1. Listening (30 minutes)
- 4 recordings with 40 questions
- Accents: British, American, Australian
- You hear each recording only once

### 2. Reading (60 minutes)
- 3 passages with 40 questions
- Academic or General Training versions
- Passages increase in difficulty

### 3. Writing (60 minutes)
- Task 1: Describe a graph/chart OR write a letter (150+ words)
- Task 2: Essay on a given topic (250+ words)

### 4. Speaking (11-14 minutes)
- Part 1: Introduction and general questions
- Part 2: Long turn (speak for 2 minutes on a topic)
- Part 3: Discussion (deeper questions on Part 2 topic)

## Scoring System

IELTS uses a band score from 1-9:
- **Band 9**: Expert user
- **Band 8**: Very good user
- **Band 7**: Good user (often required for universities)
- **Band 6**: Competent user
- **Band 5**: Modest user

## Preparation Timeline

### 3-6 Months Before
- Take a diagnostic test to know your level
- Identify weak areas
- Create a study schedule
- Build vocabulary systematically

### 1-2 Months Before
- Practice full tests under timed conditions
- Focus on your weakest section
- Work on time management
- Practice speaking with a partner/teacher

### 1-2 Weeks Before
- Review common mistakes
- Do final practice tests
- Prepare mentally and physically
- Don't cram—rest is important!

## Top Tips for Each Section

### Listening
- Read questions before each recording starts
- Write answers as you hear them
- Don't leave blanks—guess if needed

### Reading
- Skim passages first for main ideas
- Don't read word-by-word
- Manage your time (20 min per passage)

### Writing
- Plan before you write
- Use a variety of sentence structures
- Leave time to check for errors

### Speaking
- Don't memorize scripts—examiners notice
- Extend your answers naturally
- It's okay to self-correct

## Get Personalized IELTS Prep

At TAKALAM, we offer targeted IELTS preparation focused on the Speaking and Writing sections—the areas where personal guidance makes the biggest difference. Our lessons are tailored to your target band score.

Ready to achieve your IELTS goals?
    `,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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

      {/* Article */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{post.date}</span>
            <span>•</span>
            <span>By Said, TAKALAM</span>
          </div>
        </div>

        {/* Featured Image Placeholder */}
        <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-8 flex items-center justify-center">
          <svg className="w-20 h-20 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-green max-w-none">
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/## (.*)/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h2>')
                .replace(/### (.*)/g, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                .replace(/- (.*)/g, '<li class="ml-4 mb-2">$1</li>')
                .replace(/\n\n/g, '</p><p class="mb-4">')
            }}
          />
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
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://takalam.ma/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://takalam.ma/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - https://takalam.ma/blog/' + slug)}`}
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
