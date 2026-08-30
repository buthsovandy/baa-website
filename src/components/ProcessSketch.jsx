/**
 * Five hand-drawn-feeling wireframes standing in for the studio's process sketches.
 * Swap for scans of real drawings when they are ready.
 */
const paths = {
  0: (
    <>
      <path d="M20 70 L60 46 L110 66 L70 92 Z" />
      <path d="M20 70 V38 L60 14 L110 34 V66" />
      <path d="M60 46 V14 M110 34 L70 60 V92 M20 38 L70 60" />
      <path d="M36 62 L36 30 M92 42 L92 74" />
    </>
  ),
  1: (
    <>
      <circle cx="64" cy="54" r="30" />
      <path d="M28 30 L98 78 M98 30 L28 78 M64 18 V90 M26 54 H102" />
      <path d="M40 26 L88 82 M88 26 L40 82" />
    </>
  ),
  2: (
    <>
      <path d="M24 82 V50 L64 22 L104 50 V82 Z" />
      <path d="M14 54 L64 16 L114 54" />
      <path d="M48 82 V62 H80 V82" />
      <path d="M34 58 H44 M84 58 H94" />
    </>
  ),
  3: (
    <>
      <path d="M22 84 H106" />
      <path d="M30 84 V44 L64 22 L98 44 V84" />
      <path d="M30 60 H98 M64 22 V84" />
      <path d="M42 70 H54 V84 M76 52 H90 V66 H76 Z" />
    </>
  ),
  4: (
    <>
      <path d="M18 86 H110" />
      <path d="M26 86 V52 H62 V86 M62 66 H100 V86" />
      <path d="M26 52 L44 34 L62 52" />
      <path d="M36 68 H50 M74 74 H90" />
      <path d="M100 66 V50" />
    </>
  ),
}

export default function ProcessSketch({ index = 0, className = '' }) {
  return (
    <svg
      viewBox="0 0 128 104"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[index] ?? paths[0]}
    </svg>
  )
}
