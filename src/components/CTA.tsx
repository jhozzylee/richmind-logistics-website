"use client";

import Button from "@/components/Button";
import Link from "next/link";

export default function LegacyCTA() {
  return (
    <section className="w-full py-20 lg:py-[160px]">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)] flex flex-col items-center text-center gap-8">

        {/* Heading */}
        <h3 className="text-h3 text-surface-dim max-w-[640px]">
          A Legacy Built on Trust and Movement
        </h3>

        {/* CTA */}
        <Link href="/contact?intent=start">
          <Button variant="primary" className="px-8 py-4">
            Start Shipping Now
          </Button>
        </Link>

      </div>
    </section>
  );
}
