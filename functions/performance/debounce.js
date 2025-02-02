export default function debounce (func, delay = 100) {

  if (typeof func !== "function") return;

  let timer;

  return function (...args) {

    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  }
}