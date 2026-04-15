import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, ExternalLink } from "lucide-react";

const CAREERS_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSeOlYThTZt22aXw2Cz3xe99-UXttRZx2gwqlknjSF-2Bo2OrA/viewform?usp=publish-editor";

const CareersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="careers"
      className="bg-background py-10 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // animate={inView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.8 }}
          data-aos="zoom-in"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4">
            Join Our Team
          </p>
          <h2 className="heading-lg text-foreground mb-4">
            Build Your <span className="italic">Career</span> With Us
          </h2>
          <p className="body-md text-muted-foreground max-w-xl mx-auto mb-10">
            We're always looking for passionate individuals who share our love
            for great food, warm hospitality, and memorable experiences.
          </p>
        </motion.div>

        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          // animate={inView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.6, delay: 0.3 }}
          data-aos="fade-down-left"
          className="inline-flex flex-col items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-sage-light flex items-center justify-center">
            <Briefcase className="w-7 h-7 text-sage-dark" />
          </div>
          <a
            href={CAREERS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-4 bg-sage-dark text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-sage-dark transition-colors duration-300"
          >
            Apply Now
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
