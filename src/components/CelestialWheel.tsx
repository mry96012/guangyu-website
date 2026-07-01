"use client";

const BRANCHES = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
const ZODIAC = ["♓","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒"];

const r4 = (n: number) => Math.round(n * 10000) / 10000;

export default function CelestialWheel({ className = "" }: { className?: string }) {
  const cx = 200, cy = 200;
  const R = { outer: 188, zone1: 170, zone2: 148, zone3: 118, inner: 70 };

  const segments = BRANCHES.map((b, i) => {
    const startAngle = (i * 30 - 90) * (Math.PI / 180);
    const midAngle = ((i + 0.5) * 30 - 90) * (Math.PI / 180);
    const branchR = (R.zone1 + R.zone2) / 2;
    const zodiacR = (R.zone2 + R.zone3) / 2;

    const x1 = r4(cx + R.outer * Math.cos(startAngle));
    const y1 = r4(cy + R.outer * Math.sin(startAngle));
    const x2 = r4(cx + R.inner * Math.cos(startAngle));
    const y2 = r4(cy + R.inner * Math.sin(startAngle));

    return {
      divLine: `M${x1},${y1} L${x2},${y2}`,
      branchPos: { x: r4(cx + branchR * Math.cos(midAngle)), y: r4(cy + branchR * Math.sin(midAngle)) },
      zodiacPos: { x: r4(cx + zodiacR * Math.cos(midAngle)), y: r4(cy + zodiacR * Math.sin(midAngle)) },
      label: b,
      zodiac: ZODIAC[i],
    };
  });

  const tickMarks = Array.from({ length: 72 }, (_, i) => {
    const angle = (i * 5) * (Math.PI / 180);
    const isLong = i % 6 === 0;
    const r1 = R.outer - (isLong ? 10 : 5);
    return {
      x1: r4(cx + r1 * Math.cos(angle)),
      y1: r4(cy + r1 * Math.sin(angle)),
      x2: r4(cx + R.outer * Math.cos(angle)),
      y2: r4(cy + R.outer * Math.sin(angle)),
    };
  });

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1B3A5E" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0C1D2F" stopOpacity="0.2" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Background disc */}
      <circle cx={cx} cy={cy} r={R.outer} fill="url(#bgGrad)" />

      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={R.outer} fill="none" stroke="#C8A63A" strokeWidth="1.5" opacity="0.7" />

      {/* Tick marks */}
      {tickMarks.map((t, i) => (
        <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
          stroke="#C8A63A" strokeWidth={i % 6 === 0 ? 1.2 : 0.5} opacity="0.5" />
      ))}

      {/* Zone rings */}
      <circle cx={cx} cy={cy} r={R.zone1} fill="none" stroke="#C8A63A" strokeWidth="0.8" opacity="0.4" />
      <circle cx={cx} cy={cy} r={R.zone2} fill="none" stroke="#C8A63A" strokeWidth="0.8" opacity="0.4" />
      <circle cx={cx} cy={cy} r={R.zone3} fill="none" stroke="#C8A63A" strokeWidth="1" opacity="0.5" />

      {/* Segment dividers */}
      {segments.map((s, i) => (
        <path key={i} d={s.divLine} stroke="#C8A63A" strokeWidth="0.6" opacity="0.35" />
      ))}

      {/* Earthly branch labels */}
      {segments.map((s, i) => (
        <text key={`b${i}`} x={s.branchPos.x} y={s.branchPos.y}
          textAnchor="middle" dominantBaseline="middle"
          fill="#E8D08A" fontSize="11" fontFamily="'Noto Serif TC', serif" fontWeight="600" opacity="0.9">
          {s.label}
        </text>
      ))}

      {/* Zodiac symbols */}
      {segments.map((s, i) => (
        <text key={`z${i}`} x={s.zodiacPos.x} y={s.zodiacPos.y}
          textAnchor="middle" dominantBaseline="middle"
          fill="#C8A63A" fontSize="10" opacity="0.7">
          {s.zodiac}
        </text>
      ))}

      {/* Inner circle */}
      <circle cx={cx} cy={cy} r={R.inner} fill="rgba(12,29,47,0.8)" stroke="#C8A63A" strokeWidth="1.5" opacity="0.8" />

      {/* Compass star (8-pointed) */}
      {[0, 45, 90, 135].map((deg) => {
        const rad = deg * (Math.PI / 180);
        const x1 = cx + 60 * Math.cos(rad), y1 = cy + 60 * Math.sin(rad);
        const x2 = cx - 60 * Math.cos(rad), y2 = cy - 60 * Math.sin(rad);
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#C8A63A" strokeWidth="0.8" opacity="0.6" filter="url(#glow)" />;
      })}

      {/* 八卦 trigrams (simplified) */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 45 - 90) * (Math.PI / 180);
        const r = R.inner - 16;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        const symbols = ["☰","☱","☲","☳","☴","☵","☶","☷"];
        return (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
            fill="#C8A63A" fontSize="9" opacity="0.7" fontFamily="serif">
            {symbols[i]}
          </text>
        );
      })}

      {/* Yin-Yang center */}
      <circle cx={cx} cy={cy} r={18} fill="none" stroke="#C8A63A" strokeWidth="1" opacity="0.8" filter="url(#glow)" />
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle"
        fill="#C8A63A" fontSize="22" opacity="0.9" filter="url(#glow)">
        ☯
      </text>

      {/* Decorative sparks */}
      {[
        { x: 200, y: 8 }, { x: 392, y: 200 }, { x: 200, y: 392 }, { x: 8, y: 200 },
        { x: 338, y: 62 }, { x: 338, y: 338 }, { x: 62, y: 338 }, { x: 62, y: 62 },
      ].map((p, i) => (
        <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle"
          fill="#D4AF37" fontSize="8" opacity="0.6">✦</text>
      ))}
    </svg>
  );
}
