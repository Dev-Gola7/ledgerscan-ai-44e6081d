import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Calculator,
  Upload,
  Shield,
  Clock,
  IndianRupee,
  AlertTriangle,
} from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const checklistItems = [
  'All sales invoices for the period',
  'All purchase invoices with valid GSTIN',
  'Credit/debit notes issued or received',
  'HSN/SAC codes mapped for all items',
  'Input tax credit reconciliation done',
  'Previous period pending adjustments',
  'Bank statements for payment verification',
  'E-way bills for applicable transactions',
];

const GSTReturns = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleCheck = (index: number) => {
    setCheckedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const filingSteps = [
    {
      icon: Upload,
      title: 'Upload Bills',
      desc: 'Scan or upload all your purchase and sales invoices. LedgerScan Pro reads them automatically.',
    },
    {
      icon: Calculator,
      title: 'Auto GST Calculation',
      desc: 'CGST, SGST, IGST calculated automatically. Input credit matched with purchases.',
    },
    {
      icon: FileText,
      title: 'GSTR-1 Preparation',
      desc: 'Sales data organized by B2B, B2C, and export categories. Ready for filing.',
    },
    {
      icon: Shield,
      title: 'GSTR-3B Filing',
      desc: 'Summary return with tax liability, input credit, and net payable amount computed.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
              GST Compliance Made Easy
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              File GST Returns with <span className="text-accent">Confidence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              LedgerScan Pro automates GSTR-1 and GSTR-3B preparation. From bill scanning to return-ready data — everything is handled by AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Start Filing Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  Book Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why GST Filing Is Hard */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why GST Filing Feels <span className="text-destructive">Overwhelming</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Most businesses struggle with GST because of manual processes and scattered data.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: AlertTriangle, title: 'Manual Data Entry', desc: 'Typing hundreds of invoice details by hand' },
              { icon: Clock, title: 'Last-Minute Rush', desc: 'Scrambling before filing deadlines' },
              { icon: IndianRupee, title: 'ITC Mismatches', desc: 'Input credit rejected due to errors' },
              { icon: FileText, title: 'Multiple Formats', desc: 'Bills in photos, PDFs, WhatsApp, email' },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-card rounded-xl p-6 border border-border card-hover h-full">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              GST Filing in <span className="text-accent">4 Simple Steps</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              LedgerScan Pro handles the heavy lifting so you can file returns stress-free.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filingSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-glow">
                      <step.icon className="w-10 h-10 text-accent-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Checklist */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              GST Filing <span className="text-accent">Checklist</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Make sure you have everything ready before filing. Check off each item below.
            </p>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border shadow-lifted"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-lg">Filing Requirements</h3>
              <span className="text-sm text-muted-foreground">
                {checkedItems.length}/{checklistItems.length} completed
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 mb-6">
              <div
                className="bg-accent h-2 rounded-full transition-all duration-500"
                style={{ width: `${(checkedItems.length / checklistItems.length) * 100}%` }}
              />
            </div>
            <ul className="space-y-3">
              {checklistItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => toggleCheck(index)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary cursor-pointer transition-colors"
                >
                  <CheckCircle2
                    className={`w-5 h-5 flex-shrink-0 transition-colors ${
                      checkedItems.includes(index) ? 'text-accent' : 'text-border'
                    }`}
                  />
                  <span className={checkedItems.includes(index) ? 'line-through text-muted-foreground' : ''}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {checkedItems.length === checklistItems.length && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 bg-accent/10 rounded-xl text-center"
              >
                <p className="text-accent font-semibold">✓ All set! You're ready to file your GST returns.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simplify Your GST Filing Today
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Stop stressing about deadlines. Let LedgerScan Pro prepare your GST returns automatically from your bills and invoices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default GSTReturns;
