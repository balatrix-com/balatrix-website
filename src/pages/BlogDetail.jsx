import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Copy,
  Check,
  ChevronRight,
  ChevronDown,
  Sparkles,
  PhoneCall,
  Terminal,
  BookOpen,
  Info,
  Lightbulb,
  AlertCircle,
  CheckCircle2,
  Layers,
  Building2,
  ExternalLink,
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogData';

// Helper to render inline markdown (bold, italic, inline code, links)
const renderInlineMarkdown = (text) => {
  if (!text) return null;

  // Split on bold, italic, code, and links
  const parts = [];
  let remaining = text;
  let keyIndex = 0;

  // Regex matches: [link](url), **bold**, *italic*, `code`
  const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/;

  while (remaining.length > 0) {
    const match = remaining.match(regex);
    if (!match) {
      parts.push(<span key={keyIndex++}>{remaining}</span>);
      break;
    }

    const matchIndex = match.index;
    if (matchIndex > 0) {
      parts.push(<span key={keyIndex++}>{remaining.slice(0, matchIndex)}</span>);
    }

    const matchedStr = match[0];
    if (matchedStr.startsWith('**') && matchedStr.endsWith('**')) {
      parts.push(
        <strong key={keyIndex++} className="font-semibold text-white">
          {matchedStr.slice(2, -2)}
        </strong>
      );
    } else if (matchedStr.startsWith('*') && matchedStr.endsWith('*')) {
      parts.push(
        <em key={keyIndex++} className="italic text-slate-200">
          {matchedStr.slice(1, -1)}
        </em>
      );
    } else if (matchedStr.startsWith('`') && matchedStr.endsWith('`')) {
      parts.push(
        <code
          key={keyIndex++}
          className="px-1.5 py-0.5 rounded text-xs md:text-sm font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20"
        >
          {matchedStr.slice(1, -1)}
        </code>
      );
    } else if (matchedStr.startsWith('[') && matchedStr.includes('](')) {
      const linkText = matchedStr.slice(1, matchedStr.indexOf(']('));
      const linkHref = matchedStr.slice(matchedStr.indexOf('](') + 2, -1);
      const isInternal = linkHref.startsWith('/');
      if (isInternal) {
        parts.push(
          <Link
            key={keyIndex++}
            to={linkHref}
            className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-500/40 hover:decoration-blue-400 transition-colors font-medium"
          >
            {linkText}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={keyIndex++}
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-500/40 hover:decoration-blue-400 transition-colors font-medium inline-flex items-center gap-1"
          >
            {linkText}
            <ExternalLink className="w-3 h-3 inline opacity-70" />
          </a>
        );
      }
    }

    remaining = remaining.slice(matchIndex + matchedStr.length);
  }

  return parts;
};

// Rich Markdown Content Block Renderer
const MarkdownBlock = ({ content }) => {
  if (!content) return null;

  const lines = content.split('\n');
  const elements = [];
  let lineIdx = 0;

  while (lineIdx < lines.length) {
    const rawLine = lines[lineIdx];
    const trimmed = rawLine.trim();

    // Empty lines
    if (!trimmed) {
      lineIdx++;
      continue;
    }

    // Markdown Table Detection
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableLines = [];
      while (
        lineIdx < lines.length &&
        lines[lineIdx].trim().startsWith('|') &&
        lines[lineIdx].trim().endsWith('|')
      ) {
        tableLines.push(lines[lineIdx].trim());
        lineIdx++;
      }

      if (tableLines.length >= 2) {
        const headerRow = tableLines[0]
          .split('|')
          .slice(1, -1)
          .map((col) => col.trim());
        // Skip separator row (tableLines[1])
        const bodyRows = tableLines.slice(2).map((row) =>
          row
            .split('|')
            .slice(1, -1)
            .map((col) => col.trim())
        );

        elements.push(
          <div key={`table-${lineIdx}`} className="my-6 overflow-x-auto rounded-xl border border-white/10 shadow-xl bg-[#070b18]/80 backdrop-blur-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 border-b border-white/10 text-white font-semibold">
                <tr>
                  {headerRow.map((th, thIdx) => (
                    <th key={thIdx} className="px-5 py-3.5 text-xs uppercase tracking-wider text-blue-300">
                      {renderInlineMarkdown(th)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-5 py-3.5 leading-relaxed">
                        {renderInlineMarkdown(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // Code Block Detection (```)
    if (trimmed.startsWith('```')) {
      const codeLang = trimmed.replace('```', '').trim() || 'bash';
      const codeLines = [];
      lineIdx++;
      while (lineIdx < lines.length && !lines[lineIdx].trim().startsWith('```')) {
        codeLines.push(lines[lineIdx]);
        lineIdx++;
      }
      lineIdx++; // skip closing ```

      elements.push(
        <div key={`code-${lineIdx}`} className="my-6 rounded-xl overflow-hidden border border-white/10 bg-[#040714] shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              {codeLang}
            </span>
          </div>
          <pre className="p-4 text-xs md:text-sm font-mono text-emerald-400 overflow-x-auto leading-relaxed">
            <code>{codeLines.join('\n')}</code>
          </pre>
        </div>
      );
      continue;
    }

    // Unordered List
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const listItems = [];
      while (
        lineIdx < lines.length &&
        (lines[lineIdx].trim().startsWith('- ') || lines[lineIdx].trim().startsWith('* '))
      ) {
        listItems.push(lines[lineIdx].trim().substring(2));
        lineIdx++;
      }

      elements.push(
        <ul key={`ul-${lineIdx}`} className="my-4 space-y-2.5 pl-1">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-300 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <span>{renderInlineMarkdown(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered List
    if (/^\d+\.\s/.test(trimmed)) {
      const listItems = [];
      while (lineIdx < lines.length && /^\d+\.\s/.test(lines[lineIdx].trim())) {
        const itemLine = lines[lineIdx].trim();
        const numberMatch = itemLine.match(/^(\d+)\.\s(.*)$/);
        if (numberMatch) {
          listItems.push({ num: numberMatch[1], text: numberMatch[2] });
        }
        lineIdx++;
      }

      elements.push(
        <ol key={`ol-${lineIdx}`} className="my-4 space-y-3 pl-1">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-300 leading-relaxed">
              <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold flex-shrink-0 mt-0.5">
                {item.num}
              </span>
              <span>{renderInlineMarkdown(item.text)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Blockquote
    if (trimmed.startsWith('> ')) {
      const quoteLines = [];
      while (lineIdx < lines.length && lines[lineIdx].trim().startsWith('> ')) {
        quoteLines.push(lines[lineIdx].trim().substring(2));
        lineIdx++;
      }

      elements.push(
        <blockquote
          key={`quote-${lineIdx}`}
          className="my-5 border-l-4 border-blue-500 bg-blue-500/5 px-5 py-4 rounded-r-xl italic text-slate-200"
        >
          {renderInlineMarkdown(quoteLines.join(' '))}
        </blockquote>
      );
      continue;
    }

    // Sub-headings inside section (### or ####)
    if (trimmed.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${lineIdx}`} className="text-xl font-bold text-white mt-7 mb-3 tracking-tight">
          {renderInlineMarkdown(trimmed.replace('### ', ''))}
        </h3>
      );
      lineIdx++;
      continue;
    }

    if (trimmed.startsWith('#### ')) {
      elements.push(
        <h4 key={`h4-${lineIdx}`} className="text-lg font-semibold text-white/90 mt-5 mb-2">
          {renderInlineMarkdown(trimmed.replace('#### ', ''))}
        </h4>
      );
      lineIdx++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={`p-${lineIdx}`} className="text-slate-300 text-base md:text-lg leading-relaxed my-3.5 font-normal">
        {renderInlineMarkdown(trimmed)}
      </p>
    );
    lineIdx++;
  }

  return <div>{elements}</div>;
};

// Callout alert box component
const CalloutBox = ({ callout }) => {
  if (!callout) return null;

  const config = {
    tip: {
      icon: Lightbulb,
      border: 'border-amber-500/30',
      bg: 'bg-amber-500/5',
      accent: 'text-amber-400',
      badge: 'PRO TIP',
      badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30'
    },
    warning: {
      icon: AlertCircle,
      border: 'border-rose-500/30',
      bg: 'bg-rose-500/5',
      accent: 'text-rose-400',
      badge: 'ARCHITECTURAL CAUTION',
      badgeBg: 'bg-rose-500/10 text-rose-300 border-rose-500/30'
    },
    info: {
      icon: Info,
      border: 'border-blue-500/30',
      bg: 'bg-blue-500/5',
      accent: 'text-blue-400',
      badge: 'PLATFORM NOTE',
      badgeBg: 'bg-blue-500/10 text-blue-300 border-blue-500/30'
    }
  };

  const style = config[callout.type] || config.info;
  const IconComponent = style.icon;

  return (
    <div className={`my-6 p-5 rounded-2xl border ${style.border} ${style.bg} relative overflow-hidden backdrop-blur-sm shadow-lg`}>
      <div className="flex items-start gap-4">
        <div className={`p-2.5 rounded-xl ${style.badgeBg} border flex-shrink-0 mt-0.5`}>
          <IconComponent className={`w-5 h-5 ${style.accent}`} />
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${style.badgeBg}`}>
              {style.badge}
            </span>
            <h4 className="text-sm font-semibold text-white">{callout.title}</h4>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">{callout.text}</p>
        </div>
      </div>
    </div>
  );
};

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find post
  const post = useMemo(() => {
    return BLOG_POSTS.find((p) => p.slug === slug);
  }, [slug]);

  // Active section for sticky Table of Contents
  const [activeSection, setActiveSection] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Scroll spy for TOC
  useEffect(() => {
    if (!post) return;

    const handleScroll = () => {
      const sectionElements = post.sections
        .map((s) => document.getElementById(s.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveSection(el.id);
          return;
        }
      }

      if (sectionElements.length > 0 && window.scrollY < sectionElements[0].offsetTop) {
        setActiveSection(sectionElements[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  // Find related articles (same category or from relatedSlugs)
  const relatedArticles = useMemo(() => {
    if (!post) return [];

    if (post.relatedSlugs && post.relatedSlugs.length > 0) {
      const explicit = BLOG_POSTS.filter((p) => post.relatedSlugs.includes(p.slug));
      if (explicit.length >= 3) return explicit.slice(0, 3);
    }

    return BLOG_POSTS.filter(
      (p) => p.categorySlug === post.categorySlug && p.slug !== post.slug
    ).slice(0, 3);
  }, [post]);

  // Find next and previous posts
  const { prevPost, nextPost } = useMemo(() => {
    if (!post) return { prevPost: null, nextPost: null };
    const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
    return {
      prevPost: currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null,
      nextPost: currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null
    };
  }, [post]);

  // Handle copy URL to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2400);
  };

  // If post not found, render clean 404 state
  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-white">Article Not Found</h1>
          <p className="text-sm text-slate-400">
            The article you are looking for does not exist or may have been relocated.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/blogs"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-500/25"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Schema for Article and Breadcrumbs
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.heroImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role
    },
    publisher: {
      '@type': 'Organization',
      name: 'Balatrix',
      url: 'https://balatrix.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://balatrix.com/logo.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://balatrix.com/blogs/${post.slug}`
    },
    keywords: post.keywords ? post.keywords.join(', ') : ''
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://balatrix.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blogs & Insights',
        item: 'https://balatrix.com/blogs'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.category,
        item: `https://balatrix.com/blogs?category=${post.categorySlug}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: `https://balatrix.com/blogs/${post.slug}`
      }
    ]
  };

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [articleSchema, breadcrumbSchema]
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        canonicalUrl={`https://balatrix.com/blogs/${post.slug}`}
        ogType="article"
        ogImage={post.heroImage}
        keywords={post.keywords ? post.keywords.join(', ') : ''}
        schema={combinedSchema}
      />

      <div className="min-h-screen pt-28 pb-24 bg-[var(--canvas-dark)] text-slate-100 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center flex-wrap gap-2 text-xs md:text-sm text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <Link to="/blogs" className="hover:text-white transition-colors">
              Blogs
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <Link
              to={`/blogs?category=${post.categorySlug}`}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {post.category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0 hidden sm:inline" />
            <span className="text-slate-500 truncate max-w-xs hidden sm:inline">
              {post.title}
            </span>
          </nav>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto text-center space-y-5 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-300 border border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              {post.category}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.18]">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
              {post.deck}
            </p>

            {/* Author & Meta Row */}
            <div className="pt-4 flex items-center justify-center flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-slate-400 border-t border-b border-white/5 py-4">
              <div className="flex items-center gap-2.5">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-9 h-9 rounded-full object-cover border border-white/10 ring-2 ring-blue-500/20"
                />
                <div className="text-left">
                  <div className="font-semibold text-white">{post.author.name}</div>
                  <div className="text-[11px] text-slate-400">{post.author.role}</div>
                </div>
              </div>

              <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:inline" />

              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>{post.date || post.publishedAt || 'November 14, 2024'}</span>
              </div>

              <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:inline" />

              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>{post.readTime}</span>
              </div>

              <span className="w-1 h-1 rounded-full bg-slate-600 hidden sm:inline" />

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors border border-white/5"
                title="Copy share link"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>
          </header>

          {/* 16:9 Hero Image Banner */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative aspect-[16/9] w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-slate-900">
              <img
                src={post.heroImage || post.image || '/images/hero_dashboard_1772447946359.jpg'}
                alt={post.heroImageAlt || post.imageAlt || post.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/hero_dashboard_1772447946359.jpg';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02050f]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-400/80 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/5 inline-flex items-center gap-2 max-w-max">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Balatrix Telephony Insights • Technical Brief</span>
              </div>
            </div>
          </div>

          {/* Key Takeaways Card */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="max-w-5xl mx-auto mb-14 p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-950/40 via-[#070b18]/80 to-purple-950/30 border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.12)] backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Executive & Architectural Key Takeaways
                </h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-sm sm:text-base text-slate-200">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mobile TOC Drawer Trigger */}
          <div className="lg:hidden max-w-4xl mx-auto mb-8">
            <button
              onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm"
            >
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                Table of Contents ({post.sections.length} Sections)
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isMobileTocOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {isMobileTocOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 p-4 rounded-xl bg-[#070b18] border border-white/10 space-y-2 overflow-hidden"
                >
                  {post.sections.map((section, idx) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setIsMobileTocOpen(false)}
                      className={`block py-1.5 px-3 rounded-lg text-xs transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-600/20 text-blue-400 font-semibold'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {idx + 1}. {section.heading}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Two-Column Main Content & Sticky Sidebar */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content Area (Columns 1-8) */}
            <article className="lg:col-span-8 space-y-12">
              {post.sections.map((section, sIdx) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 space-y-4 border-b border-white/5 pb-10 last:border-b-0"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono text-blue-400/80 font-bold px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                      0{sIdx + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {section.heading}
                    </h2>
                  </div>

                  <MarkdownBlock content={section.content} />

                  {section.callout && <CalloutBox callout={section.callout} />}
                </section>
              ))}

              {/* In-Article Contextual Sandbox Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 to-[#0c1229] border border-blue-500/30 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="space-y-2 max-w-xl">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      <PhoneCall className="w-3.5 h-3.5" />
                      Live WebRTC Softphone Sandbox
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Test This Cloud PBX Workflow Live
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Launch Balatrix's interactive browser softphone simulator. Place test calls, trigger multi-level IVRs, and inspect live SIP traces without downloading any desktop software.
                    </p>
                  </div>
                  <Link
                    to="/demo"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/30 hover:scale-[1.02]"
                  >
                    Launch PBX Demo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* FAQs Accordion */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="pt-4 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <HelpCircle className="w-5 h-5 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Frequently Asked Questions
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {post.faqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div
                          key={idx}
                          className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors hover:border-white/20"
                        >
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                            className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-white font-semibold text-sm sm:text-base gap-4"
                          >
                            <span>{faq.question}</span>
                            <ChevronDown
                              className={`w-4 h-4 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="px-5 pb-5 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 pt-3"
                              >
                                {faq.answer}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Article Keywords / Tags */}
              {post.keywords && post.keywords.length > 0 && (
                <div className="pt-6 border-t border-white/10 flex items-center flex-wrap gap-2">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1">
                    Topics:
                  </span>
                  {post.keywords.map((kw, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 hover:border-blue-500/30 hover:text-white transition-colors cursor-default"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              )}

              {/* Author Bio Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#070b18]/90 border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-5 shadow-xl">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-white/15 ring-4 ring-blue-500/10 flex-shrink-0"
                />
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <div className="flex items-center justify-center sm:justify-between flex-wrap gap-2">
                    <div>
                      <h4 className="text-base font-bold text-white">{post.author.name}</h4>
                      <p className="text-xs text-blue-400 font-medium">{post.author.role}</p>
                    </div>
                    <span className="text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      Verified Contributor
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {post.author.bio}
                  </p>
                </div>
              </div>

              {/* Prev / Next Article Navigation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                {prevPost ? (
                  <Link
                    to={`/blogs/${prevPost.slug}`}
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all group flex flex-col justify-between"
                  >
                    <span className="text-xs text-slate-400 inline-flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                      <ArrowLeft className="w-3.5 h-3.5" /> Previous Article
                    </span>
                    <span className="text-sm font-semibold text-white mt-1.5 line-clamp-2">
                      {prevPost.title}
                    </span>
                  </Link>
                ) : (
                  <div className="hidden sm:block" />
                )}

                {nextPost && (
                  <Link
                    to={`/blogs/${nextPost.slug}`}
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all group flex flex-col justify-between text-right sm:text-right"
                  >
                    <span className="text-xs text-slate-400 inline-flex items-center justify-end gap-1 group-hover:text-blue-400 transition-colors">
                      Next Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-sm font-semibold text-white mt-1.5 line-clamp-2">
                      {nextPost.title}
                    </span>
                  </Link>
                )}
              </div>
            </article>

            {/* Right Sticky Sidebar (Columns 9-12) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
              {/* Desktop Table of Contents */}
              <div className="p-6 rounded-2xl bg-[#070b18]/80 border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <h3 className="text-xs uppercase tracking-wider font-bold text-white">
                    Table of Contents
                  </h3>
                </div>

                <nav className="space-y-1 text-xs">
                  {post.sections.map((section, idx) => {
                    const isActive = activeSection === section.id;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`block py-2 px-3 rounded-lg transition-all leading-snug ${
                          isActive
                            ? 'bg-blue-600/20 text-blue-300 font-semibold border-l-2 border-blue-400 pl-2.5'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className="text-[10px] text-slate-500 font-mono mr-1.5">
                          0{idx + 1}.
                        </span>
                        {section.heading}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Share & Bookmark Tool */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="text-xs font-semibold text-white uppercase tracking-wider">
                  Share This Guide
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-white transition-colors border border-white/5"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-blue-400" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      post.title
                    )}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/5"
                    title="Share on X (Twitter)"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      window.location.href
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/5"
                    title="Share on LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.88 0-1.6.72-1.6 1.6 0 .88.72 1.6 1.6 1.6.88 0 1.6-.72 1.6-1.6 0-.88-.72-1.6-1.6-1.6z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Talk to Architect Consultation Widget */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0a1128] to-[#050814] border border-blue-500/20 shadow-xl space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Carrier-Grade Telephony</h4>
                    <p className="text-[11px] text-slate-400">Custom SIP Trunks & DIDs</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Need custom DID blocks, high-concurrency toll-free routing, or turnkey whitelabel PBX deployment?
                </p>

                <div className="space-y-2 pt-1">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-blue-500/20"
                  >
                    Request Carrier Quote
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/services/pbx"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs transition-colors border border-white/5"
                  >
                    Explore PBX Platform
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="mt-24 pt-16 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    Expand Your Telecom Knowledge
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Related Articles & Guides
                  </h3>
                </div>
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View All {BLOG_POSTS.length} Articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    to={`/blogs/${rel.slug}`}
                    className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all flex flex-col shadow-lg"
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden bg-slate-900 relative">
                      <img
                        src={rel.heroImage || rel.image || '/images/hero_dashboard_1772447946359.jpg'}
                        alt={rel.heroImageAlt || rel.imageAlt || rel.title}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/images/hero_dashboard_1772447946359.jpg';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-blue-300 border border-white/10">
                        {rel.category}
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-500" />
                            {rel.readTime}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {rel.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                        <span>Read Technical Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Full-Width CTA Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-950/70 via-[#070b18] to-purple-950/50 border border-blue-500/30 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-300 border border-blue-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                Next-Generation Cloud Telephony
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Ready to Modernize Your Business Communications?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Whether deploying a corporate PBX, launching high-concurrency toll-free trunks, or offering your own whitelabel cloud PBX platform, Balatrix delivers the enterprise infrastructure you need.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 hover:scale-[1.02]"
                >
                  Try Interactive PBX Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all border border-white/10"
                >
                  Contact Telecom Specialists
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
