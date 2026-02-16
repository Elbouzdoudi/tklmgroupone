import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Blog posts content
const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  readTime: string;
  category: string;
  content: string;
}> = {
  "5-tips-to-improve-english-speaking": {
    title: "5 Practical Tips to Improve Your English Speaking",
    excerpt: "Discover actionable strategies to boost your spoken English skills, even if you're starting from scratch.",
    date: "January 25, 2026",
    dateISO: "2026-01-25",
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
    dateISO: "2026-01-20",
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
    dateISO: "2026-01-15",
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
  "how-to-learn-english-fast-morocco": {
    title: "How to Learn English Fast in Morocco: A Complete Guide",
    excerpt: "Discover the best methods and resources to learn English quickly in Morocco, from online courses to immersion techniques.",
    date: "January 30, 2026",
    dateISO: "2026-01-30",
    readTime: "7 min read",
    category: "Learning Tips",
    content: `
## Why English Matters in Morocco

English is becoming increasingly important in Morocco. Whether you're looking for better job opportunities, planning to study abroad, or want to connect with the global community, English opens doors.

The good news? You can learn English faster than you think—if you use the right approach.

## The Problem with Traditional English Classes in Morocco

Many Moroccans spend years in English classes but still struggle to speak. Here's why traditional methods often fail:

- **Large class sizes** - 20-30 students means minimal speaking time
- **Focus on grammar** - Rules without practice don't build fluency
- **Moroccan Arabic interference** - Teachers don't address Arabic-specific challenges
- **No personalization** - Everyone follows the same curriculum

## The Fastest Way to Learn English

Research shows that **active speaking practice** is the fastest way to fluency. Here's a proven approach:

### 1. Prioritize Speaking (50%+ of your study time)

Reading and writing are important, but speaking is the skill that matters most. Aim to speak English for at least 30 minutes daily.

**How to practice speaking in Morocco:**
- Online tutoring (like Takalam!)
- Language exchange with tourists
- Speaking clubs in major cities
- Talking to yourself (yes, it works!)

### 2. Consume English Content Daily

Immerse yourself even without leaving Morocco:

- **Netflix/YouTube** - Watch with English subtitles
- **Podcasts** - Listen during commute
- **Social media** - Follow English accounts
- **News** - Read BBC, CNN instead of Moroccan sites

### 3. Learn Vocabulary in Context

Don't memorize word lists. Learn words as you encounter them in real content:

- Write down new words with example sentences
- Review them using spaced repetition apps (Anki, Quizlet)
- Try to use each new word in conversation

### 4. Focus on Pronunciation Early

Arabic and English have very different sounds. Common challenges for Moroccans:

- **P vs B** - "park" vs "bark"
- **Th sounds** - "think" vs "sink"
- **V sound** - doesn't exist in Arabic
- **Word stress** - English stresses certain syllables

Work on these early to avoid fossilizing bad habits.

## Best Resources for Moroccans Learning English

### Free Resources
- Duolingo (good for beginners)
- BBC Learning English
- YouTube channels (Rachel's English, EngVid)
- English podcasts

### Paid Options
- Online tutoring (most effective)
- Language schools (Casablanca, Rabat)
- Apps like Cambly, iTalki

## How Long Does It Take?

With consistent daily practice:
- **3-6 months** - Basic conversational ability
- **1 year** - Comfortable in most situations
- **2+ years** - Near-native fluency

The key is consistency. 30 minutes daily beats 3 hours weekly.

## Your Action Plan

1. **Today**: Commit to 30 minutes of English daily
2. **This week**: Find a speaking partner or tutor
3. **This month**: Build a consistent routine
4. **3 months**: Evaluate progress and adjust

## Ready to Fast-Track Your English?

At Takalam, we specialize in helping Moroccans speak English confidently. Our personalized approach focuses on what you need, not generic lessons. Start with a free trial lesson today!
    `,
  },
  "ielts-vs-toefl-which-test-should-you-take": {
    title: "IELTS vs TOEFL: Which English Test Should You Take?",
    excerpt: "A comprehensive comparison of IELTS and TOEFL to help you choose the right English proficiency test for your goals.",
    date: "February 5, 2026",
    dateISO: "2026-02-05",
    readTime: "6 min read",
    category: "Exam Prep",
    content: `
## Making the Right Choice

If you're planning to study abroad or immigrate, you'll likely need to take an English proficiency test. The two biggest options are IELTS and TOEFL. But which one should you choose?

## Quick Overview

| Feature | IELTS | TOEFL |
|---------|-------|-------|
| Full Name | International English Language Testing System | Test of English as a Foreign Language |
| Developer | British Council, IDP, Cambridge | ETS (American) |
| Accent | British, Australian, American | Primarily American |
| Score Range | 0-9 bands | 0-120 points |
| Test Duration | ~2 hours 45 minutes | ~3 hours |

## Test Format Comparison

### Listening

**IELTS Listening (30 minutes)**
- 4 recordings
- Mix of accents (British, Australian, American)
- Paper-based or computer-based
- You write answers while listening

**TOEFL Listening (41-57 minutes)**
- Academic lectures and conversations
- Primarily American accent
- Computer-based only
- Take notes, then answer questions

### Reading

**IELTS Reading (60 minutes)**
- 3 passages, 40 questions
- Various question types (matching, fill-in-the-blank, etc.)
- General Training or Academic versions

**TOEFL Reading (54-72 minutes)**
- 3-4 passages, 30-40 questions
- All multiple choice
- Academic content only

### Writing

**IELTS Writing (60 minutes)**
- Task 1: Describe a chart/graph OR write a letter (150 words)
- Task 2: Essay (250 words)
- Handwritten or typed

**TOEFL Writing (50 minutes)**
- Task 1: Integrated (read, listen, write)
- Task 2: Independent essay
- Typed only

### Speaking

**IELTS Speaking (11-14 minutes)**
- Face-to-face with examiner
- 3 parts: interview, long turn, discussion
- More conversational

**TOEFL Speaking (17 minutes)**
- Speak into a computer microphone
- 4 tasks: independent and integrated
- More structured

## Which Test Should You Choose?

### Choose IELTS If:
- You're applying to UK, Australian, or Canadian universities
- You prefer face-to-face speaking tests
- You're applying for UK/Australian immigration
- You want handwriting option
- You're more comfortable with British English

### Choose TOEFL If:
- You're applying to American universities
- You're comfortable with computer-based testing
- You prefer multiple choice questions
- You're applying to institutions that specifically require TOEFL

## Acceptance

**Important**: Most universities accept BOTH tests! Check your target institution's requirements, but don't assume one is better than the other.

For immigration:
- **UK** - IELTS for visas (TOEFL not accepted)
- **Canada** - Both accepted for study permits; IELTS for PR
- **Australia** - IELTS preferred for immigration
- **USA** - TOEFL common, but many accept IELTS

## Score Comparison

| IELTS Band | TOEFL Score | Level |
|------------|-------------|-------|
| 9.0 | 118-120 | Expert |
| 8.5 | 115-117 | Very High |
| 8.0 | 110-114 | Very Good |
| 7.5 | 102-109 | Good |
| 7.0 | 94-101 | Good |
| 6.5 | 79-93 | Competent |
| 6.0 | 60-78 | Competent |

## Preparation Tips for Both Tests

1. **Know the format** - Familiarity reduces anxiety
2. **Practice under timed conditions** - Time management is crucial
3. **Focus on your weakest section** - Improve where you need it most
4. **Get feedback** - A teacher can identify blind spots
5. **Take practice tests** - Official practice tests are best

## Final Recommendation

If you're unsure, take sample tests of both and see which format suits you better. Your score might vary between the two tests based on your strengths.

At Takalam, we help students prepare for both IELTS and TOEFL, with special focus on the Speaking and Writing sections where personal coaching makes the biggest difference.
    `,
  },
  "common-english-mistakes-arabic-speakers": {
    title: "10 Common English Mistakes Arabic Speakers Make (And How to Fix Them)",
    excerpt: "Learn about the most frequent errors Arabic speakers make in English and practical tips to overcome them.",
    date: "February 10, 2026",
    dateISO: "2026-02-10",
    readTime: "8 min read",
    category: "Grammar",
    content: `
## Why Arabic Speakers Struggle with English

Arabic and English are very different languages. Arabic is a Semitic language with different sentence structures, sounds, and writing systems. These differences create predictable challenges for Arabic speakers learning English.

The good news? Once you're aware of these common mistakes, you can actively work to correct them.

## 1. Pronunciation: P vs B

**The Problem**: Arabic doesn't have the "P" sound, only "B."

**Common Mistakes**:
- "I need to bark my car" (park)
- "Can I borrow your ben?" (pen)

**The Fix**: Practice with minimal pairs:
- park/bark
- pin/bin
- pat/bat

Place your hand in front of your mouth. You should feel a strong puff of air for "P" but not for "B."

## 2. The "TH" Sounds

**The Problem**: Arabic doesn't have the English "th" sounds (voiced and voiceless).

**Common Mistakes**:
- "I sink so" instead of "I think so"
- "Dis is good" instead of "This is good"

**The Fix**: Stick your tongue between your teeth for "th" sounds. Practice:
- think, thing, third (voiceless - like blowing air)
- this, that, the (voiced - with vibration)

## 3. Missing Articles (A, An, The)

**The Problem**: Arabic has articles but they work differently than English articles.

**Common Mistakes**:
- "I am teacher" instead of "I am a teacher"
- "She went to hospital" instead of "She went to the hospital"

**The Fix**: Remember:
- Use "a/an" when mentioning something for the first time
- Use "the" when both speaker and listener know what you're referring to
- Use "a" before consonant sounds, "an" before vowel sounds

## 4. Word Order Problems

**The Problem**: Arabic puts adjectives after nouns; English puts them before.

**Common Mistakes**:
- "I have a car red" instead of "I have a red car"
- "This is book interesting" instead of "This is an interesting book"

**The Fix**: Remember: In English, adjectives come BEFORE the noun.
- Big house (not house big)
- Beautiful weather (not weather beautiful)

## 5. Using "Is" with Every Verb

**The Problem**: Arabic uses "is/are" differently in sentences.

**Common Mistakes**:
- "He is go to school" instead of "He goes to school"
- "She is want coffee" instead of "She wants coffee"

**The Fix**: In English, don't use "is/are" with action verbs:
- He goes to school
- She wants coffee
- They play football

Use "is/are" only for:
- Descriptions: He is tall
- Continuous actions: He is going now

## 6. Confusing Present Simple and Present Continuous

**The Problem**: Arabic tenses work differently.

**Common Mistakes**:
- "I am understanding" instead of "I understand"
- "She is having a car" instead of "She has a car"

**The Fix**: Use Present Simple for:
- Facts: Water boils at 100°C
- Habits: I drink coffee every morning
- States: I know, I understand, I have

Use Present Continuous for:
- Actions happening now: I am reading
- Temporary situations: I am staying with friends

## 7. Dropping "It" as a Subject

**The Problem**: Arabic often omits the subject pronoun.

**Common Mistakes**:
- "Is cold today" instead of "It is cold today"
- "Raining now" instead of "It is raining now"

**The Fix**: English always needs a subject. Use "it" for:
- Weather: It is sunny
- Time: It is 5 o'clock
- Distance: It is far from here

## 8. Wrong Preposition Use

**The Problem**: Prepositions rarely translate directly between languages.

**Common Mistakes**:
- "I am good in English" instead of "I am good at English"
- "I depend on myself" (correct!) vs "I depend from myself" (wrong)

**The Fix**: Learn prepositions as part of phrases, not individually:
- Good at (sports, subjects)
- Interested in
- Afraid of
- Wait for

## 9. Pluralization Errors

**The Problem**: Arabic plurals are complex and irregular.

**Common Mistakes**:
- "I have two childs" instead of "two children"
- "Many informations" instead of "much information"

**The Fix**: Learn irregular plurals:
- child → children
- person → people
- information (uncountable - no "s")
- advice (uncountable - no "s")

## 10. The "V" Sound

**The Problem**: Arabic doesn't have the "V" sound.

**Common Mistakes**:
- "I'm wery happy" instead of "I'm very happy"
- "I love fideo games" instead of "video games"

**The Fix**: For "V," lightly bite your lower lip and vibrate:
- very, video, voice, leave

Practice: "Very valuable vegetables in the village."

## How to Improve Faster

1. **Awareness first** - Now you know these patterns, notice them
2. **Practice deliberately** - Focus on one issue at a time
3. **Get feedback** - A teacher who understands Arabic helps enormously
4. **Record yourself** - Listen back and identify errors
5. **Be patient** - Changing habits takes time

## Get Personalized Help

At Takalam, we understand the specific challenges Arabic speakers face because we've overcome them ourselves. Our lessons target these exact issues with personalized practice and feedback.

Ready to eliminate these mistakes? Book a free trial lesson!
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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://takalamenglish.ma";

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Takalam English Center`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${siteUrl}/blog/${slug}`,
      siteName: "Takalam English Center",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
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

  // Article Schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.dateISO,
    "dateModified": post.dateISO,
    "author": {
      "@type": "Person",
      "name": "Said",
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
    }
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
          <li className="text-gray-900 font-medium truncate max-w-[200px]">{post.title}</li>
        </ol>
      </nav>

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
