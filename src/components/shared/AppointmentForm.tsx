"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteConfig } from "@/data/site";
import { CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(15, "Phone number too long")
    .regex(/^[0-9+\-\s]+$/, "Invalid phone number"),
  age: z
    .string()
    .min(1, "Enter age")
    .regex(/^\d+$/, "Enter a valid age"),
  testType: z.string().min(1, "Select a test or package"),
  serviceType: z.string().min(1, "Select service type"),
  preferredDate: z.string().min(1, "Select preferred date"),
  preferredTime: z.string().min(1, "Enter preferred time"),
  address: z.string().optional(),
  message: z.string().max(500, "Message too long").optional(),
});

type FormValues = z.infer<typeof schema>;

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      serviceType: "clinic",
    },
  });

  const serviceType = watch("serviceType");

  const testOptions = useMemo(
    () => [
      { value: "basic-health-package", label: "Basic Health Check-up (₹1,099)" },
      { value: "vasant-wellness-package", label: "Vasant Wellness Package (₹1,299)" },
      { value: "blood-test", label: "Blood Test" },
      { value: "urine-test", label: "Urine Test" },
      { value: "stool-test", label: "Stool Test" },
      { value: "sputum-test", label: "Sputum Test" },
      { value: "ecg", label: "ECG (Electrocardiogram)" },
      { value: "thyroid-profile", label: "Thyroid Profile" },
      { value: "liver-function", label: "Liver Function Test" },
      { value: "kidney-function", label: "Kidney Function Test" },
      { value: "lipid-profile", label: "Lipid Profile" },
      { value: "hba1c", label: "HbA1c" },
      { value: "consultation", label: "Doctor Consultation" },
    ],
    []
  );

  const onSubmit = (data: FormValues) => {
    const testLabel = testOptions.find(t => t.value === data.testType)?.label || data.testType;
    
    let text = `🏥 Maa Mangala Diagnostic Center - Appointment Request

📋 Patient Details:
Name: ${data.name}
Age: ${data.age}
Phone: ${data.phone}

🔬 Test/Package: ${testLabel}
🏠 Service Type: ${data.serviceType === "home" ? "Home Collection" : "Visit Clinic"}
📅 Preferred Date: ${data.preferredDate}
⏰ Preferred Time: ${data.preferredTime}
`;

    if (data.serviceType === "home" && data.address) {
      text += `📍 Home Address: ${data.address}\n`;
    }

    if (data.message) {
      text += `\n📝 Additional Notes: ${data.message}\n`;
    }

    text += `\nPlease confirm my appointment.`;

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    setSubmitted(true);
    window.open(url, "_blank");
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-green-200 bg-green-50 p-10 text-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
        <h3 className="mt-4 text-xl font-bold text-zinc-900">
          Redirecting to WhatsApp!
        </h3>
        <p className="mt-2 text-sm text-zinc-600">
          If WhatsApp didn&apos;t open,{" "}
          <button
            onClick={() => setSubmitted(false)}
            className="font-semibold text-cyan-600 underline"
          >
            try again
          </button>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5 rounded-3xl border border-zinc-200 bg-white p-6 shadow-xl sm:p-8"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-700">
          Full Name *
        </label>
        <input
          id="name"
          {...register("name")}
          placeholder="Your full name"
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-zinc-700">
          Phone Number *
        </label>
        <input
          id="phone"
          {...register("phone")}
          placeholder="Your phone number"
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Age */}
      <div>
        <label htmlFor="age" className="mb-1.5 block text-sm font-medium text-zinc-700">
          Age *
        </label>
        <input
          id="age"
          {...register("age")}
          placeholder="Your age"
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
        />
        {errors.age && (
          <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
        )}
      </div>

      {/* Test / Package Selection */}
      <div>
        <label htmlFor="testType" className="mb-1.5 block text-sm font-medium text-zinc-700">
          Select Test or Package *
        </label>
        <select
          id="testType"
          {...register("testType")}
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
        >
          <option value="">Select Test or Package</option>
          {testOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        {errors.testType && (
          <p className="mt-1 text-sm text-red-600">{errors.testType.message}</p>
        )}
      </div>

      {/* Service Type - Clinic or Home Collection */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-zinc-700">
          Service Type *
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className={`flex cursor-pointer items-center justify-center gap-2 rounded-2xl border p-3 transition ${serviceType === "clinic" ? "border-cyan-500 bg-cyan-50 text-cyan-700" : "border-zinc-200 bg-zinc-50 text-zinc-600"}`}>
            <input
              type="radio"
              value="clinic"
              {...register("serviceType")}
              className="hidden"
            />
            <span>🏥 Visit Clinic</span>
          </label>
          <label className={`flex cursor-pointer items-center justify-center gap-2 rounded-2xl border p-3 transition ${serviceType === "home" ? "border-green-500 bg-green-50 text-green-700" : "border-zinc-200 bg-zinc-50 text-zinc-600"}`}>
            <input
              type="radio"
              value="home"
              {...register("serviceType")}
              className="hidden"
            />
            <span>🏠 Home Collection</span>
          </label>
        </div>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-red-600">{errors.serviceType.message}</p>
        )}
      </div>

      {/* Address - shows only when Home Collection is selected */}
      {serviceType === "home" && (
        <div>
          <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-zinc-700">
            Home Address *
          </label>
          <textarea
            id="address"
            {...register("address")}
            placeholder="Enter your full address for sample collection"
            rows={2}
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20"
          />
        </div>
      )}

      {/* Preferred Date */}
      <div>
        <label htmlFor="preferredDate" className="mb-1.5 block text-sm font-medium text-zinc-700">
          Preferred Date *
        </label>
        <input
          id="preferredDate"
          type="date"
          {...register("preferredDate")}
          min={new Date().toISOString().split("T")[0]}
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
        />
        {errors.preferredDate && (
          <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p>
        )}
      </div>

      {/* Preferred Time */}
      <div>
        <label htmlFor="preferredTime" className="mb-1.5 block text-sm font-medium text-zinc-700">
          Preferred Time *
        </label>
        <select
          id="preferredTime"
          {...register("preferredTime")}
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
        >
          <option value="">Select Time Slot</option>
          <option value="Morning (8 AM - 10 AM)">Morning (8 AM - 10 AM)</option>
          <option value="Late Morning (10 AM - 12 PM)">Late Morning (10 AM - 12 PM)</option>
          <option value="Afternoon (12 PM - 2 PM)">Afternoon (12 PM - 2 PM)</option>
          <option value="Late Afternoon (2 PM - 4 PM)">Late Afternoon (2 PM - 4 PM)</option>
          <option value="Evening (4 PM - 6 PM)">Evening (4 PM - 6 PM)</option>
        </select>
        {errors.preferredTime && (
          <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-700">
          Additional Notes (optional)
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Any specific concerns, symptoms, or instructions"
          rows={3}
          className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm transition focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Info Box */}
      <div className="rounded-2xl bg-cyan-50 p-3 text-center text-xs text-cyan-700">
        {serviceType === "home" ? (
          <p>🏠 Our phlebotomist will visit your home for sample collection at the scheduled time.</p>
        ) : (
          <p>📍 Our center is located at Matiapada Chhaka, Konark Road, Puri. We look forward to serving you!</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-4 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/40"
      >
        Book via WhatsApp
      </button>

      <p className="text-center text-xs text-zinc-500">
        Your details will be sent to our WhatsApp for appointment confirmation.
      </p>
    </form>
  );
}