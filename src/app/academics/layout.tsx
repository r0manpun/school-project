import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
});

export default function layout({ children }: { children: React.ReactNode }) {
  return <main className={playfair.className}>{children}</main>;
}
