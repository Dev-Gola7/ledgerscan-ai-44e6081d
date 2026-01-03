import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import {
  Mail,
  Phone,
  Clock,
  ArrowRight,
  CheckCircle2,
  Building2
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          business_name: formData.businessName || null,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
          submission_type: 'contact',
        });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoRequest = async () => {
    if (!formData.name || !formData.email) {
      toast({
        title: "Please fill in your details",
        description: "Name and email are required to book a demo.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          business_name: formData.businessName || null,
          email: formData.email,
          phone: formData.phone || null,
          message: 'Demo request',
          submission_type: 'demo',
        });

      if (error) throw error;

      toast({
        title: "Demo requested!",
        description: "We'll reach out to schedule your personalized demo.",
      });

      setFormData({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    'Personalized product walkthrough',
    'Answers to all your questions',
    'Custom pricing for your needs',
    'Help with setup and migration',
  ];

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
            Get in <span className="text-accent">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Ready to automate your accounting? Book a demo or send us a message. Our team will get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-lifted"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="ABC Traders"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we help? *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business and what you're looking for..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Demo Benefits */}
              <div className="bg-secondary rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Book a Demo</h3>
                <p className="text-muted-foreground mb-6">
                  See LedgerScan Pro in action with a personalized demo from our product experts.
                </p>
                <ul className="space-y-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="accent" 
                  size="lg" 
                  className="w-full"
                  onClick={handleDemoRequest}
                  disabled={isSubmitting}
                >
                  Schedule Demo Call
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Contact Info */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:support@ledgerscanpro.com" className="text-muted-foreground hover:text-accent transition-colors">
                        support@ledgerscanpro.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+911234567890" className="text-muted-foreground hover:text-accent transition-colors">
                        +91 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">
                        Mon - Fri: 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-muted-foreground">
                        Bangalore, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
