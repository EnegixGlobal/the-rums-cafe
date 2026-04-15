// import { Phone, Instagram, CalendarCheck, UtensilsCrossed } from "lucide-react";
// import { Link } from "react-router-dom";
// const WHATSAPP_LINK = "https://wa.me/919431560808";
// const INSTAGRAM_LINK = "https://www.instagram.com/therumsindia/";
// const MENU_LINK =
//   "https://drive.google.com/file/d/1LROw490XjO4YfrM8ThQrmbt2Swfn-e6s/view?usp=sharing";
// const RESERVATION_LINK =
//   "https://www.google.com/maps/reserve/v/dine/c/oXk-7HQER94?source=pa&opi=79508299&hl=en-IN&gei=Nx7Jaba2BtuhseMPm_iLoAQ&sourceurl=https://www.google.com/maps/preview/place?authuser%3D0%26hl%3Den%26gl%3Din%26q%3Drums%2Bcafe%26pb%3D!1m15!1s0x39f4e11e49a80103:0xd788d10b0e649c7d!2srums%2Bcafe!3m12!1m3!1d14028.17464227181!2d77.50460955000001!3d28.47822865!2m3!1f0.0!2f0.0!3f0.0!3m2!1i1024!2i768!4f13.1!12m4!2m3!1i360!2i120!4i8!13m57!2m2!1i203!2i100!3m2!2i4!5b1!6m6!1m2!1i86!2i86!1m2!1i408!2i240!7m33!1m3!1e1!2b0!3e3!1m3!1e2!2b1!3e2!1m3!1e2!2b0!3e3!1m3!1e8!2b0!3e3!1m3!1e10!2b0!3e3!1m3!1e10!2b1!3e2!1m3!1e10!2b0!3e4!1m3!1e9!2b1!3e2!2b1!9b0!15m8!1m7!1m2!1m1!1e2!2m2!1i195!2i195!3i20!14m3!1sNh7JaffPGqCYnesPmNWDkQ4!7e81!15i10112!15m108!1m26!13m9!2b1!3b1!4b1!6i1!8b1!9b1!14b1!20b1!25b1!18m15!3b1!4b1!5b1!6b1!13b1!14b1!17b1!21b1!22b1!30b1!32b1!33m1!1b1!34b1!36e2!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!27b1!29b1!30m1!2b1!36b1!37b1!39m3!2m2!2i1!3i1!43b1!52b1!54m1!1b1!55b1!56m1!1b1!61m2!1m1!1e1!65m5!3m4!1m3!1m2!1i224!2i298!72m22!1m8!2b1!5b1!7b1!12m4!1b1!2b1!4m1!1e1!4b1!8m10!1m6!4m1!1e1!4m1!1e3!4m1!1e4!3sother_user_google_review_posts__and__hotel_and_vr_partner_review_posts!6m1!1e1!9b1!89b1!90m2!1m1!1e2!98m3!1b1!2b1!3b1!103b1!113b1!114m3!1b1!2m1!1b1!117b1!122m1!1b1!126b1!127b1!128m1!1b0!21m0!22m1!1e81!30m8!3b1!6m2!1b1!2b1!7m2!1e3!2b1!9b1!34m5!7b1!10b1!14b1!15m1!1b0!37i772";

// const items = [
//   { icon: Phone, label: "WhatsApp", href: WHATSAPP_LINK },
//   { icon: Instagram, label: "Instagram", href: INSTAGRAM_LINK },
//   { icon: CalendarCheck, label: "Reserve", href: RESERVATION_LINK },
//   { icon: UtensilsCrossed, label: "Menu", href: MENU_LINK },
// ];

// const MobileBottomNav = () => {
//   return (
//     <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border">
//       <div className="flex items-center justify-around h-16">
//         {items.map((item) => (
//           <a
//             key={item.label}
//             href={item.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
//           >
//             <item.icon size={20} />
//             <span className="font-body text-[10px] tracking-wider uppercase">
//               {item.label}
//             </span>
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default MobileBottomNav;
import { Phone, Instagram, CalendarCheck, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/919431560808";
const INSTAGRAM_LINK = "https://www.instagram.com/therumsindia/";
const MENU_LINK =
  "https://drive.google.com/file/d/1LROw490XjO4YfrM8ThQrmbt2Swfn-e6s/view?usp=sharing";

const externalItems = [
  { icon: Phone, label: "WhatsApp", href: WHATSAPP_LINK },
  { icon: Instagram, label: "Instagram", href: INSTAGRAM_LINK },
];

const MobileBottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border">
      <div className="flex items-center justify-around h-16">
        {externalItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <item.icon size={20} />
            <span className="font-body text-[10px] tracking-wider uppercase">
              {item.label}
            </span>
          </a>
        ))}
        <Link
          to="/reserve"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <CalendarCheck size={20} />
          <span className="font-body text-[10px] tracking-wider uppercase">
            Reserve
          </span>
        </Link>
        <a
          href={MENU_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <UtensilsCrossed size={20} />
          <span className="font-body text-[10px] tracking-wider uppercase">
            Menu
          </span>
        </a>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
