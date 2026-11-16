import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Sparkles,
  Layers,
  PhoneCall,
  Terminal,
  Building2,
  X,
  CheckCircle2
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../data/blogData';

const Blogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        currentCategory === 'all' || post.categorySlug === currentCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.keywords.some((kw) =>
          kw.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [currentCategory, searchQuery]);

  // Find the featured post (or top post of current category)
  const featuredPost = useMemo(() => {
    if (currentCategory === 'all' && searchQuery.trim() === '') {
      return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
    }
    return filteredPosts[0] || null;
  }, [currentCategory, searchQuery, filteredPosts]);

  // Remaining posts for the grid
  const gridPosts = useMemo(() => {
    if (!featuredPost) return [];
    return filteredPosts.filter((p) => p.id !== featuredPost.id);
  }, [filteredPosts, featuredPost]);

  const handleCategoryChange = (slug) => {
    if (slug === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: slug });
    }
    setVisibleCount(6);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  const getCategoryIcon = (slug) => {
    switch (slug) {
      case 'cloud-pbx':
        return <Layers className="w-3.5 h-3.5" />;
      case 'telecom-guides':
        return <PhoneCall className="w-3.5 h-3.5" />;
      case 'wholesale-reseller':
        return <Building2 className="w-3.5 h-3.5" />;
      case 'developer-api':
        return <Terminal className="w-3.5 h-3.5" />;
      default:
        return <BookOpen className="w-3.5 h-3.5" />;
    }
  };

  // Structured Data for Blog List Page
  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Balatrix Insights',
    description: 'Telecom, cloud PBX, and VoIP engineering knowledge for modern businesses.',
    url: 'https://balatrix.com/blogs',
    publisher: {
      '@type': 'Organization',
      name: 'Balatrix',
      logo: {
        '@type': 'ImageObject',
        url: 'https://balatrix.com/images/balatrix-logo-full.jpg'
      }
    },
    blogPost: filteredPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://balatrix.com/blogs/${post.slug}`,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author.name
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[var(--canvas-dark)] text-[var(--text-dark-primary)] pt-28 pb-20 selection:bg-blue-600/30 selection:text-white">
      <SEO
        title="Insights & Engineering Blog"
        description="Explore in-depth guides, technical architecture, and best practices on Cloud PBX, SIP trunking, WebRTC softphones, and white-label VoIP from the Balatrix engineering team."
        canonicalUrl="https://balatrix.com/blogs"
        keywords="Cloud PBX, SIP Trunking, WebRTC, VoIP Reseller, White-label PBX, Toll-Free Numbers, Telecom Engineering"
        schema={blogListSchema}
      />

      {/* Background Ambient Lighting */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[50%] -translate-x-1/2 w-[650px] h-[350px] bg-[var(--color-accent)]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent-light)] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span>Balatrix Insights & Engineering</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]"
          >
            Telecom, Cloud PBX & <br className="hidden sm:inline" />
            <span className="text-[var(--color-accent)]">VoIP Knowledge.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-[var(--text-dark-secondary)] font-normal leading-relaxed mb-8"
          >
            In-depth guides, architectural breakdowns, and actionable telecom knowledge written by carrier voice engineers and systems architects.
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-xl mx-auto"
          >
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles on SIP, Cloud PBX, IVR, WebRTC..."
                className="w-full pl-11 pr-10 py-3.5 rounded-full bg-[var(--canvas-dark-elevated)] border border-[var(--border-dark)] text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all shadow-md"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 text-slate-400 hover:text-white transition-colors"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-xs text-slate-400 text-left mt-2 pl-4">
                Found {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'} matching "{searchQuery}"
              </p>
            )}
          </motion.div>
        </div>

        {/* 2. Category Filter Navigation */}
        <div className="mb-12 flex justify-center">
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 max-w-5xl mx-auto">
            {BLOG_CATEGORIES.map((category) => {
              const isActive = currentCategory === category.slug;
              const postCount =
                category.slug === 'all'
                  ? BLOG_POSTS.length
                  : BLOG_POSTS.filter((p) => p.categorySlug === category.slug).length;

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.slug)}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)] shadow-[0_2px_15px_rgba(88,101,242,0.4)] scale-[1.02]'
                      : 'bg-[var(--canvas-dark-elevated)]/60 text-[var(--text-dark-secondary)] hover:text-white border-[var(--border-dark)] hover:border-slate-600'
                  }`}
                >
                  {getCategoryIcon(category.slug)}
                  <span>{category.shortName || category.name}</span>
                  <span
                    className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive
                        ? 'bg-white/20 text-white font-medium'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    {postCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Featured Article Card */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="group rounded-3xl border border-[var(--border-dark)] hover:border-[var(--color-accent)]/50 bg-[var(--canvas-dark-elevated)]/40 hover:bg-[var(--canvas-dark-elevated)]/60 p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Image side - 16:9 ratio */}
                <div className="lg:col-span-7 overflow-hidden rounded-2xl relative aspect-[16/9] bg-slate-900 border border-white/5">
                  <img
                    src={featuredPost.image || featuredPost.heroImage || '/images/hero_dashboard_1772447946359.jpg'}
                    alt={featuredPost.imageAlt || featuredPost.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/images/hero_dashboard_1772447946359.jpg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-[var(--color-accent)] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured Article</span>
                  </span>
                </div>

                {/* Content side */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="inline-block bg-[var(--color-accent)]/15 text-[var(--color-accent-light)] border border-[var(--color-accent)]/30 text-xs font-semibold px-2.5 py-0.5 rounded-md">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center text-xs text-slate-400 gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <Link to={`/blogs/${featuredPost.slug}`}>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4 group-hover:text-[var(--color-accent-light)] transition-colors">
                        {featuredPost.title}
                      </h2>
                    </Link>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[var(--border-dark)] flex items-center justify-between gap-4 mt-auto">
                    <div className="flex items-center space-x-3 min-w-0">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-10 h-10 rounded-full object-cover border border-white/10 ring-2 ring-[var(--color-accent)]/20 shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">
                          {featuredPost.author.name}
                        </h4>
                        <p className="text-[11px] text-slate-400 truncate">
                          {featuredPost.date}
                        </p>
                      </div>
                    </div>

                    <Link
                      to={`/blogs/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-accent-light)] hover:text-white transition-colors group/link shrink-0"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 4. Latest Articles Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {currentCategory === 'all'
                ? 'Latest Insights'
                : BLOG_CATEGORIES.find((c) => c.slug === currentCategory)?.name}
            </h3>
            <span className="text-xs font-medium text-slate-400">
              Showing {Math.min(visibleCount, gridPosts.length)} of {gridPosts.length} articles
            </span>
          </div>

          {gridPosts.length === 0 ? (
            <div className="text-center py-16 px-4 rounded-2xl bg-[var(--canvas-dark-elevated)]/30 border border-[var(--border-dark)]">
              <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">No articles found</h4>
              <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
                We couldn't find any articles matching your search query. Try searching for different terms or reset the filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  handleCategoryChange('all');
                }}
                className="btn-pill btn-pill-primary px-6 py-2.5 text-xs font-semibold cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {gridPosts.slice(0, visibleCount).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-[var(--border-dark)] hover:border-[var(--color-accent)]/50 bg-[var(--canvas-dark-elevated)]/40 hover:bg-[var(--canvas-dark-elevated)]/70 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_40px_rgba(88,101,242,0.15)] flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Thumbnail Image - 16:9 ratio */}
                    <Link
                      to={`/blogs/${post.slug}`}
                      className="block relative aspect-[16/9] overflow-hidden bg-slate-900"
                    >
                      <img
                        src={post.image || post.heroImage || '/images/hero_dashboard_1772447946359.jpg'}
                        alt={post.imageAlt || post.title}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/images/hero_dashboard_1772447946359.jpg';
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                      <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md border border-white/10">
                        {post.category}
                      </span>
                    </Link>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{post.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <Link to={`/blogs/${post.slug}`}>
                        <h4 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-[var(--color-accent-light)] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                      </Link>

                      <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-normal line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 border-t border-white/[0.06] mt-auto flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2.5 min-w-0">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-white/10 shrink-0"
                      />
                      <span className="text-xs font-medium text-slate-300 truncate">
                        {post.author.name}
                      </span>
                    </div>

                    <Link
                      to={`/blogs/${post.slug}`}
                      className="text-xs font-bold text-[var(--color-accent-light)] hover:text-white transition-colors flex items-center gap-1 group/btn"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < gridPosts.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="btn-pill btn-pill-secondary px-8 py-3 text-xs sm:text-sm font-semibold cursor-pointer shadow-md hover:scale-[1.02] transition-transform"
              >
                Load More Articles ({gridPosts.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>

        {/* 5. Telecom Engineering Digest / Newsletter Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mb-16 rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[var(--canvas-dark-elevated)] via-[#0d1433] to-[var(--canvas-dark-elevated)] border border-[var(--border-dark)] relative overflow-hidden"
        >
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <span className="inline-block bg-[var(--color-accent)]/15 text-[var(--color-accent-light)] border border-[var(--color-accent)]/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Monthly Telecom Digest
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Stay ahead in modern VoIP & cloud communications
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
              Subscribe to receive verified technical guides, SIP protocol architecture reviews, and regulatory updates directly in your inbox. No marketing spam.
            </p>

            {newsletterSubscribed ? (
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-5 py-2.5 rounded-full text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you! You've been subscribed to the Balatrix Digest.</span>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your work email address"
                  required
                  className="w-full sm:flex-1 px-4 py-3 rounded-full bg-[var(--canvas-dark-deep)] border border-[var(--border-dark)] text-white text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]"
                />
                <button
                  type="submit"
                  className="btn-pill btn-pill-primary px-6 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer shadow-md w-full sm:w-auto"
                >
                  Subscribe Free
                </button>
              </form>
            )}
            <p className="text-[11px] text-slate-500 mt-3 font-normal">
              We respect your privacy. Unsubscribe anytime with one click.
            </p>
          </div>
        </motion.div>

        {/* 6. Contextual Bottom Product CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0c1228] to-[#080d1e] border border-blue-800/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-accent-light)] mb-2 block">
              Ready to Upgrade Your Voice Stack?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Experience the Balatrix Cloud PBX Platform
            </h3>
            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              Explore our live WebRTC softphone sandbox, configure visual IVRs, and test SIP trace diagnostics in real-time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto justify-center">
            <Link
              to="/demo"
              className="btn-pill btn-pill-primary px-7 py-3 text-sm font-semibold whitespace-nowrap shadow-[0_4px_20px_rgba(88,101,242,0.4)] flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span>Explore Interactive Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="btn-pill btn-pill-secondary px-6 py-3 text-sm font-semibold whitespace-nowrap w-full sm:w-auto justify-center"
            >
              Contact Telephony Experts
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
