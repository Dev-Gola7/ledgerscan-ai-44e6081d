import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'For individuals and small businesses just getting started',
      monthlyPrice: 299,
      annualPrice: 249,
      features: [
        'Up to 100 bills/month',
        'AI bill scanning',
        'Basic reports',
        'Email support',
        'Mobile app access',
        '1 user',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'For growing businesses needing full accounting automation',
      monthlyPrice: 699,
      annualPrice: 599,
      features: [
        'Up to 500 bills/month',
        'Everything in Starter',
        'GST module with GSTR data',
        'Inventory management',
        'Advanced reports',
        'Priority support',
        'Up to 3 users',
        'Tally export',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Business',
      description: 'For established businesses with advanced needs',
      monthlyPrice: 1499,
      annualPrice: 1249,
      features: [
        'Unlimited bills',
        'Everything in Professional',
        'Multi-company support',
        'Custom reports',
        'API access',
        'Dedicated support',
        'Up to 10 users',
        'Custom integrations',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
  ];

  const accountantPlan = {
    name: 'Accountant Plan',
    description: 'Special pricing for CA firms and accounting professionals',
    features: [
      'Manage multiple clients',
      'Client-wise dashboards',
      'Bulk processing',
      'White-label options',
      'Volume discounts',
      'Priority support',
    ],
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary to-background">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Simple, Transparent <span className="text-accent">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up animation-delay-100">
            Choose the plan that fits your business. All plans include a 14-day free trial. No credit card required.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 animate-slide-up animation-delay-200">
            <span className={`font-medium ${!annual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch checked={annual} onCheckedChange={setAnnual} />
            <span className={`font-medium ${annual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
              <span className="ml-2 text-sm text-accent">(Save 15%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 border ${
                  plan.popular ? 'border-accent shadow-glow' : 'border-border'
                } card-hover`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">
                      ₹{annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  {annual && (
                    <p className="text-sm text-accent mt-1">
                      Billed ₹{plan.annualPrice * 12}/year
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="block">
                  <Button
                    variant={plan.popular ? 'accent' : 'outline'}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accountant Plan */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{accountantPlan.name}</h2>
                <p className="text-muted-foreground mb-6">{accountantPlan.description}</p>
                <ul className="space-y-3">
                  {accountantPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center md:text-right">
                <p className="text-3xl font-bold mb-2">Custom Pricing</p>
                <p className="text-muted-foreground mb-6">
                  Based on number of clients and volume
                </p>
                <Link to="/contact">
                  <Button variant="accent" size="lg">
                    Contact Sales
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Check our FAQ or contact our team for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/faq">
              <Button variant="outline" size="lg">
                <HelpCircle className="w-4 h-4" />
                View FAQ
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
