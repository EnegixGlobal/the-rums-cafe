import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import cafeVibesImg from "@/assets/01.png";
import fineDiningImg from "@/assets/03.png";

const experiences = [
  {
    title: "Cozy Café Vibes",
    subtitle: "Morning to Evening",
    description:
      "Sink into soft cushions with a book, a latte, and the gentle hum of conversation. Our café space is designed for lingering — where time slows down and inspiration finds you.",
    image: cafeVibesImg,
  },
  {
    title: "Fine Dining Experience",
    subtitle: "Evening & Weekends",
    description:
      "As the lights dim and candles flicker, The Rums Cafe transforms into an intimate dining destination. Every dish is a composition — crafted with precision, presented with artistry.",
    image: fineDiningImg,
  },
];

const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={imgRef}
      className="relative overflow-hidden rounded-sm group h-[400px] lg:h-[500px]"
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-[130%] object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
        loading="lazy"
        width={1200}
        height={800}
      />
    </div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="section-padding bg-background"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto" data-aos="fade-right">
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // animate={inView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.8 }}
          className="text-center mb-20"
          data-aos="zoom-in"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4">
            Two Worlds, One Space
          </p>
          <h2 className="heading-lg text-foreground">
            The <span className="italic">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              // initial={{ opacity: 0, y: 40 }}
              // animate={inView ? { opacity: 1, y: 0 } : {}}
              // transition={{ duration: 0.8, delay: i * 0.3 }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              data-aos="fade-right"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <ParallaxImage src={exp.image} alt={exp.title} />
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="font-body text-sm tracking-[0.2em] uppercase text-sage mb-3">
                  {exp.subtitle}
                </p>
                <h3 className="heading-md text-foreground mb-6">{exp.title}</h3>
                <div className="divider-sage mb-6" />
                <p className="body-md text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
