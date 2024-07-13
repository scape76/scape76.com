"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  {
    href: "/blog",
    title: "Blog",
    info: "Blog",
  },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 items-center">
      <Link className="relative p-1 px-2" href={"/"}>
        {pathname === "/" && (
          <motion.div
            className="backdrop-blur-sm absolute inset-0 bg-accent rounded-lg"
            style={{ borderRadius: 9999 }}
            layoutId="nav"
            transition={{ type: "spring", duration: 0.6 }}
          />
        )}
        <motion.div
          animate={{ rotate: 360 }}
          initial={{ rotate: 0 }}
          transition={{ type: "spring", duration: 1.4 }}
          className="z-[10] relative"
        >
          D
        </motion.div>
      </Link>
      {navItems.map((item) => (
        <Link
          aria-label={item.info}
          className="relative p-1 px-2"
          href={item.href}
          key={item.href}
        >
          {pathname.startsWith(item.href) && (
            <motion.div
              className="backdrop-blur-sm absolute inset-0 bg-accent rounded-lg"
              style={{ borderRadius: 9999 }}
              layoutId="nav"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          <span className="z-[10] relative">{item.title}</span>
        </Link>
      ))}
    </nav>
  );
}
