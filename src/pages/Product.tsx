import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Camera,
  FileText,
  Smartphone,
  Zap,
  FileSpreadsheet,
  IndianRupee,
  Package,
  ArrowRight,
  CheckCircle2,
  Receipt,
  Calculator,
  Shield,
  Eye
} from 'lucide-react';

const Product = () => {
  const modules = [
    {
      icon: Camera,
      title: 'Bill Scanning',
      description: 'Capture bills from any source with our intelligent scanning technology.',
      features: [
        'Camera scan with auto-edge detection',
        'PDF upload and processing',
        'WhatsApp invoice import',
        'Email attachment extraction',
        'Bulk upload support',
      ],
    },
    {
      icon: Zap,
      title: 'AI Data Extraction',
      description: 'Our AI accurately reads and extracts all invoice details automatically.',
      features: [
        'Invoice number & date recognition',
        'Party name & address extraction',
        'GSTIN validation & lookup',
        'Line item detection',
        'Tax breakup identification',
      ],
    },
    {
      icon: FileSpreadsheet,
      title: 'Accounting Engine',
      description: 'Tally-style double-entry accounting, built for Indian businesses.',
      features: [
        'Double-entry bookkeeping system',
        'Purchase, Sales & Expense vouchers',
        'Automatic ledger creation',
        'Party-wise tracking',
        'Journal entry support',
      ],
    },
    {
      icon: IndianRupee,
      title: 'GST Engine',
      description: 'Complete GST compliance with automatic calculations and GSTR preparation.',
      features: [
        'Input & Output GST tracking',
        'CGST, SGST, IGST calculation',
        'GSTR-1 & GSTR-3B ready data',
        'Exception handling & alerts',
        'Reverse charge support',
      ],
    },
    {
      icon: Package,
      title: 'Inventory Module',
      description: 'Optional stock management for traders and retailers.',
      features: [
        'Stock item management',
        'Quantity tracking per transaction',
        'Multiple valuation methods',
        'Stock summary reports',
        'Low stock alerts',
      ],
    },
    {
      icon: Receipt,
      title: 'Reports & Analytics',
      description: 'Comprehensive reporting for business insights and compliance.',
      features: [
        'Profit & Loss statement',
        'Balance Sheet',
        'GST summary reports',
        'Party-wise outstanding',
        'Custom date range filters',
      ],
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            The Complete <span className="text-accent">Accounting Automation</span> Platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up animation-delay-100">
            From bill scanning to GST-ready reports, LedgerScan Pro handles every step of your accounting workflow with precision and intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-200">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="hero-outline" size="xl">
                See How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Modules, One Platform
            </h2>
            <p className="text-lg text-muted-foreground">
              Each module is designed with real accounting workflows in mind, working seamlessly together to automate your entire process.
            </p>
          </div>

          <div className="space-y-16">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                      <module.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">{module.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{module.description}</p>
                  <ul className="space-y-3">
                    {module.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-card rounded-2xl p-8 border border-border shadow-lifted">
                    <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                      <module.icon className="w-20 h-20 text-accent/30" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Works With Your Existing Tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Export data in Tally-compatible format, or use our APIs to connect with your existing systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FileText, title: 'Tally Export', desc: 'Export vouchers in Tally-compatible XML format' },
              { icon: Shield, title: 'Secure API', desc: 'RESTful API for custom integrations' },
              { icon: Calculator, title: 'Excel Export', desc: 'Download reports as Excel spreadsheets' },
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
            Ready to Automate Your Accounting?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of AI-driven accounting automation.
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

export default Product;
