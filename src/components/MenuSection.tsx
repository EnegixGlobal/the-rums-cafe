import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import coffeeImg from "@/assets/coffee-1.jpg";
import starterImg from "@/assets/starter.jpg";
import mainCourseImg from "@/assets/main-course.jpg";
import dessertImg from "@/assets/dessert-1.jpg";
import { ExternalLink } from "lucide-react";

const categories = [
  { name: "Coffee & Beverages", image: coffeeImg },
  { name: "Starters", image: starterImg },
  { name: "Main Course", image: mainCourseImg },
  { name: "Desserts", image: dessertImg },
];

const MENU_LINK =
  "https://drive.google.com/file/d/1LROw490XjO4YfrM8ThQrmbt2Swfn-e6s/view?usp=sharing";

const MenuSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="bg-card px-10 py-10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // animate={inView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.8 }}
          className="text-center mb-16"
          data-aos="zoom-in"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4">
            Curated with Love
          </p>
          <h2 className="heading-lg text-foreground mb-4">
            Our <span className="italic">Menu</span>
          </h2>
          <p className="body-md text-muted-foreground max-w-xl mx-auto">
            From handcrafted coffees to chef-curated plates — discover flavours
            that speak to your soul.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              // initial={{ opacity: 0, y: 30 }}
              // animate={inView ? { opacity: 1, y: 0 } : {}}
              // transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer hover-lift"
              data-aos="flip-left"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/55 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-5">
                <h3 className="font-display text-lg text-cream">{cat.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          // animate={inView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
          data-aos="fade-in"
        >
          <a
            href={MENU_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-4 bg-sage-dark text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-sage transition-colors duration-300"
          >
            View Full Menu
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
