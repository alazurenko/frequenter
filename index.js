const bar = document.querySelector('.progress');


// Approximate version; TODO: refactor
const DAYS_IN_YEAR = 365;
const p = DAYS_IN_YEAR / 100;
const date = new Date();
const month = date.getMonth() + 1;
const daysInMonth = date.getDate();
const passedDays = 31 * (month - 1) + daysInMonth;
const progress = passedDays / p;
// 


bar.style.setProperty("--progress", `${progress}%`);