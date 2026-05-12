export const siteConfig = {
  brandName: "Maa Mangala Diagnostic Center",
  siteUrl: "https://maamangaladiagnostic.com", // Update with actual domain
  phone: "7064821268",
  phoneSecondary: "8280600348",
  whatsappNumber: "7064821268", // Updated with proper format (without +)
  email: "maamangaladiagnostic6@gmail.com",
  address: "Matiapada Chhaka, Konark Road, Puri, Odisha - 752002",
  fullAddress: "Maa Mangala Diagnostic Center, Matiapada Chhaka, Konark Road, Puri, Odisha - 752002",
  city: "Puri",
  state: "Odisha",
  country: "India",
  pinCode: "752002",
  timings: {
    opd: "Every Wednesday: 10:00 AM - 1:00 PM",
    diagnostic: "Monday - Saturday: 8:00 AM - 6:00 PM",
    sunday: "Closed",
  },
  consultationDay: "Wednesday",
  consultationTime: "10:00 AM - 1:00 PM",
  calendlyUrl: "",
  mapEmbedUrl: "https://maps.google.com/maps?q=Matiapada+Chhaka+Konark+Road+Puri+Odisha&t=&z=16&ie=UTF8&iwloc=&output=embed",
  Logo: "/logos/Logonew.png",
  youtubeChannel: "",
  instagramUrl: "",
  facebookUrl: "",

  // Services offered
  services: [
    "Blood Tests",
    "Urine Tests",
    "Stool Tests",
    "Sputum Tests",
    "ECG",
    "Thyroid Profile",
    "Liver Function Test",
    "Kidney Function Test",
    "Lipid Profile",
    "HbA1c",
  ],

  // Health Packages
  healthPackages: [
    {
      name: "Basic Health Check-up",
      price: 1099,
      originalPrice: 2000,
      discount: "45% OFF",
      discountPercentage: 45,
      tests: ["TSH", "CBC", "FBS", "Kidney Profile", "Liver Profile", "Lipid Profile"],
      slug: "basic-health-checkup",
      popular: true,
    },
    {
      name: "Vasant Wellness Package",
      price: 1299,
      originalPrice: 2299,
      discount: "43% OFF",
      discountPercentage: 43,
      tests: ["Thyroid Profile", "Iron Studies", "Kidney Profile", "HbA1c", "CBC", "Liver Profile", "Lipid Profile"],
      slug: "vasant-wellness-package",
      popular: false,
    },
  ],

  // Home Collection
  homeCollection: {
    available: true,
    contactNumber: "7064821268",
    whatsappNumber: "917064821268",
    areaCovered: "Puri and nearby areas",
    charges: "Free",
    timing: "8:00 AM - 4:00 PM",
  },

  // Both Doctors
  doctors: [
    {
      id: "dr-sisir-kumar-das",
      name: "Dr. Sisir Kumar Das",
      title: "MD & Diabetic Consultant",
      tagline: "Retired Senior Consultant",
      specialization: "Diabetes & General Medicine",
      degree: "MD",
      image: "/images/doctors/dr-sisir-kumar-das.jpg",
      consultationImage: "/images/doctors/dr-sisir-consultation.jpg",
      location: "Maa Mangala Diagnostic Center, Matiapada, Puri",
      bio: "Dr. Sisir Kumar Das is a highly experienced physician with expertise in diabetes management and general medical consultation. As a retired senior consultant, he brings decades of clinical experience to provide compassionate and comprehensive care for patients with diabetes, hypertension, and other chronic conditions.",
      highlights: [
        "MD in Medicine",
        "Diabetic Consultant",
        "Retired Senior Consultant",
        "Chronic Disease Management",
        "General Medicine Expert",
      ],
      availability: "Every Wednesday, 10:00 AM - 1:00 PM",
      consultationFee: "Free",
    },
    {
      id: "dr-sadasiba-padhy",
      name: "Dr. Sadasiba Padhy",
      title: "Pediatrician",
      tagline: "MBBS, MD Pediatrics",
      specialization: "Child Healthcare",
      degree: "MBBS, MD",
      image: "/images/doctors/dr-sadasiba-padhy.jpg",
      consultationImage: "/images/doctors/dr-sadasiba-consultation.jpg",
      location: "Maa Mangala Diagnostic Center, Matiapada, Puri",
      bio: "Dr. Sadasiba Padhy is a skilled and compassionate pediatrician dedicated to providing expert medical care for children from infancy through adolescence. With an MBBS and MD in Pediatrics, he specializes in newborn care, childhood vaccinations, growth monitoring, and management of pediatric illnesses. His patient-centered approach ensures that every child receives gentle, professional, and personalized healthcare in a comforting environment.",
      highlights: [
        "MBBS, MD Pediatrics",
        "Newborn & Infant Care Specialist",
        "Childhood Vaccination Expert",
        "Growth & Development Monitoring",
        "Management of Pediatric Illnesses",
      ],
      availability: "Every Wednesday, 10:00 AM - 1:00 PM",
      consultationFee: "Free",
    },
  ],

  // Social Media Links
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
    twitter: "",
  },

  // SEO
  seo: {
    title: "Maa Mangala Diagnostic Center - Blood Tests, ECG & Health Packages in Puri",
    description: "Affordable diagnostic services in Puri. Book blood tests, ECG, health checkup packages with home collection. Expert doctors available.",
    keywords: [
      "diagnostic center puri",
      "blood test puri",
      "health checkup puri",
      "pathology lab puri",
      "ECG test puri",
      "home collection puri",
    ],
  },
};

// Helper function to get doctor by ID
export const getDoctorById = (id: string) => {
  return siteConfig.doctors.find(doctor => doctor.id === id);
};

// Helper function to get primary doctor (first one)
export const getPrimaryDoctor = () => {
  return siteConfig.doctors[0];
};

// Helper function to get health package by slug
export const getHealthPackageBySlug = (slug: string) => {
  return siteConfig.healthPackages.find(pkg => pkg.slug === slug);
};