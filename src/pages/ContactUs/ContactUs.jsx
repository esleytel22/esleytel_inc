import { useState, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import emailjs from "emailjs-com";
import { ArrowRight, Check, Loader2, Mail, Phone, AlertCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { checkQuota } from "../../../utils/quotaProvider";
import { footer } from "../../../utils/content";
import QuotaTimer from "./Components/QuotaTimer";

const EMAIL = "helpdesk@esleytel.space";
const PHONE_DISPLAY = "+1 929 256 4250";
const PHONE_HREF = "tel:+19292564250";
const WHATSAPP_HREF = "https://wa.me/19292564250";

const SERVICES = [
  "Web & App Development",
  "Document Management",
  "IT Support",
  "Something else",
];

const EMPTY = { name: "", email: "", phone: "", message: "" };

const validate = (v) => {
  const errors = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    errors.email = "Enter a valid email address.";
  const phone = v.phone.trim();
  const digits = phone.replace(/\D/g, "");
  if (phone && (!/^[+(\d][\d\s().-]*$/.test(phone) || digits.length < 7 || digits.length > 15))
    errors.phone = "Enter a valid phone number, or leave it blank.";
  if (v.message.trim().length < 10)
    errors.message = "Tell us a little about your project (at least 10 characters).";
  return errors;
};

const fieldClass = (hasError) =>
  `w-full rounded-xl border bg-white/[0.04] px-4 py-3.5 text-base text-white placeholder:text-white/35 [color-scheme:dark] outline-none transition focus:bg-white/[0.07] focus:ring-4 ${
    hasError
      ? "border-red-400/70 focus:border-red-400 focus:ring-red-400/15"
      : "border-white/15 focus:border-light-cream focus:ring-light-cream/15"
  }`;

function Field({ id, label, required, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-sm font-medium text-white/80">
        <span>
          {label}
          {required && <span className="ml-1 text-light-cream" aria-hidden="true">*</span>}
        </span>
        {hint && <span className="text-xs font-normal text-white/40">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactLink({ href, icon: Icon, label, value, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-light-cream/60 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-cream"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light-cream/15 text-light-cream transition group-hover:bg-light-cream group-hover:text-black">
        <Icon size={20} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-widest text-white/45">{label}</span>
        <span className="block break-words text-lg font-medium text-white">{value}</span>
      </span>
      <ArrowRight
        size={18}
        className="ml-auto shrink-0 text-white/30 transition group-hover:translate-x-1 group-hover:text-light-cream"
      />
    </a>
  );
}

const ContactUs = () => {
  const reduceMotion = useReducedMotion();
  const formRef = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [service, setService] = useState("");
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const [quota] = useState(() => {
    try {
      return checkQuota("appointments", 3, 3);
    } catch {
      return null;
    }
  });

  const errors = validate(values);
  const limitReached = quota && quota.remainingCount <= 0 && status !== "success";

  const handleChange = (e) =>
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleBlur = (e) =>
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  const show = (name) => (touched[name] ? errors[name] : undefined);
  const a11y = (name) => ({
    "aria-invalid": show(name) ? "true" : "false",
    "aria-describedby": show(name) ? `contact-${name}-error` : undefined,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    const firstInvalid = Object.keys(errors)[0];
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }
    // Bots fill the hidden "company" field; people never see it.
    if (formRef.current?.elements.company?.value) {
      setStatus("success");
      return;
    }

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceID || !templateID || !publicKey) {
      console.error("EmailJS configuration is missing. Please check your .env file.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: "Esleytel LLC. – Website Inquiry",
          from_email: "cristian@esleytel.space",
          to_email: "helpdesk@esleytel.space, cristian@esleytel.space",
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim() || "Not provided",
          message: values.message.trim(),
          service: service || "Not specified",
          date: "N/A (inquiry form)",
          timing: "N/A (inquiry form)",
          source: "Website contact form",
        },
        publicKey
      );
      quota?.useQuota();
      setStatus("success");
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  const reset = () => {
    setValues(EMPTY);
    setService("");
    setTouched({});
    setStatus("idle");
  };

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.6, delay, ease: "easeOut" },
        };

  return (
    <div className="relative isolate overflow-hidden bg-black text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-light-cream/25 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-24 -z-10 h-[30rem] w-[30rem] rounded-full bg-dark-cream/40 blur-[140px]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Left: pitch + direct contact */}
        <motion.div {...reveal()} className="flex flex-col justify-center">
          <p className="mb-6 flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-light-cream">
            <span className="h-px w-10 bg-light-cream" />
            Contact
          </p>
          <h2 id="contact-heading" className="font-hahmlet text-5xl font-semibold leading-[1.05] md:text-6xl xl:text-7xl">
            Let&rsquo;s build{" "}
            <span className="bg-gradient-to-r from-extra-light-cream via-light-cream to-[#ffe29a] bg-clip-text text-transparent">
              something worth talking about.
            </span>
          </h2>
          <p className="mt-6 max-w-[34rem] text-lg text-white/65">
            Tell us what you&rsquo;re working on and we&rsquo;ll follow up by email. Prefer to talk? Reach us directly.
          </p>

          <div className="mt-10 grid gap-3">
            <ContactLink href={`mailto:${EMAIL}`} icon={Mail} label="Email" value={EMAIL} />
            <ContactLink href={PHONE_HREF} icon={Phone} label="Call" value={PHONE_DISPLAY} />
            <ContactLink href={WHATSAPP_HREF} icon={FaWhatsapp} label="WhatsApp Business" value="Message us" external />
          </div>

          <ul className="mt-8 flex gap-3" aria-label="Social media">
            {footer.social.map(({ name, icon: Icon, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-light-cream hover:bg-light-cream hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-cream"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: form card */}
        <motion.div
          {...reveal(0.15)}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/50 backdrop-blur-md md:p-10"
        >
          {limitReached ? (
            <QuotaTimer quota={quota} />
          ) : status === "success" ? (
            <div className="flex flex-col items-center py-10 text-center" role="status">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-light-cream to-[#e0b352] text-black">
                <Check size={38} strokeWidth={3} />
              </span>
              <h3 className="mt-6 font-hahmlet text-3xl font-semibold">Message sent</h3>
              <p className="mt-3 max-w-[24rem] text-white/65">
                Thanks{values.name ? `, ${values.name.trim().split(" ")[0]}` : ""}. We&rsquo;ll reply to{" "}
                <span className="text-light-cream">{values.email || "your email"}</span> soon.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-8 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-light-cream hover:text-light-cream"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} noValidate aria-labelledby="contact-heading" className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Field id="contact-name" label="Full name" required error={show("name")}>
                  <input
                    id="contact-name" name="name" type="text" autoComplete="name"
                    value={values.name} onChange={handleChange} onBlur={handleBlur}
                    placeholder="Jane Doe" className={fieldClass(show("name"))} {...a11y("name")}
                  />
                </Field>
                <Field id="contact-email" label="Email" required error={show("email")}>
                  <input
                    id="contact-email" name="email" type="email" autoComplete="email"
                    value={values.email} onChange={handleChange} onBlur={handleBlur}
                    placeholder="you@company.com" className={fieldClass(show("email"))} {...a11y("email")}
                  />
                </Field>
              </div>

              <Field id="contact-phone" label="Phone" hint="Optional" error={show("phone")}>
                <input
                  id="contact-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel"
                  value={values.phone} onChange={handleChange} onBlur={handleBlur}
                  placeholder="+1 555 000 0000" className={fieldClass(show("phone"))} {...a11y("phone")}
                />
              </Field>

              <div>
                <p id="contact-service-label" className="mb-2 flex justify-between text-sm font-medium text-white/80">
                  I&rsquo;m interested in <span className="text-xs font-normal text-white/40">Optional</span>
                </p>
                <div role="radiogroup" aria-labelledby="contact-service-label" className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      role="radio"
                      aria-checked={service === s}
                      onClick={() => setService(service === s ? "" : s)}
                      className={`rounded-full border px-4 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-cream ${
                        service === s
                          ? "border-light-cream bg-light-cream text-black"
                          : "border-white/15 text-white/70 hover:border-light-cream/60 hover:text-white"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <Field id="contact-message" label="Tell us about your project" required error={show("message")}>
                <textarea
                  id="contact-message" name="message" rows={5}
                  value={values.message} onChange={handleChange} onBlur={handleBlur}
                  placeholder="What are you building, and what would a great result look like?"
                  className={`${fieldClass(show("message"))} resize-none`} {...a11y("message")}
                />
              </Field>

              {/* Honeypot: hidden from people, tempting to bots */}
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <label>
                  Company
                  <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              {status === "error" && (
                <div role="alert" className="flex items-start gap-3 rounded-xl border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-100">
                  <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  <p>
                    We couldn&rsquo;t send your message. Please try again, or email us at{" "}
                    <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-light-cream to-[#e0b352] px-8 py-4 text-base font-semibold text-black transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-cream disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Sending&hellip;
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowRight size={20} className="transition group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-white/40">
                By sending this you agree to our{" "}
                <a href="/privacy-policy" className="underline hover:text-light-cream">Privacy Policy</a>.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
