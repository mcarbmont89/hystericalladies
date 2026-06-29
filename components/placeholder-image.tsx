import { ImageIcon } from "lucide-react";

type Props = {
  label?: string;
  ratio?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
};

const ratioClasses: Record<NonNullable<Props["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export default function PlaceholderImage({
  label = "Image",
  ratio = "landscape",
  className = "",
}: Props) {
  return (
    <div
      className={`${ratioClasses[ratio]} relative flex items-center justify-center overflow-hidden bg-paper-deep ${className}`}
    >
      {/* Diagonal hatch lines for the "developing print" look */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #181311 0, #181311 1px, transparent 1px, transparent 10px)",
        }}
        aria-hidden
      />
      <div className="relative flex flex-col items-center gap-2 text-ink-soft">
        <ImageIcon className="h-7 w-7" strokeWidth={1.25} aria-hidden />
        <span className="font-sans text-[0.65rem] uppercase tracking-catalog">{label}</span>
      </div>
    </div>
  );
}
