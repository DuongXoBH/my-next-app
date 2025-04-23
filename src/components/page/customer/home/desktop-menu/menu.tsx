"use client";

import { CATEGORIES } from "@/constants/customer/home/categories";
import MenuItem from "./menu-item";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DesktopMenu() {
  const categories = CATEGORIES;
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger asChild>
        <div className="w-full h-[50px] flex flex-row justify-center gap-10">
          {categories.map(
            (
              item: { title: string; menu: boolean; href: string },
              index: number
            ) => {
              return (
                <MenuItem
                  key={`category-${index}`}
                  title={item.title}
                  menu={item.menu}
                  href={item.href}
                  setOpen={setOpen}
                />
              );
            }
          )}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-full"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="container mx-auto py-6">
          <div className="grid grid-cols-4 gap-8">
            {/* First Column */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Electronics</h3>
              <div className="space-y-2">
                {["Desktop", "Laptop", "Camera", "Tablet", "Headphone"].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block text-gray-600 hover:text-pink-500"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>

              <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden">
                <div className="relative p-4">
                  <Image
                    src="/customer/home/electronics-banner-1.jpg"
                    alt="Headphone"
                    width={150}
                    height={150}
                    className="object-contain mx-auto"
                  />
                  <div className="mt-4">
                    <h4 className="text-lg font-medium">Headphone</h4>
                    <p className="text-gray-600">Collection</p>
                    <p className="mb-2">
                      Flat <span className="font-bold">30%</span> off
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-1">
                      SHOP NOW
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Men&apos;s</h3>
              <div className="space-y-2">
                {["Formal", "Casual", "Sports", "Jacket", "Sunglasses"].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block text-gray-600 hover:text-pink-500"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>

              <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden">
                <div className="relative p-4">
                  <Image
                    src="/customer/home/mens-banner.jpg"
                    alt="Men's Fashion"
                    width={150}
                    height={150}
                    className="object-contain mx-auto"
                  />
                  <div className="mt-4">
                    <h4 className="text-lg font-medium">Men&apos;s</h4>
                    <p className="text-gray-600">Fashion</p>
                    <p className="mb-2">
                      Flat <span className="font-bold">19%</span> off
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-1">
                      SHOP NOW
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Column */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Women&apos;s</h3>
              <div className="space-y-2">
                {["Formal", "Casual", "Perfume", "Cosmetics", "Bags"].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block text-gray-600 hover:text-pink-500"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>

              <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden">
                <div className="relative p-4">
                  <Image
                    src="/customer/home/womens-banner.jpg"
                    alt="Women's Fashion"
                    width={150}
                    height={150}
                    className="object-contain mx-auto"
                  />
                  <div className="mt-4">
                    <h4 className="text-lg font-medium">Women&apos;s</h4>
                    <p className="text-gray-600">Fashion</p>
                    <p className="mb-2">
                      Flat <span className="font-bold">35%</span> off
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-1">
                      SHOP NOW
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Column */}
            <div className="space-y-4">
              <h3 className="font-medium text-lg">Electronics</h3>
              <div className="space-y-2">
                {[
                  "Smart Watch",
                  "Smart TV",
                  "Keyboard",
                  "Mouse",
                  "Microphone",
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block text-gray-600 hover:text-pink-500"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden">
                <div className="relative p-4">
                  <Image
                    src="/customer/home/electronics-banner-2.jpg"
                    alt="Mouse"
                    width={150}
                    height={150}
                    className="object-contain mx-auto"
                  />
                  <div className="mt-4">
                    <h4 className="text-lg font-medium">Mouse</h4>
                    <p className="text-gray-600">Collection</p>
                    <p className="mb-2">
                      Flat <span className="font-bold">50%</span> off
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-1">
                      SHOP NOW
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
