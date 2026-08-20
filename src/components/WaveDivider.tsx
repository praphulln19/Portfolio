export default function WaveDivider({
  fromClass,
  toClass,
  flip = false,
}: {
  fromClass: string;
  toClass: string;
  flip?: boolean;
}) {
  return (
    <div className={`${fromClass} ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block h-[48px] w-full md:h-[84px]"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,90 480,0 720,42 C960,84 1200,8 1440,46 L1440,100 L0,100 Z"
          className={toClass}
        />
      </svg>
    </div>
  );
}
