/**
 * 国际化翻译支持
 */

export const translations = {
  zh: {
    // 通用
    "app.title": "年度进度追踪器",
    "app.description": "看看今年已经过去了多少时间",
    "app.footer": "每一刻都值得珍惜，把握当下，创造美好回忆",

    // 主页
    "home.yearProgress": "当前年份进度",
    "home.currentDate": "当前日期",
    "home.elapsedDays": "已过天数",
    "home.remainingDays": "剩余天数",
    "home.quarters": "季度进度",
    "home.q1": "第一季度",
    "home.q2": "第二季度",
    "home.q3": "第三季度",
    "home.q4": "第四季度",

    // 进度条
    "progress.start": "0%",
    "progress.middle": "50%",
    "progress.end": "100%",
    "progress.elapsed": "已过天数：",
    "progress.current": "当前日期：",

    // 主题
    "theme.toggle": "切换深色模式",
    "lang.toggle": "EN",
  },
  en: {
    // Common
    "app.title": "Year Progress Tracker",
    "app.description": "See how much of the year has passed",
    "app.footer":
      "Every moment is precious, seize the day and create beautiful memories",

    // Home page
    "home.yearProgress": "Current Year Progress",
    "home.currentDate": "Current Date",
    "home.elapsedDays": "Days Passed",
    "home.remainingDays": "Days Left",
    "home.quarters": "Quarter Progress",
    "home.q1": "Q1",
    "home.q2": "Q2",
    "home.q3": "Q3",
    "home.q4": "Q4",

    // Progress bar
    "progress.start": "0%",
    "progress.middle": "50%",
    "progress.end": "100%",
    "progress.elapsed": "Days passed:",
    "progress.current": "Current date:",

    // Theme
    "theme.toggle": "Toggle Dark Mode",
    "lang.toggle": "中文",
  },
};

/**
 * 获取默认语言
 * @returns {string} 默认语言代码
 */
export function getDefaultLang() {
  return "zh";
}

/**
 * 获取翻译文本
 * @param {string} key 翻译键
 * @param {string} lang 语言代码
 * @returns {string} 翻译后的文本
 */
export function t(key, lang = "zh") {
  // 安全地访问翻译词典
  const translationSet = translations[lang] || translations["zh"];
  return translationSet[key] || key;
}

/**
 * 格式化日期为本地字符串
 * @param {Date} date 日期对象
 * @param {string} lang 语言代码
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date, lang = "zh") {
  const locale = lang === "zh" ? "zh-CN" : "en-US";
  return date.toLocaleDateString(locale, {
    month: "long",
    day: "numeric",
  });
}

// 服务器端渲染时的替代函数
export function getCurrentLang() {
  return getDefaultLang();
}

export function initTranslations() {
  // SSR 时为空函数
}

export function setupLanguageListener() {
  // SSR 时为空函数
}
