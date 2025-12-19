import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Building2,
  Briefcase,
  Store,
  User,
  Calculator,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      id: 'small-businesses',
      icon: Building2,
      title: 'Small Businesses',
      tagline: 'Simple accounting without the complexity',
      description: 'Perfect for business owners who want clean books without learning accounting. Just scan your bills and let the system handle the rest.',
      features: [
        'Simple, intuitive dashboard',
        'No accounting knowledge required',
        'Automatic expense categorization',
        'Monthly summaries and reports',
        'GST-ready from day one',
        'Mobile app for on-the-go scanning',
      ],
      benefit: 'Focus on your business, not bookkeeping',
    },
    {
      id: 'agencies',
      icon: Briefcase,
      title: 'Agencies & Service Providers',
      tagline: 'Track expenses and stay audit-ready',
      description: 'For agencies that deal with multiple vendors, recurring expenses, and need clean books for client billing and tax filing.',
      features: [
        'Vendor-wise expense tracking',
        'Project cost allocation',
        'GST input credit management',
        'Client-wise billing support',
        'Audit-ready documentation',
        'Multi-user access',
      ],
      benefit: 'Never miss an expense or input credit',
    },
    {
      id: 'traders',
      icon: Store,
      title: 'Traders & Retailers',
      tagline: 'Manage purchase, sales, and inventory',
      description: 'Built for businesses that buy and sell goods. Track stock, manage purchase bills, and maintain accurate inventory with every transaction.',
      features: [
        'Purchase and sales bill tracking',
        'Automatic stock updates',
        'Party-wise outstanding',
        'Multiple price lists',
        'Low stock alerts',
        'Inventory valuation reports',
      ],
      benefit: 'Complete visibility of your trading operations',
    },
    {
      id: 'freelancers',
      icon: User,
      title: 'Freelancers & Consultants',
      tagline: 'Track expenses and stay GST compliant',
      description: 'For independent professionals who need to track business expenses, manage invoices, and file GST without complexity.',
      features: [
        'Quick expense logging',
        'Invoice generation',
        'GST calculation and tracking',
        'Quarterly summary for returns',
        'Annual profit/loss statement',
        'Simple mobile interface',
      ],
      benefit: 'Professional accounting in minutes, not hours',
    },
    {
      id: 'accountants',
      icon: Calculator,
      title: 'Accountants & CA Firms',
      tagline: 'Faster data entry, happier clients',
      description: 'For accounting professionals managing multiple clients. Speed up data entry, reduce errors, and deliver audit-ready books faster.',
      features: [
        'Multi-company management',
        'Client-wise dashboards',
        'Bulk bill processing',
        'Tally-compatible export',
        'GSTR-ready data',
        'Audit trail and logs',
      ],
      benefit: 'Handle more clients in less time',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Solutions for <span className="text-accent">Every Business</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animation-delay-100">
            Whether you're a small business owner, trader, freelancer, or accounting professional — LedgerScan Pro adapts to your workflow.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                id={solution.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                        <solution.icon className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold">{solution.title}</h2>
                        <p className="text-accent font-medium">{solution.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      {solution.description}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                      {solution.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-accent/10 rounded-xl p-4 border border-accent/20 mb-6">
                      <p className="font-medium text-accent">
                        → {solution.benefit}
                      </p>
                    </div>

                    <Link to="/contact">
                      <Button variant="accent">
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-card rounded-2xl p-8 border border-border shadow-lifted">
                      <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
                        <solution.icon className="w-20 h-20 text-accent/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Solution Fits?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Talk to our team and we'll help you find the perfect setup for your business needs.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
              Talk to an Expert
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
