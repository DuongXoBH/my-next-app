"use client";

import { CollapsibleContent } from "@/components/ui/collapsible";
import { CardMedia } from "@mui/material";
import { Collapsible, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CategoriesTag({
  isOpenNumber,
  setOpen,
  index,
  category,
}: {
  isOpenNumber: number | null;
  setOpen: (index: number | null) => void;
  index: number;
  category: {
    id: number;
    image: string;
    name: string;
  };
}) {
  const subCategory: { name: string; count: number }[] = [
    { name: "Shirt", count: 300 },
    { name: "Shorts & Jeans", count: 60 },
    { name: "Jacket", count: 50 },
    { name: "Dress & Frock", count: 87 },
  ];

  const isOpen = isOpenNumber === index;

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const chevronVariants = {
    up: { rotate: 180, transition: { duration: 0.2 } },
    down: { rotate: 0, transition: { duration: 0.2 } },
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={() => setOpen(index)}
      className="border-b border-gray-100 pb-2 last:border-0"
    >
      <CollapsibleTrigger className="flex items-center justify-between w-full py-2 group">
        <div className="flex items-center space-x-2">
          <CardMedia
            component="img"
            image={category.image}
            alt={category.name}
            sx={{
              width: 30,
              height: 30,
              objectFit: "contain",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200 font-bold max-h-6 overflow-y-hidden">
            {category.name}
          </span>
        </div>
        <motion.div
          variants={chevronVariants}
          animate={isOpen ? "up" : "down"}
          initial="down"
        >
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </motion.div>
      </CollapsibleTrigger>

      <AnimatePresence>
        {isOpen && (
          <CollapsibleContent className="overflow-hidden" forceMount>
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="pl-7 space-y-2 mt-1"
            >
              {subCategory.map(
                (
                  product: { name: string; count: number },
                  subIndex: number
                ) => (
                  <motion.div
                    key={`sub-${category?.id}-${subIndex}`}
                    variants={itemVariants}
                    className="flex items-center justify-between py-1 hover:bg-gray-50 px-2 rounded transition-colors duration-200 cursor-pointer"
                  >
                    <span className="text-gray-600 font-bold">
                      {product.name}
                    </span>
                    <span className="text-gray-400">{product.count}</span>
                  </motion.div>
                )
              )}
            </motion.div>
          </CollapsibleContent>
        )}
      </AnimatePresence>
    </Collapsible>
  );
}
