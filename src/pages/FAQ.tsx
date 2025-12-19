import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      category: 'General',
      questions: [
        {
          question: 'Is LedgerScan Pro a replacement for Tally?',
          answer: 'LedgerScan Pro is designed to complement your existing workflow. It automates the data entry part of accounting — scanning bills and creating vouchers. You can export data to Tally in compatible format, or use LedgerScan Pro as your complete accounting solution for simpler needs.',
        },
        {
          question: 'Can my CA or accountant use this?',
          answer: 'Absolutely! We have a special Accountant Plan designed for CAs and accounting professionals. They can manage multiple clients, process bills in bulk, and export data in Tally-compatible format. Many accountants use LedgerScan Pro to speed up their data entry work.',
        },
        {
          question: 'How accurate is the AI bill scanning?',
          answer: 'Our AI achieves 95%+ accuracy on standard invoices. The system is trained on thousands of Indian invoice formats including GST invoices, e-Way bills, and various retailer formats. You can always review and correct any extracted data before saving.',
        },
        {
          question: 'What types of bills can I scan?',
          answer: 'You can scan or upload almost any type of business document — purchase invoices, sales bills, expense receipts, GST invoices, e-Way bills, and more. We support camera photos, PDFs, and even WhatsApp-forwarded invoices.',
        },
      ],
    },
    {
      category: 'Features & Functionality',
      questions: [
        {
          question: 'Is GST filing supported?',
          answer: 'LedgerScan Pro prepares all the data needed for GST filing — GSTR-1 and GSTR-3B. You can export this data and file through the GST portal or your preferred filing software. We don\'t directly file GST returns, but we make the preparation effortless.',
        },
        {
          question: 'Can I edit entries after they are created?',
          answer: 'Yes, you have full control. Every entry can be edited, deleted, or adjusted. We also maintain a complete audit trail so you can see all changes made to any entry.',
        },
        {
          question: 'Does it support inventory management?',
          answer: 'Yes, our Professional and Business plans include inventory management. You can track stock items, quantities, and valuation. Stock is automatically updated with every purchase and sales entry.',
        },
        {
          question: 'Can I access it on mobile?',
          answer: 'Yes! We have mobile apps for both iOS and Android. You can scan bills on the go, review entries, and check your dashboard from anywhere.',
        },
      ],
    },
    {
      category: 'Pricing & Plans',
      questions: [
        {
          question: 'Is there a free trial?',
          answer: 'Yes, we offer a 14-day free trial on all plans. No credit card required. You can scan bills, create entries, and explore all features during the trial period.',
        },
        {
          question: 'Can I upgrade or downgrade my plan?',
          answer: 'Yes, you can change your plan at any time. When upgrading, you get immediate access to new features. When downgrading, the change takes effect at the next billing cycle.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, debit cards, UPI, and net banking. For annual plans, we also offer bank transfer options.',
        },
        {
          question: 'Is there a refund policy?',
          answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with LedgerScan Pro within the first 30 days of a paid subscription, we\'ll refund your payment.',
        },
      ],
    },
    {
      category: 'Security & Data',
      questions: [
        {
          question: 'Is my data secure?',
          answer: 'Absolutely. We use bank-grade encryption (AES-256) for all data storage and TLS 1.3 for data in transit. Our infrastructure is hosted on SOC 2 Type II certified cloud providers with 99.9% uptime.',
        },
        {
          question: 'Can I export my data?',
          answer: 'Yes, you can export all your data at any time. We support multiple formats including Excel, CSV, and Tally-compatible XML. Your data always belongs to you.',
        },
        {
          question: 'Who can access my data?',
          answer: 'Only you and users you authorize can access your data. We have strict role-based access controls and maintain detailed audit logs. Our support team can only access your data with your explicit permission.',
        },
      ],
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animation-delay-100">
            Find answers to common questions about LedgerScan Pro. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${catIndex}-${index}`}
                    className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-soft"
                  >
                    <AccordionTrigger className="text-left font-medium py-5 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our support team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Contact Support
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
