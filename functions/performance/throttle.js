export default function throttle (func, delay = 100) {

  if (typeof func !== "function") return;

  let flag = true;
  
  return function (...args) {
  
    if (flag) {
      func(...args);
      flag = false;
      setTimeout(() => flag = true, delay);
    }
  }
}