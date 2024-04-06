"use client";
import Link from "next/link";
export function FinishSlideshowBtn({ text }: { text: string }) {
  return (
    <Link href="/onboarding" legacyBehavior>
      <a
        style={{
          margin: 24,
          cursor: "pointer",
          border: "2px solid #fff",
          padding: 8,
          color: "#fff",
          textDecoration: "none",
          userSelect: "none",
        }}
      >
        {text}
      </a>
    </Link>
  );
}
