import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const BookingConfirmed = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEvent = location.state?.type === "event";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md space-y-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center"
        >
          <CheckCircle className="w-20 h-20 text-sage" />
        </motion.div>

        <h1 className="font-display text-3xl text-foreground font-semibold">
          {isEvent ? "Thanks for Your Enquiry!" : "Booking Confirmed!"}
        </h1>

        <p className="font-body text-muted-foreground leading-relaxed">
          {isEvent
            ? "We've received your event enquiry. Our team will review the details and get back to you shortly."
            : "Your table reservation has been received. We'll confirm your booking shortly via call or WhatsApp."}
        </p>
        <Button
          onClick={() => navigate("/")}
          className="bg-sage-dark hover:bg-sage-dark text-primary-foreground px-8 py-3 font-body tracking-wider uppercase"
        >
          <Home size={18} />
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
};

export default BookingConfirmed;
