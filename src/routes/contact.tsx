import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { type FormEvent, useState } from "react";

import { Footer } from "@/components/kravient/Footer";
import { Header } from "@/components/kravient/Header";
import { PageHero } from "@/components/kravient/PageHero";
import { ScrollReveal, SectionEyebrow } from "@/components/kravient/primitives";
import { contactPlaceholders } from "@/data/content";

const interests = ["Kravient HMS", "Custom Software", "Partnership", "Other"];
const sources = ["Google Search", "Referral", "Social Media", "Event", "Other"];
const contactBlocks = [
  {
    label: "Email",
    value: contactPlaceholders.email,
    href: `mailto:${contactPlaceholders.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: contactPlaceholders.phone,
    href: `tel:${contactPlaceholders.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  { label: "Office", value: contactPlaceholders.address, icon: MapPin },
];
const inputClass =
  "min-h-[54px] w-full rounded-[6px] border border-line bg-fog/70 px-4 py-3 text-[15px] font-medium text-ink shadow-inner shadow-navy-deep/[0.03] placeholder:text-muted2/55 transition-[border-color,background-color,box-shadow] duration-200 focus:border-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-accent/10";
const labelClass = "mb-2 block text-sm font-bold text-navy-deep";
const web3FormsAccessKey = "7af0c831-3604-4503-b282-df0bf4be45ac";

export function ContactPage() {
  const [interest, setInterest] = useState("Kravient HMS");
  const [phone, setPhone] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const phoneValue = phone.replace(/\D/g, "");

    if (phoneValue.length !== 10) {
      form.phone.setCustomValidity("Please enter a valid 10 digit phone number.");
      form.phone.reportValidity();
      return;
    }

    form.phone.setCustomValidity("");
    formData.set("phone", phoneValue);

    setSubmitState("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to submit enquiry");
      }

      form.reset();
      setInterest("Kravient HMS");
      setPhone("");
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <PageHero
          eyebrow="Contact"
          titleLines={["Let's build something", "that works."]}
          lede="Have a question about Kravient, want a custom solution built, or just want to talk to someone?"
          compact
        />

        <section className="bg-cream py-20 sm:py-28">
          <div className="container-site grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <SectionEyebrow>Reach us</SectionEyebrow>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-navy-deep sm:text-4xl">
                  We would love to hear from you.
                </h2>
                <ul className="mt-10 space-y-6">
                  {contactBlocks.map((block) => {
                    const Icon = block.icon;
                    return (
                      <li key={block.label} className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-white">
                          <Icon className="h-4.5 w-4.5" size={18} aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-muted2">
                            {block.label}
                          </span>
                          {block.href ? (
                            <a
                              href={block.href}
                              className="mt-1 block text-base font-semibold text-navy-deep transition-colors hover:text-accent"
                            >
                              {block.value}
                            </a>
                          ) : (
                            <span className="mt-1 block text-base font-semibold leading-relaxed text-navy-deep">
                              {block.value}
                            </span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-10 max-w-sm border-l-2 border-accent pl-5 text-sm leading-relaxed text-muted2">
                  Reach out directly by email or phone, or use the form and our team will respond
                  with the next steps.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal delay={100}>
                <form
                  onSubmit={handleSubmit}
                  className="rounded-[8px] border border-line bg-white p-6 shadow-[0_26px_70px_-46px_rgba(8,27,45,0.45)] sm:p-8 lg:p-10"
                >
                  <input type="hidden" name="access_key" value={web3FormsAccessKey} />
                  <input type="hidden" name="subject" value="New Kravient website enquiry" />
                  <input type="hidden" name="from_name" value="Kravient Website" />
                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />
                  <div className="mb-8 border-b border-line pb-6">
                    <p className="font-display text-2xl font-bold text-navy-deep">
                      Project enquiry
                    </p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted2">
                      Share a few details and we will get back with the right next step.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="full_name"
                        className={labelClass}
                      >
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="full_name"
                        name="name"
                        type="text"
                        className={inputClass}
                        autoComplete="name"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className={labelClass}
                      >
                        Company / Hospital Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className={inputClass}
                        autoComplete="organization"
                        placeholder="Organization name"
                      />
                    </div>
                  </div>

                  <fieldset className="mt-7">
                    <legend className={labelClass}>
                      Interested In <span className="text-accent">*</span>
                    </legend>
                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                      {interests.map((option) => (
                        <label
                          key={option}
                          className={`flex min-h-[48px] cursor-pointer items-center justify-center rounded-[6px] border px-4 text-center text-sm font-bold transition-[border-color,background-color,color,box-shadow] duration-200 ${
                            interest === option
                              ? "border-accent bg-accent/10 text-navy-deep shadow-[0_12px_30px_-22px_rgba(244,122,56,0.9)]"
                              : "border-line bg-fog/70 text-muted2 hover:border-navy/35 hover:bg-white hover:text-navy-deep"
                          }`}
                        >
                          <input
                            type="radio"
                            name="interest"
                            value={option}
                            checked={interest === option}
                            onChange={() => setInterest(option)}
                            className="sr-only"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={inputClass}
                        autoComplete="email"
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number <span className="text-accent">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={inputClass}
                        autoComplete="tel"
                        inputMode="numeric"
                        maxLength={10}
                        minLength={10}
                        pattern="[0-9]{10}"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(event) => {
                          const nextValue = event.target.value.replace(/\D/g, "").slice(0, 10);
                          setPhone(nextValue);
                          event.target.setCustomValidity("");
                        }}
                        title="Please enter a valid 10 digit phone number."
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-7">
                    <label htmlFor="message" className={labelClass}>
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className={`${inputClass} min-h-[140px] resize-y`}
                      placeholder="Tell us about your requirement, timeline, or current workflow."
                      required
                    />
                  </div>

                  <div className="mt-7">
                    <label htmlFor="source" className={labelClass}>
                      How did you hear about us?
                    </label>
                    <select id="source" name="source" className={inputClass}>
                      <option value="">Select an option</option>
                      {sources.map((source) => (
                        <option key={source} value={source}>
                          {source}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={submitState === "sending"}
                    className="group mt-8 inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-[6px] bg-accent px-8 text-sm font-bold tracking-wide text-white shadow-[0_20px_38px_-24px_rgba(244,122,56,0.95)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-[0_24px_46px_-24px_rgba(244,122,56,1)] sm:w-auto"
                  >
                    {submitState === "sending" ? "Sending..." : "Send Message"}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </button>
                  {submitState === "success" && (
                    <p className="mt-4 rounded-[6px] border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
                      Thank you. Your enquiry has been sent successfully.
                    </p>
                  )}
                  {submitState === "error" && (
                    <p className="mt-4 rounded-[6px] border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
                      Something went wrong. Please call or email us directly.
                    </p>
                  )}
                </form>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


