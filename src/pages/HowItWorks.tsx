import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Camera,
  Zap,
  Eye,
  FileSpreadsheet,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Edit3,
  Shield
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Camera,
      title: 'Upload or Scan Your Bill',
      description: 'Take a photo with your phone, upload a PDF, or forward your WhatsApp invoice. Our system accepts bills from any source.',
      details: [
        'Use mobile camera for physical bills',
        'Upload PDFs from email or folders',
        'Forward WhatsApp invoices directly',
        'Bulk upload multiple bills at once',
      ],
      visual: 'upload',
    },
    {
      number: '02',
      icon: Zap,
      title: 'AI Extracts & Validates Data',
      description: 'Our AI engine reads every detail from your bill — invoice number, date, party details, line items, taxes, and more.',
      details: [
        'Invoice number & date recognition',
        'Party name and GSTIN extraction',
        'Line-by-line item detection',
        'Tax calculation verification',
      ],
      visual: 'extraction',
    },
    {
      number: '03',
      icon: Eye,
      title: 'Review & Approve',
      description: 'Check the extracted data, make any corrections if needed, and approve the entry. You stay in full control.',
      details: [
        'Edit any field before saving',
        'Map to existing ledgers',
        'Split or merge line items',
        'Add notes or tags',
      ],
      visual: 'review',
    },
    {
      number: '04',
      icon: FileSpreadsheet,
      title: 'Ledger & Voucher Created',
      description: 'Once approved, the system creates the proper accounting entry — purchase, sales, or expense voucher with GST.',
      details: [
        'Double-entry voucher generated',
        'Party ledger updated automatically',
        'GST input/output recorded',
        'Linked to original bill',
      ],
      visual: 'voucher',
    },
    {
      number: '05',
      icon: BarChart3,
      title: 'Reports Updated Instantly',
      description: 'Your dashboard, P&L, balance sheet, and GST reports reflect the new entry immediately. Always up to date.',
      details: [
        'Real-time dashboard updates',
        'GST liability calculated',
        'Outstanding payments tracked',
        'Export-ready reports',
      ],
      visual: 'reports',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            How <span className="text-accent">LedgerScan Pro</span> Works
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up animation-delay-100">
            From scanning a bill to seeing it in your reports — in just a few seconds. Here's the simple 5-step process that automates your accounting.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24 last:mb-0`}
              >
                {/* Step Number Circle */}
                <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 w-16 h-16 bg-accent rounded-full items-center justify-center shadow-glow z-10">
                  <span className="text-xl font-bold text-accent-foreground">{step.number}</span>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2 lg:pl-16' : 'lg:pr-16 lg:text-right'}`}>
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                    <div className="lg:hidden w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <span className="text-lg font-bold text-accent-foreground">{step.number}</span>
                    </div>
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                    {step.details.map((detail, dIndex) => (
                      <li key={dIndex} className={`flex items-center gap-3 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1 lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-lifted">
                    <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                      <step.icon className="w-16 h-16 text-accent/30" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              You Stay in Control
            </h2>
            <p className="text-lg text-muted-foreground">
              Automation doesn't mean losing control. Every entry is editable, and your accountant can review everything.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Edit3, title: 'Editable Entries', desc: 'Modify any field before or after saving. Full flexibility.' },
              { icon: Eye, title: 'Review Dashboard', desc: 'See all pending entries for approval in one place.' },
              { icon: Shield, title: 'Audit Trail', desc: 'Complete history of who made what changes, when.' },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border text-center card-hover">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            The best way to understand LedgerScan Pro is to try it yourself. Start your free trial or book a personalized demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Book Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
