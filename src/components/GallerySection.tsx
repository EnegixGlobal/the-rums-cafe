import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import food1 from "@/assets/f1.png";
import coffee1 from "@/assets/f2.png";
import interior1 from "@/assets/f3.png";
import dessert1 from "@/assets/f4.png";
import peopleDining from "@/assets/f5.png";
import cafeVibes from "@/assets/f6.png";
import one from "@/assets/DSC00787.JPG.jpeg";
import two from "@/assets/DSC00833.JPG.jpeg";
import three from "@/assets/_DSC1203.JPG.jpeg";
import four from "@/assets/DSC00231.JPG.jpeg";
const images = [
  {
    src: food1,
    alt: "Gourmet plated dish",
    span: "md:col-span-2 md:row-span-2",
  },
  { src: coffee1, alt: "Artisan latte art", span: "" },
  { src: interior1, alt: "Restaurant interior", span: "" },
  { src: dessert1, alt: "Chocolate dessert", span: "" },
  { src: peopleDining, alt: "Friends enjoying dinner", span: "" },
  { src: one, alt: "Artisan latte art", span: "" },
  { src: two, alt: "Restaurant interior", span: "" },
  { src: three, alt: "Chocolate dessert", span: "" },
  { src: four, alt: "Friends enjoying dinner", span: "" },
  // { src: cafeVibes, alt: "Cozy café corner", span: "md:col-span-2" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // animate={inView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.8 }}
          className="text-center mb-16"
          data-aos="zoom-in"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4">
            Captured Moments
          </p>
          <h2 className="heading-lg text-foreground">
            Our <span className="italic">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              // initial={{ opacity: 0, scale: 0.95 }}
              // animate={inView ? { opacity: 1, scale: 1 } : {}}
              // transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${img.span}`}
              data-aos="flip-right"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full min-h-[200px] object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
