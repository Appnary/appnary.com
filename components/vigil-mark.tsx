type VigilMarkProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

/** Ink shield + aqua sparkles mark used across Vigil surfaces. */
export default function VigilMark({
  className = "",
  size = 48,
  priority = false,
}: VigilMarkProps) {
  return (
    <img
      src="/vigil-mark.svg"
      alt=""
      width={size}
      height={size}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={`shrink-0 rounded-[22%] shadow-sm ring-1 ring-border-themed ${className}`.trim()}
    />
  );
}
