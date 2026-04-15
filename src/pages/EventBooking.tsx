import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, PartyPopper } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import arthLogo from "@/assets/blk.png";
import load from "@/assets/loader.gif";
const eventTypes = [
  "Birthday Party",
  "Corporate Event",
  "Kitty Party",
  "Private Party",
  "Festive Event",
  "Social Gathering",
  "Other",
];
const sessions = ["Lunch", "Dinner", "Full Day"];
const timeSlots = [
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
];
const guestOptions = Array.from({ length: 91 }, (_, i) => i + 10);

const EventBooking = () => {
  const navigate = useNavigate();
  const [eventType, setEventType] = useState("");
  const [session, setSession] = useState("Lunch");
  const [slot, setSlot] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [sameAsPhone, setSameAsPhone] = useState(false);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSameAsPhone = (checked: boolean) => {
    setSameAsPhone(checked);
    if (checked) setWhatsapp(phone);
  };
  const finalSubmit = async () => {
    const data = {
      Name: name,
      Mobile_number_call: phone,
      Mobile_number_wp: whatsapp,
      Event_type: eventType,
      PAX: guests,
      Event_Date: date,
      Session: session,
      Slot: slot,
      Note: note,
      time: new Date().toLocaleString(),
    };

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyA1dw96wqBfvpyFAUmP-z1RRq-FSDh9CQNg6NCRaG0KGIMKbvgGMupu6keWaSielOF/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(data),
        },
      );

      const result = await res.status;
      if (result === 0) {
        // alert("Event inquiry submitted! Our team will reach out shortly.");
        window.location.href = "/booking-confirmed";
      } else {
        alert("Something went wrong....");
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
      alert("❌ Error sending data");
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (
      !eventType ||
      !guests ||
      !date ||
      !session ||
      !slot ||
      !name.trim() ||
      !phone.trim()
    ) {
      toast.error("Please fill all required fields");
      return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(date) < today) {
      toast.error("Event date cannot be in the past");
      return;
    }
    finalSubmit();
    // toast.success("Event inquiry submitted! Our team will reach out shortly.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-sage-dark py-5 px-6">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <img
            src={arthLogo}
            alt="Arth Advent"
            className="h-12 w-auto rounded-md bg-background/10 p-1"
          />
          <div>
            <h1 className="font-display text-xl text-primary-foreground font-semibold">
              Book Your Event
            </h1>
            <p className="font-body text-sm text-primary-foreground/80">
              Please provide your event details
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto px-6 py-10 space-y-8"
      >
        <p style={{ color: "#4e4e4e", textAlign: "center" }}>
          Reservation as per availability.
        </p>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sage-dark hover:text-sage-dark font-body text-sm transition-colors mb-4"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        {/* Event details */}
        <div>
          <h2 className="font-display text-lg text-foreground font-medium mb-5">
            Select event details
          </h2>

          <div className="space-y-5">
            <div>
              <label className="font-body text-sm text-sage-dark mb-1.5 block">
                Event Type*
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select event type</option>
                {eventTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-body text-sm text-sage-dark mb-1.5 block">
                  Number of Guests / PAX*
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select number of guests</option>
                  {guestOptions.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-body text-sm text-sage-dark mb-1.5 block">
                  Event Date*
                </label>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Session */}
        <div>
          <label className="font-body text-sm text-sage-dark mb-3 block">
            Session
          </label>
          <div className="flex gap-3">
            {sessions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSession(s);
                  setSlot("");
                }}
                className={`px-5 py-2 rounded-sm font-body text-sm border transition-colors ${
                  session === s
                    ? "bg-sage-dark text-primary-foreground border-sage"
                    : "border-border text-muted-foreground hover:border-sage"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Slot */}
        <div>
          <label className="font-body text-sm text-sage-dark mb-3 block">
            Preferred Time Slot
          </label>
          <div className="flex flex-wrap gap-2">
            {(session === "Full Day"
              ? timeSlots
              : timeSlots.filter((t) => {
                  const hour = parseInt(t.split(":")[0]);
                  const isPM = t.includes("PM");
                  const h24 = isPM && hour !== 12 ? hour + 12 : hour;
                  return session === "Lunch" ? h24 < 17 : h24 >= 17;
                })
            ).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSlot(t)}
                className={`px-4 py-2 rounded-sm font-body text-xs border transition-colors ${
                  slot === t
                    ? "bg-sage-dark text-primary-foreground border-sage"
                    : "border-border text-muted-foreground hover:border-sage"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Guest details */}
        <div>
          <h2 className="font-display text-lg text-foreground font-medium mb-5">
            Enter Guest Details
          </h2>

          <div className="space-y-5">
            <div>
              <label className="font-body text-sm text-sage-dark mb-1.5 block">
                Customer Name*
              </label>
              <Input
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="font-body text-sm text-sage-dark mb-1.5 block">
                Mobile Number (For call)*
              </label>
              <Input
                type="tel"
                placeholder="Enter mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="font-body text-sm text-sage-dark mb-1.5 block">
                Mobile Number (WhatsApp)*
              </label>
              <div className="flex items-center gap-3">
                <Input
                  type="tel"
                  placeholder="Enter WhatsApp number"
                  value={sameAsPhone ? phone : whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  disabled={sameAsPhone}
                  className="flex-1"
                />
                <label className="flex items-center gap-2 font-body text-sm text-muted-foreground cursor-pointer whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={sameAsPhone}
                    onChange={(e) => handleSameAsPhone(e.target.checked)}
                    className="accent-sage"
                  />
                  Same as Mobile Number
                </label>
              </div>
            </div>

            <div>
              <label className="font-body text-sm text-sage-dark mb-1.5 block">
                Additional Requests
              </label>
              <Textarea
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          {loading === false ? (
            <>
              <Button
                type="submit"
                className={`bg-sage-dark hover:bg-sage-dark text-primary-foreground px-10 py-3 font-body tracking-wider uppercase`}
              >
                <PartyPopper size={18} />
                Submit
              </Button>
            </>
          ) : (
            <Button
              type="submit"
              disabled
              className={`bg-sage-dark hover:bg-sage-dark text-primary-foreground px-10 py-3 font-body tracking-wider uppercase`}
            >
              <img src={load} alt="Loading..." height="30px" width="30px" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EventBooking;
