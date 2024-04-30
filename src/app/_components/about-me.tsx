"use client";

import * as React from "react";
import { LinkBadge } from "@/components/link-badge";
import { useTheme } from "@/components/themes/use-theme";

export function AboutMe() {
  const [theme] = useTheme();

  return (
    <section className="prose prose-zinc dark:prose-invert">
      {theme === "default" ? (
        <p className="leading-loose">
          {`I'm`} <span className="font-bold">Danya</span>, I am a computer
          science student at{" "}
          <LinkBadge aria-label="KNU FIT" href={"https://fit.knu.ua/"}>
            KNU
          </LinkBadge>
          . At my free time, I enjoy building stuff on the web, learning about
          humans & ai, reading manga and playing video games.
        </p>
      ) : (
        <p className="leading-loose">
          {`私は`} <span className="font-bold">Danya</span> です。私は{" "}
          <LinkBadge aria-label="KNU FIT" href={"https://fit.knu.ua/"}>
            KNU
          </LinkBadge>{" "}
          のコンピュータサイエンス学生です。自由な時間には、ウェブ上での構築、人間の本質の学習、漫画を読むことを楽しんでいます。
        </p>
      )}
    </section>
  );
}
