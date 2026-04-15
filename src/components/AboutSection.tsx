import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import interiorImg from "@/assets/02.png";
import {
  PartyPopper,
  Users,
  Building2,
  Cake,
  Briefcase,
  Heart,
  Star,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
const partyTypes = [
  {
    icon: Cake,
    title: "Birthday Parties",
    desc: "Celebrate your special day with style and elegance",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    desc: "Professional gatherings in a premium setting",
  },
  {
    icon: Heart,
    title: "Kitty Parties",
    desc: "Perfect space for your get-togethers and social clubs",
  },
  {
    icon: PartyPopper,
    title: "Private Parties",
    desc: "Exclusive celebrations tailored to your vision",
  },
  {
    icon: Star,
    title: "Festive Events",
    desc: "Seasonal & themed parties for every occasion",
  },
  {
    icon: Users,
    title: "Social Gatherings",
    desc: "Reunions, farewells, and community events",
  },
];
const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="about"
      className="py-10 px-10 bg-background overflow-hidden"
      ref={ref}
    >
      <div className="section-padding py-0">
        <p className="body-md text-muted-foreground max-w-2xl mx-auto text-center mb-10">
          From intimate birthday celebrations to grand corporate events — we
          create unforgettable experiences for every occasion.
        </p>
        {/* Capacity highlight */}
        <motion.div
          // initial={{ opacity: 0, y: 20 }}
          // animate={inView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center justify-center gap-4 mb-14"
          data-aos="flip-left"
        >
          <div className="flex items-center gap-3 px-8 py-4 rounded-sm bg-card border border-border">
            <Building2 className="w-6 h-6 text-sage" />
            <div>
              <p className="font-display text-2xl md:text-3xl text-foreground font-medium">
                80–100
              </p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Guest Capacity
              </p>
            </div>
          </div>
        </motion.div>

        {/* Party types grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 ">
          {partyTypes.map((item, i) => (
            <motion.div
              key={item.title}
              // initial={{ opacity: 0, y: 25 }}
              // animate={inView ? { opacity: 1, y: 0 } : {}}
              // transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              data-aos="flip-right"
              className="group p-8 rounded-sm bg-card border border-border hover-lift text-center shadow-[0_0_10px_#6c875e]"
            >
              <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="w-6 h-6 text-sage-dark" />
              </div>
              <h4 className="font-display text-lg text-foreground mb-2">
                {item.title}
              </h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-20"
        >
          <Link
            to="/event-booking"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-4 bg-sage-dark text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-sage-dark transition-colors duration-300"
          >
            Book now
            <ExternalLink size={16} />
          </Link>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            // initial={{ opacity: 0, x: -40 }}
            // animate={inView ? { opacity: 1, x: 0 } : {}}
            // transition={{ duration: 0.8 }}
            data-aos="fade-right"
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4">
              Our Story
            </p>
            <h2 className="heading-lg text-foreground mb-8">
              More Than a Café.
              <br />
              <span className="italic text-sage-dark">An Experience.</span>
            </h2>
            <div className="divider-sage mb-8" />
            <p className="body-md text-muted-foreground mb-6">
              The Rums Cafe is not just a place to eat — it's a space to slow
              down, reconnect, and savour the moment. Born from a love for
              curated flavours and soulful ambience, every corner of our café
              tells a story.
            </p>
            <p className="body-md text-muted-foreground">
              From the warmth of a morning espresso to the elegance of an
              evening plated dinner, we craft experiences that linger long after
              the last bite. Here, community meets cuisine, and every visit
              feels like coming home.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            // initial={{ opacity: 0, x: 20 }}
            // animate={inView ? { opacity: 1, x: 0 } : {}}
            // transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden"
            data-aos="fade-left"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={interiorImg}
                alt="Elegant restaurant interior with warm lighting"
                className="w-full h-[500px] lg:h-[600px] object-cover"
                loading="lazy"
                width={800}
                height={1024}
              />
            </div>
            {/* <div className="absolute -bottom-4 -right-4 w-full h-full border border-sage/30 rounded-sm -z-10" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
