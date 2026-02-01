import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <span className="text-xl font-bold">
              Nukhba<span className="text-blue-400">Tech</span>
            </span>
            <p className="mt-3 text-sm text-gray-400">
              Sama Alnukhba Information Technology LLC
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Elevating Brands to the Digital Sky
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-300">Web Development</li>
              <li className="text-sm text-gray-300">App Development</li>
              <li className="text-sm text-gray-300">Digital Marketing</li>
              <li className="text-sm text-gray-300">UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-300">
                <a href="mailto:info@nukhbatech.com" className="hover:text-white transition-colors">
                  info@nukhbatech.com
                </a>
              </li>
              <li className="text-sm text-gray-300">
                <a href="tel:+97142800149" className="hover:text-white transition-colors">
                  +971 4 280 0149
                </a>
              </li>
              <li className="text-sm text-gray-300">
                Office M-58, M Floor, Aswar Building,
                <br />
                Near Business Bay Metro,
                <br />
                Sheikh Zayed Road, Dubai, UAE
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Sama Alnukhba Information Technology
          LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
