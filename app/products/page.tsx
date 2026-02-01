import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Nukhba Tech",
  description:
    "Our product portfolio — Asli UAE, Zat App, Zat Law, Zat POS, Zat Books, Zat GPS Camera, Zat Vehicle, Zat Beauty Cam, and more.",
};

const products = [
  {
    name: "Asli UAE",
    tagline: "Delivery in minutes, not hours",
    description:
      "A next-generation delivery platform connecting customers with local restaurants, grocery stores, and pharmacies across the UAE. Features AI-powered ordering, real-time GPS tracking, and seamless payment integration.",
    features: [
      "Food, Grocery & Medicine Delivery",
      "Real-time GPS Tracking",
      "AI-powered Chat Ordering",
      "Multiple Payment Options & COD",
      "Vendor & Delivery Partner Apps",
      "Analytics Dashboard for Vendors",
    ],
    badge: "Launching Soon in UAE",
    badgeColor: "bg-green-100 text-green-700",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    name: "Zat App",
    tagline: "Multi-service delivery platform",
    description:
      "A comprehensive on-demand delivery and services platform connecting customers with vendors and delivery partners across multiple service categories including food, grocery, pharmacy, taxi, and parcel delivery.",
    features: [
      "Food & Grocery Delivery",
      "Pharmacy / Medicine Delivery",
      "ZATaxi — Ride Hailing",
      "ZATer — Parcel Delivery",
      "ZATup — Pick & Drop Service",
      "8-Wallet Payment Distribution System",
    ],
    badge: "Multi-Service Platform",
    badgeColor: "bg-purple-100 text-purple-700",
    gradient: "from-purple-600 to-purple-800",
  },
  {
    name: "Zat Law",
    tagline: "AI-powered legal assistance",
    description:
      "An AI-powered legal assistant platform designed to democratize legal knowledge by making law accessible, understandable, and actionable for every citizen. Supports multiple languages with real-time legal updates from courts.",
    features: [
      "AI Legal Assistance (Claude + Gemini)",
      "Real-time Court Updates via RSS",
      "Lawyer Directory & Verification",
      "Multi-language (English, Tamil, Hindi, Telugu)",
      "Case Information Retrieval",
      "Push Notifications for Judgments",
    ],
    badge: "AI-Powered",
    badgeColor: "bg-amber-100 text-amber-700",
    gradient: "from-amber-600 to-amber-800",
  },
  {
    name: "Zat POS",
    tagline: "Point of Sale for retail",
    description:
      "A web-based Point of Sale system for managing retail sales, inventory, and invoicing in brick-and-mortar stores. Simple, fast, and designed for everyday use.",
    features: [
      "Sales Transaction Management",
      "Invoice Generation & Tracking",
      "Cash, Card & Digital Payments",
      "Change Calculation",
      "Receipt Printing",
      "Sales History & Reporting",
    ],
    badge: "Web-Based",
    badgeColor: "bg-teal-100 text-teal-700",
    gradient: "from-teal-600 to-teal-800",
  },
  {
    name: "Zat Books",
    tagline: "Accounting & financial management",
    description:
      "A web-based accounting software for managing business finances, accounts, invoicing, and financial records. Built for small and medium businesses to stay on top of their books.",
    features: [
      "Accounting Management",
      "Invoice & Bill Management",
      "Financial Reporting",
      "Account Ledger Management",
      "Multi-business Support",
      "Cloud-based Access",
    ],
    badge: "Finance",
    badgeColor: "bg-blue-100 text-blue-700",
    gradient: "from-slate-600 to-slate-800",
  },
  {
    name: "Zat GPS Camera",
    tagline: "Location-stamped photography",
    description:
      "A specialized camera application that overlays GPS location and metadata directly onto photos. Ideal for field workers, surveyors, and anyone who needs location-verified photo documentation.",
    features: [
      "Real-time GPS Overlay on Photos",
      "Google Maps Integration",
      "Geocoding / Reverse Geocoding",
      "Level Indicator via Device Sensors",
      "Cloud Photo Storage",
      "Location Metadata Embedding",
    ],
    badge: "Mobile App",
    badgeColor: "bg-rose-100 text-rose-700",
    gradient: "from-rose-600 to-rose-800",
  },
  {
    name: "Zat Vehicle",
    tagline: "Vehicle expense tracking & analytics",
    description:
      "A vehicle expense tracking and analytics application that helps users track fuel costs, maintenance, repairs, and other vehicle-related expenses with AI-powered insights and visual reports.",
    features: [
      "Fuel, Maintenance & Repair Tracking",
      "Cost Analytics & Charts",
      "AI-Powered Expense Analysis (Gemini)",
      "Expense Reminders & Notifications",
      "Receipt Image Capture",
      "Visual Reports & Trends",
    ],
    badge: "AI Analytics",
    badgeColor: "bg-indigo-100 text-indigo-700",
    gradient: "from-indigo-600 to-indigo-800",
  },
  {
    name: "Zat Beauty Cam",
    tagline: "Beauty camera with AI filters",
    description:
      "A beauty and selfie camera application with real-time face filters and effects powered by AI face detection. Capture and enhance photos with professional beauty filters instantly.",
    features: [
      "Real-time Face Filters & Effects",
      "AI Face Detection (ML Kit)",
      "Beauty Enhancement Filters",
      "Photo Gallery Integration",
      "Image Processing & Manipulation",
      "Photo Sharing",
    ],
    badge: "AI Filters",
    badgeColor: "bg-pink-100 text-pink-700",
    gradient: "from-pink-600 to-pink-800",
  },
];

export default function Products() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            We don&apos;t just build for clients — we build our own products.
            Here&apos;s what we&apos;ve created.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-gray-400">
            <span className="bg-gray-700 px-3 py-1 rounded-full">
              {products.length} Products
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">
              Mobile + Web
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">
              AI-Powered
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${product.badgeColor}`}
                >
                  {product.badge}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-500 mb-4">{product.tagline}</p>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-green-500 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`bg-gradient-to-br ${product.gradient} rounded-2xl p-10 text-white text-center ${
                  i % 2 === 1 ? "lg:[direction:ltr]" : ""
                }`}
              >
                <div className="text-4xl font-bold mb-2">{product.name}</div>
                <p className="text-white/70 text-sm">{product.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want Us to Build Your App?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We built all these products from the ground up. We can do the same
            for your business idea.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>
    </>
  );
}
