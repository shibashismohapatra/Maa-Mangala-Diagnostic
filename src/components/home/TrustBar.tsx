import { Shield, Zap, Monitor, Heart, MapPin } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Advanced Implant Care" },
  { icon: Zap, label: "Laser Dentistry" },
  { icon: Monitor, label: "Modern Equipment" },
  { icon: Heart, label: "Comfortable Experience" },
  { icon: MapPin, label: "Sambalpur, Odisha" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-zinc-100 bg-gradient-to-r from-cyan-50/50 via-white to-cyan-50/50 py-6">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 rounded-full border border-cyan-100/80 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm"
            >
              <item.icon className="h-4 w-4 text-cyan-600" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
