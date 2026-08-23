import "./Ornament.css";

// Signature decorative motif for the whole invitation.
// "arch"     — a slender pointed arch, echoed behind the hero photo and section frames.
// "branch"   — a thin gold botanical branch, used as a divider between blocks of text.
// "diamond"  — a small rhombus divider used between short blocks of text.
export default function Ornament({ variant = "branch", flip = false, className = "" }) {
  const style = flip ? { transform: "scaleX(-1)" } : undefined;

  if (variant === "arch") {
    return (
      <svg
        className={`ornament ornament--arch ${className}`}
        style={style}
        viewBox="0 0 200 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M6 218V96C6 46 49 6 100 6s94 40 94 90v122"
          stroke="var(--color-gold)"
          strokeWidth="1.25"
        />
        <path
          d="M24 218V98c0-40 34-72 76-72s76 32 76 72v120"
          stroke="var(--color-gold)"
          strokeWidth="0.75"
          opacity="0.55"
        />
        <circle cx="100" cy="16" r="2.4" fill="var(--color-gold)" />
      </svg>
    );
  }

  if (variant === "branch") {
    return (
      <svg
        className={`ornament ornament--branch ${className}`}
        style={style}
        viewBox="0 0 160 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2 30 C 40 10, 70 10, 90 30 S 140 50, 158 30"
          stroke="var(--color-gold)"
          strokeWidth="1"
        />
        <circle cx="30" cy="19" r="2.2" fill="var(--color-gold)" />
        <circle cx="58" cy="14" r="1.6" fill="var(--color-gold)" />
        <circle cx="102" cy="42" r="2.2" fill="var(--color-gold)" />
        <circle cx="130" cy="47" r="1.6" fill="var(--color-gold)" />
        <path
          d="M30 19 C 26 12, 20 10, 16 13"
          stroke="var(--color-gold)"
          strokeWidth="0.75"
        />
        <path
          d="M102 42 C 106 49, 112 51, 117 48"
          stroke="var(--color-gold)"
          strokeWidth="0.75"
        />
      </svg>
    );
  }

  // Small diamond / rhombus divider used between short blocks of text
  return (
    <svg
      className={`ornament ornament--diamond ${className}`}
      viewBox="0 0 40 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0 6H14" stroke="var(--color-gold)" strokeWidth="1" />
      <path d="M26 6H40" stroke="var(--color-gold)" strokeWidth="1" />
      <path d="M20 0L26 6L20 12L14 6Z" stroke="var(--color-gold)" strokeWidth="1" />
    </svg>
  );
}
