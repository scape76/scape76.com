"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useDebounceValue, useMediaQuery } from "usehooks-ts";

export function ToTopButton() {
  const matches = useMediaQuery("(min-width: 860px)");
  const { scrollYProgress } = useScroll();

  const prev = React.useRef(window.scrollY);
  const [show, setShow] = useDebounceValue(
    window.scrollY > 0 ? true : false,
    200
  );

  useMotionValueEvent(scrollYProgress, "change", (val) => {
    if (prev.current < val) setShow(true);
    else setShow(false);
    prev.current = val;
  });

  if (!matches)
    return (
      <div className="ml-auto">
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="rounded-full"
        >
          <ArrowUpIcon className="size-4" />
        </Button>
      </div>
    );

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "backInOut", duration: 0.6 }}
          className="absolute top-auto -right-2 h-full"
        >
          <Button
            size={"icon"}
            variant={"outline"}
            className="sticky top-[calc(100vh-50px)] rounded-full"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <ArrowUpIcon className="size-4" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
