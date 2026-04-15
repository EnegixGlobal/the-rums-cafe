import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logoWhite from "@/assets/logo-color.png";
import { useParallax } from "@/hooks/use-parallax";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const parallaxY = useParallax(0.4);
  const MENU_LINK =
    "https://drive.google.com/file/d/1LROw490XjO4YfrM8ThQrmbt2Swfn-e6s/view?usp=sharing";
  const RESERVATION_LINK =
    "https://www.google.com/maps/reserve/v/dine/c/oXk-7HQER94?source=pa&opi=79508299&hl=en-IN&gei=Nx7Jaba2BtuhseMPm_iLoAQ&sourceurl=https://www.google.com/maps/preview/place?authuser%3D0%26hl%3Den%26gl%3Din%26q%3Drums%2Bcafe%26pb%3D!1m15!1s0x39f4e11e49a80103:0xd788d10b0e649c7d!2srums%2Bcafe!3m12!1m3!1d14028.17464227181!2d77.50460955000001!3d28.47822865!2m3!1f0.0!2f0.0!3f0.0!3m2!1i1024!2i768!4f13.1!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m3!1sNh7JaffPGqCYnesPmNWDkQ4!7e81!15i10112!15m108!1m26!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m15!3b1!4b1!5b1!6b1!13b1!14b1!17b1!21b1!22b1!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!90m2!1m1!1e2!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!128m1!1b0!21m0!22m1!1e81!30m8!3b1!6m2!1b1!2b1!7m2!1e3!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i772";
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-[-20%]">
        <img
          src={heroBg}
          alt="The Rums Cafe interior with warm ambient lighting"
          className="w-full h-full object-cover will-change-transform"
          style={{ transform: `translateY(${parallaxY * 0.5}px)` }}
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.img
          src={logoWhite}
          alt="The Rums Cafe Logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-32 md:h-44 w-auto mx-auto mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="heading-xl text-cream mb-8"
        >
          Where Conversations Brew
          <br />
          <span className="italic" style={{ color: "hsl(100, 20%, 80%)" }}>
            &amp; Flavours Flow
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="body-md text-cream-dark/80 mb-12 max-w-xl mx-auto"
        >
          A space where every sip tells a story and every bite is an experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={MENU_LINK}
            target="_blank"
            className="px-10 py-4 bg-sage-dark text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-sage-dark transition-colors duration-300"
          >
            Explore Menu
          </a>
          <Link
            to="/reserve"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="px-10 py-4 border border-cream/40 text-cream font-body text-sm tracking-widest uppercase rounded-sm hover:bg-cream/10 transition-colors duration-300"
          >
            Book a Table
          </Link>
          <Link
            to="/event-booking"
            className="px-10 py-4 bg-sage-dark border border-cream/40 text-cream font-body text-sm tracking-widest uppercase rounded-sm hover:bg-cream/10 transition-colors duration-300"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Enquiry for Parties
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-cream/40"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
