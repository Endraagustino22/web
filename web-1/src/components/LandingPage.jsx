import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function LandingPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="bg-white">
      <div className="relative w-full">
        {/* Background Image Container */}
        <div
          ref={ref}
          className="relative isolate mt-16 overflow-hidden bg-cover bg-center px-6 pt-16 sm:px-16 md:pt-24 lg:flex h-[60vh] sm:h-[50vh] lg:h-[80vh] lg:gap-x-20 lg:px-24 lg:pt-0"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Background Image */}
          <motion.div
            className="absolute inset-0 z-0 brightness-60"
            style={{
              backgroundImage: `url(/background.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              y: backgroundY,
            }}
          />

          {/* Foreground Image */}
          <motion.div
            className="absolute inset-0 z-10 brightness-70 lg:w-1/2"
            style={{
              backgroundImage: `url(/macan-nobg2.png)`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
            }}
          />

          {/* Content */}
          <motion.div
            style={{ y: textY }}
            className="relative z-20 mx-auto w-full flex flex-col items-center justify-center text-center lg:items-end lg:text-left"
          >
            <h2 className="text-2xl font-extrabold text-white tracking-tight text-center sm:text-right sm:text-5xl drop-shadow-xl">
              Step Into the Wild <br /> Discover Nature Like Never Before!
            </h2>

            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-100 transition"
              >
                Get started
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-white hover:underline"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
