import { treatments } from "@/data/treatments";
import TreatmentCard from "@/components/shared/TreatmentCard";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";

// Health packages data
const healthPackages = [
  {
    slug: "basic-health-checkup",
    title: "Basic Health Check-up",
    price: "₹1,099",
    originalPrice: "₹2,000",
    discount: "45% OFF",
    shortDescription: "Complete basic health screening including TSH, CBC, FBS, Kidney Profile, Liver Profile, and Lipid Profile.",
    image: "/images/packages/basic-health-checkup.jpg",
    tests: ["TSH", "CBC", "FBS", "Kidney Profile", "Liver Profile", "Lipid Profile"],
  },
  {
    slug: "vasant-wellness-package",
    title: "Vasant Wellness Package",
    price: "₹1,299",
    originalPrice: "₹2,299",
    discount: "43% OFF",
    shortDescription: "Comprehensive wellness package including Thyroid Profile, Iron Studies, Kidney Profile, HbA1c, CBC, Liver, and Lipid tests.",
    image: "/images/packages/vasant-wellness.jpg",
    tests: ["Thyroid Profile", "Iron Studies", "Kidney Profile", "HbA1c", "CBC", "Liver Profile", "Lipid Profile"],
  },
];

// Doctor info component


export default function TreatmentsOverview() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Health Packages"
          title="Affordable Health Checkups"
          description="Comprehensive health screening packages at discounted rates. Book your appointment today for accurate diagnosis and expert consultation."
          centered
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {healthPackages.map((pkg) => (
            <div
              key={pkg.slug}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md transition hover:shadow-xl"
            >
              {/* Discount Badge */}
              <div className="absolute right-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                {pkg.discount}
              </div>

              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500">
                <div className="flex h-full items-center justify-center text-6xl text-white/30">
                  🏥
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900">{pkg.title}</h3>
                
                {/* Pricing */}
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-cyan-600">{pkg.price}</span>
                  <span className="text-sm text-zinc-400 line-through">{pkg.originalPrice}</span>
                  <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                    Save {parseInt(pkg.discount)}%
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {pkg.shortDescription}
                </p>

                {/* Tests Included */}
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-600">
                    Tests Included:
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {pkg.tests.map((test) => (
                      <span
                        key={test}
                        className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-700"
                      >
                        {test}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/packages/${pkg.slug}`}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg"
                >
                  Book This Package →
                </Link>
              </div>
            </div>
          ))}
        </div>

  

        {/* Home Collection Notice */}
        <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-center text-sm text-teal-700">
          <span>🚗</span>
          <span className="font-medium">Free Home Collection Available</span>
          <span>—</span>
          <span>Convenient & Hygienic Sample Collection from Your Home</span>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/packages"
            className="inline-flex rounded-full border border-cyan-200 bg-white px-6 py-3 text-sm font-semibold text-cyan-700 shadow-sm transition hover:bg-cyan-50"
          >
            View All Health Packages &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}