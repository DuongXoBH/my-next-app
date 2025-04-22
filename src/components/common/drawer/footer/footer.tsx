import React from "react";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail } from "lucide-react";
import LinkTag from "../../globals/link-tag";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-8 px-4">
      {/* Brand Directory */}
      <div className="container mx-auto mb-8">
        <h3 className="text-pink-500 font-semibold mb-4">BRAND DIRECTORY</h3>

        <div className="mb-4">
          <span className="text-zinc-500 font-medium mr-2">FASHION :</span>
          {[
            "T-Shirt",
            "Shirts",
            "Shorts & Jeans",
            "Jacket",
            "Dress & Frock",
            "Innerwear",
            "Hosiery",
          ].map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
              <LinkTag href="#" className="hover:text-white transition-colors">
                {item}
              </LinkTag>
              {index < 6 && <span className="mx-2">|</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="mb-4">
          <span className="text-zinc-500 font-medium mr-2">FOOTWEAR :</span>
          {[
            "Sport",
            "Formal",
            "Boots",
            "Casual",
            "Cowboy Shoes",
            "Safety Shoes",
            "Party Wear Shoes",
            "Branded",
            "Firstcopy",
            "Long Shoes",
          ].map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
              <Link href="#" className="hover:text-white transition-colors">
                {item}
              </Link>
              {index < 9 && <span className="mx-2">|</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="mb-4">
          <span className="text-zinc-500 font-medium mr-2">JEWELLERY :</span>
          {[
            "Necklace",
            "Earrings",
            "Couple Rings",
            "Pendants",
            "Crystal",
            "Bangles",
            "Bracelets",
            "Nosepin",
            "Chain",
            "Earrings",
            "Couple Rings",
          ].map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
              <Link href="#" className="hover:text-white transition-colors">
                {item}
              </Link>
              {index < 10 && <span className="mx-2">|</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="mb-4">
          <span className="text-zinc-500 font-medium mr-2">COSMETICS :</span>
          {[
            "Shampoo",
            "Bodywash",
            "Facewash",
            "Makeup Kit",
            "Liner",
            "Lipstick",
            "Prefume",
            "Body Soap",
            "Scrub",
            "Hair Gel",
            "Hair Colors",
            "Hair Dye",
            "Sunscreen",
            "Skin Loson",
            "Liner",
            "Lipstick",
          ].map((item, index) => (
            <React.Fragment key={`${item}-${index}`}>
              <Link href="#" className="hover:text-white transition-colors">
                {item}
              </Link>
              {index < 15 && <span className="mx-2">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <Separator className="bg-zinc-800" />

      {/* Main Footer Content */}
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Popular Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4 relative">
              POPULAR CATEGORIES
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-pink-500"></span>
            </h3>
            <ul className="mt-4 space-y-2">
              {["Fashion", "Electronic", "Cosmetic", "Health", "Watches"].map(
                (item, index) => (
                  <li key={`${item}-${index}`}>
                    <LinkTag
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </LinkTag>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4 relative">
              PRODUCTS
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-pink-500"></span>
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                "Prices Drop",
                "New Products",
                "Best Sales",
                "Contact Us",
                "Sitemap",
              ].map((item, index) => (
                <li key={`${item}-${index}`}>
                  <LinkTag
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </LinkTag>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 relative">
              OUR COMPANY
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-pink-500"></span>
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                "Delivery",
                "Legal Notice",
                "Terms And Conditions",
                "About Us",
                "Secure Payment",
              ].map((item, index) => (
                <li key={`${item}-${index}`}>
                  <LinkTag
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </LinkTag>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 relative">
              SERVICES
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-pink-500"></span>
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                "Prices Drop",
                "New Products",
                "Best Sales",
                "Contact Us",
                "Sitemap",
              ].map((item, index) => (
                <li key={`${item}-${index}`}>
                  <LinkTag
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </LinkTag>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 relative">
              CONTACT
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-pink-500"></span>
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-pink-500 flex-shrink-0 mt-1" />
                <span>
                  419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-pink-500" />
                <LinkTag
                  href="tel:(607) 936-8058"
                  className="hover:text-white transition-colors"
                >
                  (607) 936-8058
                </LinkTag>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-pink-500" />
                <LinkTag
                  href="mailto:Example@Gmail.Com"
                  className="hover:text-white transition-colors"
                >
                  Example@Gmail.Com
                </LinkTag>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="container mx-auto mt-12 flex flex-col items-center">
        <div className="flex space-x-3 mb-4">
          <div className="bg-white p-2 rounded w-12 h-8 flex items-center justify-center">
            <span className="text-xs font-bold text-blue-700">VISA</span>
          </div>
          <div className="bg-white p-2 rounded w-12 h-8 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="flex">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full -ml-1"></div>
              </div>
            </div>
          </div>
          <div className="bg-white p-2 rounded w-12 h-8 flex items-center justify-center">
            <span className="text-xs font-bold text-blue-600">PayPal</span>
          </div>
          <div className="bg-white p-2 rounded w-12 h-8 flex items-center justify-center">
            <span className="text-xs font-bold text-purple-700">Skrill</span>
          </div>
          <div className="bg-white p-2 rounded w-12 h-8 flex items-center justify-center">
            <div className="flex">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full -ml-1"></div>
            </div>
          </div>
          <div className="bg-white p-2 rounded w-12 h-8 flex items-center justify-center">
            <span className="text-xs font-bold text-blue-700">VISA</span>
          </div>
        </div>

        <p className="text-zinc-600">Copyright © All Rights Reserved.</p>
      </div>
    </footer>
  );
}
