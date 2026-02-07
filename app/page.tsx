// kayen li t9olhom w kayen li non
"use client";
import { motion } from "framer-motion";

import { GoArrowRight, GoBook } from "react-icons/go";
import TransitionLink from "@/components/animations/TransitionLink";
import Faq from "@/components/Faq";
export default async function Index() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto sm:max-w-xl  lg:w-full text-center w-3/4">
          <motion.h1
            className="text-5xl text_gradient mb-5"
            initial={{
              opacity: 0,
              scale: 0.3,
              translateY: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateY: 0,
            }}
            transition={{ duration: 1.2 }}
          >
            Syxth Oracle
            <br />
            is coming soon
          </motion.h1>
          <motion.p
            className="mt-4 sm:text-xl/relaxed mb-5 text_gradient"
            initial={{
              opacity: 0,
              scale: 0.3,
              translateY: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateY: 0,
            }}
            transition={{ duration: 1.2 }}
          >
            Be the first to experience the future!
          </motion.p>
          <motion.div
            className="mt-8 flex sm:flex-row flex-col items-center justify-center gap-4 mb-5 "
            initial={{
              opacity: 0,
              scale: 0.3,
              translateY: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateY: 0,
            }}
            transition={{ duration: 1.2 }}
          >
            <TransitionLink
              cn="block w-full rounded px-12 py-4 text-sm font-medium shadow focus:outline-none  active:text-grey-500 max-w-40"
              label="Join the Waitlist"
              href="/contact_us"
              svg={{ component: <GoArrowRight className="ml-2" /> }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
