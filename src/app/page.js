"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import {
  Shirt,
  ShoppingBag,
  Watch,
  Footprints,
  Sparkles,
  MapPin,
  Phone,
  Clock,
  Star,
  ShieldCheck,
} from "lucide-react";

export default function OGCollectionLanding() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const categories = [
    {
      name: "Casual Wear",
      icon: Shirt,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Formal Wear",
      icon: ShoppingBag,
      image:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Shoes",
      icon: Footprints,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Watches",
      icon: Watch,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Perfumes",
      icon: Sparkles,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const features = [
    {
      icon: Star,
      title: "Premium In-Store Experience",
      desc: "Personal styling & curated fashion",
    },
    {
      icon: Shirt,
      title: "Latest Collections",
      desc: "Fresh arrivals every season",
    },
    {
      icon: ShieldCheck,
      title: "Authentic Quality",
      desc: "Crafted to last",
    },
    {
      icon: MapPin,
      title: "Visit Our Store",
      desc: "Walk in & upgrade your style",
    },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden font-sans">
      {/* NAVBAR */}

      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="OGCollection Logo"
              width={66}
              height={66}
              className="rounded-xl object-cover"
            />
            <p className="text-2xl font-bold tracking-tight">
              OG COLLECTION
            </p>
          </div>



          <button className="bg-black text-white px-6 py-2 rounded-full hover:scale-105 transition">
            Visit Store
          </button>
        </div>
      </motion.nav>

      {/* HERO */}

      <section
        ref={heroRef}
        className="relative h-[92vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop"
            alt="Luxury Store"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            A Project By<br /> Owais Garments
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Elevate Your Everyday Style
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            A destination for modern men who value style, presence, and quality.
          </p>


          <p className="mt-6 text-sm text-gray-300 tracking-wide">
            No online orders — Exclusive in-store shopping experience
          </p>
        </motion.div>
      </section>

      {/* FEATURES */}

      <section className="py-16 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white shadow">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="font-semibold">{f.title}</p>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* COLLECTIONS */}

      <section className="px-6 md:px-12 py-28">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Collections
          </h2>
          <p className="text-gray-500 mt-4">
            Designed for those who refuse to blend in.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[460px] rounded-[28px] overflow-hidden shadow-lg"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8 text-white">
                  <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl inline-flex mb-3">
                    <Icon size={22} />
                  </div>
                  <p className="text-3xl font-bold">{cat.name}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}

      <section className="bg-black text-white py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold">
            The OGCollection Experience
          </h3>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            At OGCollection, style is more than clothing — it is a statement.
            Discover a retail space built for men who appreciate refined fashion,
            modern confidence, and timeless design.
          </p>
        </div>
      </section>

      {/* CONTACT */}

      <section className="bg-white px-6 md:px-12 py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="p-10 rounded-3xl border hover:shadow-xl transition">
            <MapPin size={34} className="mx-auto mb-4" />
            <h4 className="text-2xl font-semibold mb-3">Location</h4>
            <p className="text-gray-500">
              Satellite Town <br /> Hasilpur, Pakistan
            </p>
          </div>

          <div className="p-10 rounded-3xl border hover:shadow-xl transition">
            <Phone size={34} className="mx-auto mb-4" />
            <h4 className="text-2xl font-semibold mb-3">Contact</h4>
            <p className="text-gray-500">
              0321-5838164 <br /> support@ogcollection.com
            </p>
          </div>

          <div className="p-10 rounded-3xl border hover:shadow-xl transition">
            <Clock size={34} className="mx-auto mb-4" />
            <h4 className="text-2xl font-semibold mb-3">Opening Hours</h4>
            <p className="text-gray-500">
              Open Every Day <br /> Weekdays & Weekends
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-black text-gray-400 py-12 text-center">
        <p className="text-white font-semibold text-xl">OG Collection</p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </div>
  );
}
