export const HEAVENLY_STEMS = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"] as const;
export const EARTHLY_BRANCHES = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"] as const;
export const STEM_ELEMENTS = ["木","木","火","火","土","土","金","金","水","水"] as const;
export const BRANCH_ELEMENTS = ["水","土","木","木","土","火","火","土","金","金","土","水"] as const;
export const BRANCH_ANIMALS = ["鼠","牛","虎","兔","龍","蛇","馬","羊","猴","雞","狗","豬"] as const;
export const HOUR_NAMES = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"] as const;
export const HOUR_RANGES = [
  "23:00–01:00","01:00–03:00","03:00–05:00","05:00–07:00",
  "07:00–09:00","09:00–11:00","11:00–13:00","13:00–15:00",
  "15:00–17:00","17:00–19:00","19:00–21:00","21:00–23:00",
] as const;

export type Pillar = { stem: string; branch: string; element: string };

function gregorianToJDN(year: number, month: number, day: number): number {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  return (
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045
  );
}

export function getYearPillar(year: number): Pillar {
  const si = ((year - 4) % 10 + 10) % 10;
  const bi = ((year - 4) % 12 + 12) % 12;
  return { stem: HEAVENLY_STEMS[si], branch: EARTHLY_BRANCHES[bi], element: STEM_ELEMENTS[si] };
}

export function getDayPillar(year: number, month: number, day: number): Pillar {
  const jdn = gregorianToJDN(year, month, day);
  const pos = ((jdn + 49) % 60 + 60) % 60;
  const si = pos % 10;
  const bi = pos % 12;
  return { stem: HEAVENLY_STEMS[si], branch: EARTHLY_BRANCHES[bi], element: STEM_ELEMENTS[si] };
}

export function getMonthPillar(year: number, month: number): Pillar {
  // Simplified – does not account for exact solar-term boundaries
  const bi = (month + 1) % 12;
  const yearStemIdx = ((year - 4) % 10 + 10) % 10;
  const bases = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0];
  const si = (bases[yearStemIdx] + (month - 1)) % 10;
  return { stem: HEAVENLY_STEMS[si], branch: EARTHLY_BRANCHES[bi], element: STEM_ELEMENTS[si] };
}

export function getHourPillar(year: number, month: number, day: number, hour: number): Pillar {
  const bi = Math.floor((hour + 1) / 2) % 12;
  const dayPillar = getDayPillar(year, month, day);
  const dsi = HEAVENLY_STEMS.indexOf(dayPillar.stem as typeof HEAVENLY_STEMS[number]);
  const bases = [0, 2, 4, 6, 8, 0, 2, 4, 6, 8];
  const si = (bases[dsi] + bi) % 10;
  return { stem: HEAVENLY_STEMS[si], branch: EARTHLY_BRANCHES[bi], element: STEM_ELEMENTS[si] };
}

export interface BaziResult {
  year: Pillar & { animal: string };
  month: Pillar;
  day: Pillar;
  hour: Pillar;
  fiveElements: Record<string, number>;
  dayMaster: string;
  dayMasterElement: string;
}

export function calculateBazi(
  birthYear: number,
  birthMonth: number,
  birthDay: number,
  birthHour: number
): BaziResult {
  const year = getYearPillar(birthYear);
  const month = getMonthPillar(birthYear, birthMonth);
  const day = getDayPillar(birthYear, birthMonth, birthDay);
  const hour = getHourPillar(birthYear, birthMonth, birthDay, birthHour);
  const animalIdx = ((birthYear - 4) % 12 + 12) % 12;

  const fiveElements: Record<string, number> = { 木: 0, 火: 0, 土: 0, 金: 0, 水: 0 };
  for (const p of [year, month, day, hour]) {
    fiveElements[p.element] = (fiveElements[p.element] ?? 0) + 1;
    const branchEl = BRANCH_ELEMENTS[EARTHLY_BRANCHES.indexOf(p.branch as typeof EARTHLY_BRANCHES[number])];
    if (branchEl) fiveElements[branchEl] = (fiveElements[branchEl] ?? 0) + 0.5;
  }

  return {
    year: { ...year, animal: BRANCH_ANIMALS[animalIdx] },
    month,
    day,
    hour,
    fiveElements,
    dayMaster: day.stem,
    dayMasterElement: day.element,
  };
}
