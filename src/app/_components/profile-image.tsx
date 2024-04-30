"use client";

import { useTheme } from "@/components/themes/use-theme";
import Image from "next/image";

export function ProfileImage() {
  const [theme] = useTheme();

  if (theme === "default") {
    return;
  }

  return (
    <Image
      alt="scape76"
      width={45}
      height={45}
      className="rounded-full"
      src={"/thorfinn.webp"}
    />
  );
}
