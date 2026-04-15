import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "I recently visited this the rums cafe and had a wonderful experience. The ambiance is warm, cozy, and perfect for relaxing or catching up with friends. The decor is aesthetically pleasing, with soft lighting and a calm vibe that makes you want to stay longer. Overall, it's a great place to unwind, enjoy good food, and spend quality time. Definitely worth a visit!",
    author: "Mansi",
    role: "Regular Guest",
  },
  {
    text: "Great Place to hangout with anyone, great staff. kind and Generous, Food is delicious with Veg and Non Veg options, Easy to order and Great Ambience. Amazing Service, Cost Friendly",
    author: "ThundeR Skr",
    role: "Local Guide",
  },
  {
    text: "Loved the place !! The food was really delicious and the service was also very welcoming and warm . The ambience of the cafe is very beautiful. Must visit place .",
    author: "ASMA",
    role: "Local Guide",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // animate={inView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.8 }}
          className="text-center mb-16"
          data-aos="zoom-in"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4">
            What They Say
          </p>
          <h2 className="heading-lg text-foreground">
            Voices of <span className="italic">Love</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              // initial={{ opacity: 0, y: 30 }}
              // animate={inView ? { opacity: 1, y: 0 } : {}}
              // transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card p-8 lg:p-10 rounded-sm border border-border hover-lift"
              data-aos="fade-down"
            >
              <Quote className="w-8 h-8 text-sage/40 mb-6" />
              <p className="font-display text-lg italic text-foreground mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <p className="font-body text-sm font-medium text-foreground">
                  {t.author}
                </p>
                <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mt-1">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
