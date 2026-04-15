import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MessageCircleMore,
} from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <img
              src={logoWhite}
              alt="The Rums Cafe"
              className="h-16 w-auto mb-4"
            />
            <p className="font-body text-sm text-background/60 leading-relaxed">
              Where conversations brew and flavours flow. A café experience
              redefined.
            </p>
          </div>

          <div className="text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-background/40 mb-4">
              Follow Us
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/therumsindia?igsh=bnczaTl6dnhuMXJz"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/p/The-Rums-Cafe-61561977514741/"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.youtube.com/@therumsindia"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://wa.me/919431560808"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="Youtube"
              >
                <MessageCircleMore size={20} />
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-background/40 mb-4">
              Open Daily
            </p>
            <p className="font-body text-sm text-background/60">
              11:00 AM – 11:00 PM
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-background/40">
            © 2024 The Rums Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
