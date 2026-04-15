import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import arthLogo from "@/assets/arth.png";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const ARTH_ADVENT_LINK =
  "https://www.instagram.com/arthadventindia?igsh=MWE2bHUyOGl1azdiOQ==";

const ArthAdventSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="arth-advent" className="bg-background py-10 px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // animate={inView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.8 }}
          className="text-center mb-16"
          data-aos="zoom-in"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4">
            Our Venture
          </p>
          <img
            src={arthLogo}
            alt="Arth Advent"
            loading="lazy"
            width="300px"
            height=""
            className="mx-auto mb-6"
          />
          <div>
            Arth Advent has a global recognition as one of India's leading
            experts with Corporate Events, Exhibitions, Fashion Shows, Weddings,
            Celebrity & Talent Management, Malls & theme decor, lifestyle events
            i.e. brand & product launches, conferences, seminars, Promotions,
            planning & Implementation as its forte, Pioneering a new and more
            effective medium of brand communication. Arth Advent has set a
            benchmark for its competitors by being the market leader in event
            conceptualization and implementation with the best Service assurance
            with a Smile to make our clients Happy.
          </div>
          {/* CTA */}

          <a
            href={ARTH_ADVENT_LINK}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-4 bg-sage-dark text-primary-foreground mt-10 font-body text-sm tracking-widest uppercase rounded-sm hover:bg-sage-dark transition-colors duration-300"
          >
            Know More
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ArthAdventSection;
