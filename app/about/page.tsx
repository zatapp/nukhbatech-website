import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Nukhba Tech",
  description:
    "Sama Alnukhba Information Technology LLC - Dubai-based IT company elevating brands to the digital sky.",
};

export default function About() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Combining limitless vision with grounded, expert execution.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sama Alnukhba Information Technology LLC
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              Our name tells our story. <strong>Sama</strong> means the vast,
              open sky — representing limitless vision and ambition.{" "}
              <strong>Alnukhba</strong> means the elite — representing grounded,
              expert execution.
            </p>
            <p className="text-gray-600 mb-4">
              Based in Dubai, we are a full-service IT company specializing in
              web development, mobile app development, and digital marketing. We
              help businesses of all sizes establish and grow their digital
              presence with solutions that are modern, scalable, and built to
              perform.
            </p>
            <p className="text-gray-600">
              We don&apos;t just build for clients — we are product builders
              ourselves. Our flagship product, <strong>Asli UAE</strong>, is a
              delivery platform we designed, developed, and launched from the
              ground up, demonstrating our ability to take ideas from concept to
              market.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                desc: "We don't cut corners. Every line of code, every pixel, every strategy is crafted with precision and care.",
              },
              {
                title: "Client Success",
                desc: "Your success is our success. We measure our work by the real impact it has on your business.",
              },
              {
                title: "Innovation",
                desc: "We stay at the forefront of technology, using the latest tools and frameworks to build future-proof solutions.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white border border-gray-200 rounded-xl p-8"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">
            What We Bring
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Web Development", desc: "Modern, responsive websites and web apps" },
              { label: "App Development", desc: "iOS and Android apps with Flutter and native" },
              { label: "Digital Marketing", desc: "SEO, social media, PPC, and content strategy" },
              { label: "Product Building", desc: "From idea to market — we build our own products" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {s.label}
                </h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Whether you need a website, an app, or a full digital strategy —
            we&apos;re ready.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
