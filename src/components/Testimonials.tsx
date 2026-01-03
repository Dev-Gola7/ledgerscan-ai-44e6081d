import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Owner, Kumar Trading Co.',
    company: 'Kumar Trading Co.',
    content: 'LedgerScan Pro has reduced our accounting time by 70%. What used to take hours now takes minutes. The GST calculations are always accurate.',
    rating: 5,
    avatar: 'RK',
  },
  {
    name: 'Priya Sharma',
    role: 'Chartered Accountant',
    company: 'Sharma & Associates',
    content: 'As a CA handling 50+ clients, this tool is a game-changer. Bulk processing and Tally export have made my practice so much more efficient.',
    rating: 5,
    avatar: 'PS',
  },
  {
    name: 'Amit Patel',
    role: 'Founder, TechStart Solutions',
    company: 'TechStart Solutions',
    content: 'Finally, accounting software that understands Indian business needs. The WhatsApp invoice import feature is brilliant!',
    rating: 5,
    avatar: 'AP',
  },
  {
    name: 'Sneha Reddy',
    role: 'Finance Manager',
    company: 'RedBird Exports',
    content: 'The real-time dashboard gives me complete visibility. GST filing prep that used to take 2 days now takes 2 hours.',
    rating: 5,
    avatar: 'SR',
  },
  {
    name: 'Vikram Singh',
    role: 'Retail Store Owner',
    company: 'Singh Electronics',
    content: 'Inventory tracking combined with bill scanning is exactly what my retail business needed. Stock is always accurate.',
    rating: 5,
    avatar: 'VS',
  },
  {
    name: 'Meera Joshi',
    role: 'Freelance Consultant',
    company: 'Independent',
    content: 'Simple, clean, and effective. I can track all my expenses and stay GST compliant without any accounting knowledge.',
    rating: 5,
    avatar: 'MJ',
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-accent">500+ Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what business owners, accountants, and finance professionals say about LedgerScan Pro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <div className="relative mb-4">
                <Quote className="w-8 h-8 text-accent/20 absolute -top-2 -left-1" />
                <p className="text-muted-foreground relative z-10 pl-4">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-accent">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
