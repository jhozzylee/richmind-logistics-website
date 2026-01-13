import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Background Image */}
      <Image
        src="/images/Background.webp"
        alt="Site background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
