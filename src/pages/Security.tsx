import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Shield,
  Lock,
  Server,
  Eye,
  Clock,
  FileCheck,
  Users,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Your financial data is always protected.',
    },
    {
      icon: Server,
      title: 'Secure Cloud Infrastructure',
      description: 'Hosted on enterprise-grade cloud infrastructure with SOC 2 Type II certification and 99.9% uptime SLA.',
    },
    {
      icon: Users,
      title: 'Role-Based Access Control',
      description: 'Define user roles and permissions. Control who can view, edit, or approve accounting entries.',
    },
    {
      icon: Clock,
      title: 'Daily Backups',
      description: 'Automatic daily backups with 30-day retention. Your data is always recoverable and safe.',
    },
    {
      icon: Eye,
      title: 'Complete Audit Trail',
      description: 'Every action is logged with timestamp and user details. Perfect for compliance and audits.',
    },
    {
      icon: FileCheck,
      title: 'GST & Accounting Compliance',
      description: 'Built following Indian accounting standards and GST regulations. Audit-ready documentation.',
    },
  ];

  const compliancePoints = [
    'GDPR compliant data handling',
    'Indian IT Act 2000 compliance',
    'GST regulation adherence',
    'Industry-standard security practices',
    'Regular security audits',
    'Vulnerability assessments',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <div className="container-custom text-center">
          <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <Shield className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Enterprise-Grade <span className="text-accent">Security</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animation-delay-100">
            Your financial data deserves the highest level of protection. LedgerScan Pro is built with security at its core.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border card-hover"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Compliance & Certifications
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We follow industry best practices and regulatory requirements to ensure your data is handled with the utmost care and compliance.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {compliancePoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Uptime SLA', value: '99.9%' },
                  { label: 'Backup Retention', value: '30 Days' },
                  { label: 'Encryption', value: 'AES-256' },
                  { label: 'TLS Version', value: '1.3' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-secondary rounded-xl">
                    <p className="text-3xl font-bold text-accent mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Handling */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              How We Handle Your Data
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Data Collection',
                  content: 'We only collect data necessary for providing our service — bill images, extracted invoice data, and accounting entries. No unnecessary personal information is stored.',
                },
                {
                  title: 'Data Storage',
                  content: 'All data is stored on secure cloud servers with encryption. We use geographically distributed data centers for redundancy and reliability.',
                },
                {
                  title: 'Data Access',
                  content: 'Only authorized personnel with specific roles can access system data, and all access is logged. Your data is never shared with third parties without consent.',
                },
                {
                  title: 'Data Deletion',
                  content: 'You can request complete deletion of your data at any time. We provide data export in standard formats before deletion.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions About Security?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Our team is happy to answer any questions about our security practices and compliance.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="bg-accent hover:bg-accent/90">
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Security;
