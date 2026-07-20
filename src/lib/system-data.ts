export type ShiftType = '早班' | '晚班' | '全班' | '休假';
export type Area = '萬華區' | '中正區';
export type ReportStatus = 'pending' | 'completed';

export interface Store {
  id: string;
  name: string;
  area: Area;
  address: string;
}

export interface TimeRecord {
  id: string;
  date: string;
  shiftType: ShiftType;
  storeName: string;
  area: Area;
  startTime: string;
  endTime: string;
  hours: number;
  overtime: number;
  note?: string;
}

export interface Report {
  id: string;
  type: 'overdue-parcel' | 'parcel-reallocation' | 'lost-item' | 'store-task';
  typeLabel: string;
  storeName: string;
  date: string;
  status: ReportStatus;
  description: string;
}

export interface SubstitutionPost {
  id: string;
  date: string;
  shiftType: string;
  startTime: string;
  endTime: string;
  storeName: string;
  area: Area;
  reason?: string;
  status: 'open' | 'taken';
  postedBy: string;
}

export interface RoutineTask {
  id: string;
  title: string;
  category: string;
  frequency: string;
  completed: boolean;
  dueTime?: string;
}

export interface CalendarDay {
  date: number;
  shift?: ShiftType;
  isToday?: boolean;
  isOtherMonth?: boolean;
}

export const STORES: Store[] = [
  { id: 's1',  name: '二華', area: '中正區', address: '台北市中正區中華路二段 415 號 1 樓' },
  { id: 's2',  name: '三元', area: '中正區', address: '台北市中正區三元街 178 號 1 樓' },
  { id: 's3',  name: '大理', area: '萬華區', address: '台北市萬華區大理街 94 號 1 樓' },
  { id: 's4',  name: '大理', area: '中正區', address: '台北市中正區重慶南路二段 94 號 1 樓' },
  { id: 's5',  name: '中華', area: '萬華區', address: '台北市萬華區中華路二段 352+354 號 1 樓' },
  { id: 's6',  name: '漢中', area: '萬華區', address: '台北市萬華區漢中街 108 號 1 樓' },
  { id: 's7',  name: '西門', area: '萬華區', address: '台北市萬華區西門町 7 號 1 樓' },
  { id: 's8',  name: '峨嵋', area: '萬華區', address: '台北市萬華區峨嵋街 52 號 1 樓' },
  { id: 's9',  name: '南昌', area: '中正區', address: '台北市中正區南昌路一段 20 號 1 樓' },
  { id: 's10', name: '忠孝', area: '中正區', address: '台北市中正區忠孝西路一段 36 號 1 樓' },
  { id: 's11', name: '博愛', area: '中正區', address: '台北市中正區博愛路 60 號 1 樓' },
  { id: 's12', name: '武昌', area: '萬華區', address: '台北市萬華區武昌街二段 28 號 1 樓' },
];

export const TIME_RECORDS: TimeRecord[] = [
  { id: 'tr1',  date: '2026-06-30', shiftType: '早班', storeName: '漢中', area: '萬華區', startTime: '08:00', endTime: '18:00', hours: 10, overtime: 0 },
  { id: 'tr2',  date: '2026-06-29', shiftType: '晚班', storeName: '二華', area: '中正區', startTime: '13:00', endTime: '23:00', hours: 10, overtime: 0 },
  { id: 'tr3',  date: '2026-06-28', shiftType: '全班', storeName: '大理', area: '萬華區', startTime: '08:00', endTime: '22:00', hours: 14, overtime: 4 },
  { id: 'tr4',  date: '2026-06-27', shiftType: '早班', storeName: '三元', area: '中正區', startTime: '08:00', endTime: '18:00', hours: 10, overtime: 0 },
  { id: 'tr5',  date: '2026-06-26', shiftType: '晚班', storeName: '中華', area: '萬華區', startTime: '13:00', endTime: '23:00', hours: 10, overtime: 0 },
  { id: 'tr6',  date: '2026-06-25', shiftType: '早班', storeName: '西門', area: '萬華區', startTime: '08:00', endTime: '18:00', hours: 10, overtime: 0 },
  { id: 'tr7',  date: '2026-06-24', shiftType: '晚班', storeName: '峨嵋', area: '萬華區', startTime: '13:00', endTime: '23:00', hours: 10, overtime: 0 },
  { id: 'tr8',  date: '2026-06-23', shiftType: '全班', storeName: '南昌', area: '中正區', startTime: '08:00', endTime: '22:00', hours: 14, overtime: 4 },
  { id: 'tr9',  date: '2026-06-22', shiftType: '早班', storeName: '大理', area: '中正區', startTime: '08:00', endTime: '18:00', hours: 10, overtime: 0 },
  { id: 'tr10', date: '2026-06-21', shiftType: '晚班', storeName: '漢中', area: '萬華區', startTime: '13:00', endTime: '23:00', hours: 10, overtime: 0 },
  { id: 'tr11', date: '2026-06-20', shiftType: '早班', storeName: '忠孝', area: '中正區', startTime: '08:00', endTime: '18:00', hours: 10, overtime: 0 },
  { id: 'tr12', date: '2026-06-19', shiftType: '全班', storeName: '博愛', area: '中正區', startTime: '08:00', endTime: '22:00', hours: 14, overtime: 3 },
];

export const REPORTS: Report[] = [
  { id: 'r1', type: 'overdue-parcel',      typeLabel: '逾期包裹',   storeName: '漢中', date: '2026-06-30', status: 'pending',   description: '包裹滯留超過7日，需聯繫取件' },
  { id: 'r2', type: 'parcel-reallocation', typeLabel: '包裹重新分配', storeName: '二華', date: '2026-06-29', status: 'pending',   description: '客戶申請轉至其他門市取件' },
  { id: 'r3', type: 'lost-item',           typeLabel: '遺落物品',   storeName: '大理', date: '2026-06-28', status: 'completed', description: '客戶遺落雨傘，已存放服務台' },
  { id: 'r4', type: 'store-task',          typeLabel: '門市交辦',   storeName: '三元', date: '2026-06-27', status: 'completed', description: '更新海報與宣傳品' },
  { id: 'r5', type: 'overdue-parcel',      typeLabel: '逾期包裹',   storeName: '中華', date: '2026-06-26', status: 'pending',   description: '共3件包裹逾期' },
  { id: 'r6', type: 'store-task',          typeLabel: '門市交辦',   storeName: '西門', date: '2026-06-25', status: 'pending',   description: '設備維護回報' },
];

export const SUBSTITUTIONS: SubstitutionPost[] = [
  { id: 'sub1', date: '2026-07-05', shiftType: '早班 08:00-18:00', startTime: '08:00', endTime: '18:00', storeName: '漢中', area: '萬華區', reason: '家中有事', status: 'open', postedBy: '王小明' },
  { id: 'sub2', date: '2026-07-08', shiftType: '晚班 13:00-23:00', startTime: '13:00', endTime: '23:00', storeName: '二華', area: '中正區', reason: '醫療回診', status: 'open', postedBy: '林小花' },
];

export const ROUTINE_TASKS: RoutineTask[] = [
  { id: 'rt1', title: '門市開店核查',      category: '開店流程', frequency: '每日',  completed: true,  dueTime: '08:30' },
  { id: 'rt2', title: '收銀機零錢備妥',    category: '開店流程', frequency: '每日',  completed: true,  dueTime: '08:30' },
  { id: 'rt3', title: '貨架整理與補貨',    category: '日常維護', frequency: '每日',  completed: false, dueTime: '10:00' },
  { id: 'rt4', title: '包裹處理與分類',    category: '物流管理', frequency: '每日',  completed: false, dueTime: '11:00' },
  { id: 'rt5', title: '逾期包裹回報',      category: '物流管理', frequency: '每日',  completed: false, dueTime: '12:00' },
  { id: 'rt6', title: '環境清潔紀錄',      category: '日常維護', frequency: '每日',  completed: true,  dueTime: '14:00' },
  { id: 'rt7', title: '門市設備巡檢',      category: '設備維護', frequency: '每週',  completed: false, dueTime: '15:00' },
  { id: 'rt8', title: '廢棄包裹處理',      category: '物流管理', frequency: '每週',  completed: false, dueTime: '16:00' },
  { id: 'rt9', title: '每日營業額核對',    category: '財務核對', frequency: '每日',  completed: false, dueTime: '22:00' },
  { id: 'rt10', title: '關店安全確認',     category: '關店流程', frequency: '每日',  completed: false, dueTime: '23:00' },
];

export const SCHEDULE_DATA: Record<number, ShiftType> = {
  1: '晚班', 2: '休假', 3: '早班', 4: '晚班', 5: '全班',
  6: '休假', 7: '早班', 8: '晚班', 9: '早班', 10: '休假',
  11: '全班', 12: '晚班', 13: '早班', 14: '休假', 15: '早班',
  16: '晚班', 17: '全班', 18: '休假', 19: '早班', 20: '晚班',
  21: '早班', 22: '休假', 23: '全班', 24: '早班', 25: '晚班',
  26: '休假', 27: '早班', 28: '晚班', 29: '全班', 30: '早班',
};

export const ANNOUNCEMENTS = [
  { id: 'ann1', title: '7月份班表已更新',        date: '2026-06-28', content: '7月份班表已完成排定，請各位同仁查看確認。' },
  { id: 'ann2', title: '新版系統功能說明',        date: '2026-06-25', content: '系統已新增代班媒合功能，歡迎多加利用。' },
  { id: 'ann3', title: '颱風假注意事項',          date: '2026-06-20', content: '如遇颱風假，請依當日公告決定是否出勤。' },
];
