/**
 * 计算当前年度进度
 * @returns {number} 年度进度百分比（0-1之间的小数）
 */
export function calculateProgress() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
  const elapsed = Number(now) - Number(startOfYear);
  const total = Number(endOfYear) - Number(startOfYear);
  return elapsed / total;
}

/**
 * 计算当前年份剩余天数
 * @returns {number} 剩余天数
 */
export function calculateRemainingDays() {
  const now = new Date();
  const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
  const diffTime = Number(endOfYear) - Number(now);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * 计算已过天数
 * @returns {number} 已过天数
 */
export function calculateElapsedDays() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const diffTime = Number(now) - Number(startOfYear);
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * 计算当前季度进度
 * @returns {number} 季度进度百分比（0-1之间的小数）
 */
export function calculateQuarterProgress() {
  const now = new Date();
  const currentMonth = now.getMonth();
  const quarterStartMonth = Math.floor(currentMonth / 3) * 3;
  const quarterStartDate = new Date(now.getFullYear(), quarterStartMonth, 1);
  const quarterEndMonth = quarterStartMonth + 3;
  const quarterEndDate = new Date(
    now.getFullYear(),
    quarterEndMonth,
    0,
    23,
    59,
    59,
    999
  );

  const elapsed = Number(now) - Number(quarterStartDate);
  const total = Number(quarterEndDate) - Number(quarterStartDate);

  return elapsed / total;
}

/**
 * 计算已过月份数
 * @returns {number} 已过月份数
 */
export function calculateElapsedMonths() {
  const now = new Date();
  return now.getMonth() + 1;
}
