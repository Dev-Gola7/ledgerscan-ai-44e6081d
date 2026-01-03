import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

// Static blog posts for SEO
const blogPosts = [
  {
    slug: 'understanding-gst-input-credit',
    title: 'Understanding GST Input Credit: A Complete Guide for Businesses',
    excerpt: 'Learn how to maximize your GST input credit claims and avoid common mistakes that lead to rejected credits during GST filing.',
    category: 'GST Compliance',
    author: 'LedgerScan Pro Team',
    date: '2024-12-15',
    readTime: '8 min read',
  },
  {
    slug: 'automate-bill-processing',
    title: 'How AI Bill Scanning Can Save Your Business 20 Hours Per Month',
    excerpt: 'Discover how automated bill processing eliminates manual data entry and reduces errors in your accounting workflow.',
    category: 'Product Updates',
    author: 'LedgerScan Pro Team',
    date: '2024-12-10',
    readTime: '5 min read',
  },
  {
    slug: 'gstr-1-filing-guide',
    title: 'Step-by-Step GSTR-1 Filing Guide for Small Businesses',
    excerpt: 'Everything you need to know about filing GSTR-1, including deadlines, formats, and common errors to avoid.',
    category: 'GST Compliance',
    author: 'LedgerScan Pro Team',
    date: '2024-12-05',
    readTime: '10 min read',
  },
  {
    slug: 'double-entry-bookkeeping-basics',
    title: 'Double-Entry Bookkeeping: Why It Matters for Your Business',
    excerpt: 'Understand the fundamentals of double-entry accounting and how it keeps your books accurate and audit-ready.',
    category: 'Accounting Tips',
    author: 'LedgerScan Pro Team',
    date: '2024-11-28',
    readTime: '7 min read',
  },
  {
    slug: 'whatsapp-invoice-management',
    title: 'Managing WhatsApp Invoices: From Chaos to Organized',
    excerpt: 'Tips and tools for capturing, organizing, and processing invoices received via WhatsApp for your business.',
    category: 'Productivity',
    author: 'LedgerScan Pro Team',
    date: '2024-11-20',
    readTime: '6 min read',
  },
  {
    slug: 'year-end-accounting-checklist',
    title: 'Year-End Accounting Checklist for Indian Businesses',
    excerpt: 'A comprehensive checklist to ensure your books are ready for the financial year-end and tax filing season.',
    category: 'Accounting Tips',
    author: 'LedgerScan Pro Team',
    date: '2024-11-15',
    readTime: '12 min read',
  },
];

const categories = ['All', 'GST Compliance', 'Accounting Tips', 'Product Updates', 'Productivity'];

const Blog = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            LedgerScan Pro <span className="text-accent">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Expert insights on GST compliance, accounting best practices, and tips to streamline your business finances.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? 'accent' : 'outline'}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                {/* Placeholder image */}
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <span className="text-4xl font-bold text-accent/20">{post.category.charAt(0)}</span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                    <Button variant="ghost" size="sm" className="text-accent">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Get the latest GST updates, accounting tips, and product news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
              />
              <Button variant="hero" className="bg-accent hover:bg-accent/90">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
