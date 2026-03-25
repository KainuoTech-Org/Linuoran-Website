"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/concerts/nye-concert-group.jpg",
  "/images/concerts/national-day-1.jpg",
  "/images/concerts/national-day-2.jpg",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#EFEFED] overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
           {images.map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.2 }} className="aspect-square relative group overflow-hidden ring-0 hover:ring-2 ring-[#A3907A] transition-all duration-500">
                 <Image src={src} fill className="object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110" alt="Gallery memory" sizes="(max-width: 768px) 100vw, 33vw" />
              </motion.div>
           ))}
        </div>
    </section>
  );
}