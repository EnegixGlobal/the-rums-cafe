import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const RESERVATION_LINK =
  "https://www.google.com/maps/reserve/v/dine/c/oXk-7HQER94?source=pa&opi=79508299&hl=en-IN&gei=Nx7Jaba2BtuhseMPm_iLoAQ&sourceurl=https://www.google.com/maps/preview/place?authuser%3D0%26hl%3Den%26gl%3Din%26q%3Drums%2Bcafe%26pb%3D!1m15!1s0x39f4e11e49a80103:0xd788d10b0e649c7d!2srums%2Bcafe!3m12!1m3!1d14028.17464227181!2d77.50460955000001!3d28.47822865!2m3!1f0.0!2f0.0!3f0.0!3m2!1i1024!2i768!4f13.1!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m3!1sNh7JaffPGqCYnesPmNWDkQ4!7e81!15i10112!15m108!1m26!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m15!3b1!4b1!5b1!6b1!13b1!14b1!17b1!21b1!22b1!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!90m2!1m1!1e2!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!128m1!1b0!21m0!22m1!1e81!30m8!3b1!6m2!1b1!2b1!7m2!1e3!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i772";
const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="section-padding bg-card overflow-hidden"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // animate={inView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.8 }}
          className="text-center mb-16"
          data-aos="zoom-in"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-sage mb-4">
            We'd Love to See You
          </p>
          <h2 className="heading-lg text-foreground">
            Get in <span className="italic">Touch</span>
          </h2>
        </motion.div>

        {/* Info grid */}
        <motion.div
          // initial={{ opacity: 0, y: 30 }}
          // animate={inView ? { opacity: 1, y: 0 } : {}}
          // transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14"
          data-aos="flip-up"
        >
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-5 h-5 text-sage-dark" />
            </div>
            <h4 className="font-display text-lg text-foreground mb-2">
              Location
            </h4>
            <p className="font-body text-sm text-muted-foreground">
              Bypass, opp. Ganga Enclave, Harmu Housing Colony, Argora, Ranchi,
              Jharkhand 834002
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
              <Phone className="w-5 h-5 text-sage-dark" />
            </div>
            <h4 className="font-display text-lg text-foreground mb-2">
              Call Us
            </h4>
            <p className="font-body text-sm text-muted-foreground">
              +91 9431560808
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
              <Mail className="w-5 h-5 text-sage-dark" />
            </div>
            <h4 className="font-display text-lg text-foreground mb-2">Email</h4>
            <p className="font-body text-sm text-muted-foreground">
              therusticmatrix@gmail.com
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
              <Clock className="w-5 h-5 text-sage-dark" />
            </div>
            <h4 className="font-display text-lg text-foreground mb-2">Hours</h4>
            <p className="font-body text-sm text-muted-foreground">
              Mon–Sun: 11 AM – 11 PM
              {/* <br />
              Sat–Sun: 9 AM – 12 AM */}
            </p>
          </div>
        </motion.div>

        {/* Reserve button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-14"
        >
          <Link
            to="/reserve"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-4 bg-sage-dark text-primary-foreground font-body text-sm tracking-widest uppercase rounded-sm hover:bg-sage-dark transition-colors duration-300"
          >
            Reserve a Table
            <ExternalLink size={16} />
          </Link>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-sm overflow-hidden border border-border"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.980638457072!2d85.29875009999999!3d23.352715999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e11e49a80103%3A0xd788d10b0e649c7d!2sThe%20Rums%20Cafe!5e0!3m2!1sen!2sin!4v1774788191620!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="The Rums Cafe Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
