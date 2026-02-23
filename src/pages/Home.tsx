import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  FileText, 
  Smartphone, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Receipt,
  Calculator,
  FileSpreadsheet,
  TrendingUp,
  IndianRupee,
} from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';

const Home = () => {
  const trustPoints = [
    'Built with real Tally & GST logic',
    'Used by 500+ businesses & accountants',
    'Secure • GST-ready • Audit-friendly',
  ];

  const painPoints = [
    { icon: Receipt, title: 'Paper bills piling up', desc: 'Hard to track and easy to lose' },
    { icon: FileText, title: 'PDFs everywhere', desc: 'Scattered across email and folders' },
    { icon: Smartphone, title: 'WhatsApp invoices', desc: 'Buried in chat history' },
    { icon: Calculator, title: 'Manual data entry', desc: 'Hours spent typing numbers' },
  ];

  const features = [
    { icon: Camera, title: 'AI Bill Scanning', desc: 'Photo, PDF, or WhatsApp — we read it all' },
    { icon: FileSpreadsheet, title: 'Auto Ledger Creation', desc: 'Party ledgers created automatically' },
    { icon: Receipt, title: 'Tally-Style Entries', desc: 'Double-entry vouchers like you expect' },
    { icon: IndianRupee, title: 'GST Calculation', desc: 'CGST, SGST, IGST — handled correctly' },
    { icon: TrendingUp, title: 'Reports & Dashboards', desc: 'Real-time business insights' },
    { icon: Smartphone, title: 'Mobile & Web Access', desc: 'Work from anywhere, anytime' },
  ];

  const dashboardMetrics = [
    { label: 'Monthly Sales', value: '₹4,52,000', trend: '+12%', color: 'text-accent' },
    { label: 'Monthly Expenses', value: '₹1,85,000', trend: '-5%', color: 'text-accent' },
    { label: 'GST Payable', value: '₹48,060', trend: '', color: 'text-foreground' },
    { label: 'Outstanding', value: '₹72,500', trend: '', color: 'text-destructive' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary to-background section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                AI That Turns Bills Into Clean Accounting —{' '}
                <span className="text-accent">Automatically</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                LedgerScan Pro scans any bill (photo, PDF, WhatsApp invoice) and converts it into proper accounting entries, GST records, and reports — just like Tally, but automated.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Start Free Trial
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

            {/* Hero Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-card rounded-2xl shadow-elevated p-6 border border-border">
                {/* Mock Product Interface */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-sm text-muted-foreground ml-2">LedgerScan Pro</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="col-span-1 bg-secondary rounded-xl p-4">
                    <Receipt className="w-8 h-8 text-accent mb-2" />
                    <p className="text-xs text-muted-foreground">Bill Scanned</p>
                    <p className="text-sm font-semibold">Invoice #1234</p>
                  </div>
                  <div className="col-span-2 bg-secondary rounded-xl p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-xs text-muted-foreground">AI Extraction</p>
                        <p className="text-sm font-semibold">ABC Traders</p>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div><span className="text-muted-foreground">Amount:</span> ₹15,000</div>
                      <div><span className="text-muted-foreground">GST:</span> ₹2,700</div>
                      <div><span className="text-muted-foreground">GSTIN:</span> 29ABCDE...</div>
                      <div><span className="text-muted-foreground">Date:</span> Dec 18</div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">Entry Created</span>
                  </div>
                  <div className="text-xs space-y-1 text-muted-foreground">
                    <p>Purchase A/c Dr. ₹15,000</p>
                    <p>Input CGST Dr. ₹1,350</p>
                    <p>Input SGST Dr. ₹1,350</p>
                    <p className="text-right">To ABC Traders ₹17,700</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-xl px-4 py-2 shadow-glow"
              >
                <span className="text-sm font-semibold">✓ GST Auto-Calculated</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-6 bg-primary">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm md:text-base">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bills Are Everywhere. Accounting Is Still Manual.
            </h2>
            <p className="text-lg text-muted-foreground">
              Every business deals with the same chaos — scattered invoices, manual data entry, GST errors, and stress during filing season.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <StaggerItem key={index}>
                <div className="bg-card rounded-xl p-6 border border-border card-hover h-full">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-semibold mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              One Scan. <span className="text-accent">Complete Accounting.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              This is not just bill storage. This is real accounting automation.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Scan or Upload', desc: 'Take a photo or upload PDF/WhatsApp invoice', icon: Camera },
              { step: '02', title: 'AI Understands', desc: 'Extracts all invoice data accurately', icon: Zap },
              { step: '03', title: 'Entry Created', desc: 'Accounting voucher ready automatically', icon: FileSpreadsheet },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.15} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-glow">
                    <item.icon className="w-10 h-10 text-accent-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Modern Accounting
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features built with real Tally logic and GST compliance in mind.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="bg-card rounded-xl p-6 border border-border card-hover group h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* GST Returns Highlight */}
      <section className="section-padding bg-gradient-to-r from-accent/10 to-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4 inline-block">
                New Feature
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                File GST Returns with <span className="text-accent">Zero Stress</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                LedgerScan Pro automatically prepares your GSTR-1 and GSTR-3B from scanned bills. No more last-minute rushes or manual data entry during filing season.
              </p>
              <ul className="space-y-3 mb-8">
                {['Auto CGST/SGST/IGST calculation', 'Input credit reconciliation', 'GSTR-1 & GSTR-3B ready data', 'Interactive filing checklist'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/gst-returns">
                <Button variant="accent" size="lg">
                  Explore GST Filing
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lifted">
                <div className="flex items-center gap-2 mb-6">
                  <Calculator className="w-6 h-6 text-accent" />
                  <h3 className="font-semibold text-lg">GST Summary</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Output CGST', value: '₹24,030' },
                    { label: 'Output SGST', value: '₹24,030' },
                    { label: 'Input CGST', value: '₹16,650' },
                    { label: 'Input SGST', value: '₹16,650' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                      <span className="text-muted-foreground text-sm">{row.label}</span>
                      <span className="font-semibold">{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <span className="font-semibold text-accent">Net Payable</span>
                    <span className="font-bold text-accent text-lg">₹14,760</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Business at a Glance
              </h2>
              <p className="text-lg text-primary-foreground/70 mb-8">
                Real-time dashboards showing sales, expenses, GST liability, and outstanding payments — updated with every bill you scan.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {dashboardMetrics.map((metric, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-primary-foreground/10 rounded-xl p-4"
                  >
                    <p className="text-sm text-primary-foreground/60 mb-1">{metric.label}</p>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-2xl font-bold ${metric.color}`}>{metric.value}</span>
                      {metric.trend && (
                        <span className="text-sm text-accent">{metric.trend}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-primary-foreground/5 rounded-2xl p-6 border border-primary-foreground/10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold">Monthly Overview</h3>
                  <span className="text-sm text-primary-foreground/60">December 2024</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Sales', value: 80, color: 'bg-accent' },
                    { label: 'Expenses', value: 45, color: 'bg-primary-foreground/30' },
                    { label: 'Profit', value: 65, color: 'bg-accent/70' },
                  ].map((bar, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{bar.label}</span>
                        <span>{bar.value}%</span>
                      </div>
                      <div className="h-3 bg-primary-foreground/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${bar.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className={`h-full ${bar.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop Manual Accounting. <span className="text-accent">Start Automating.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have simplified their accounting with LedgerScan Pro. No credit card required to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  Request Demo
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
