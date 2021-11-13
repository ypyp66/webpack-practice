export function func1() {
  console.log("func1");
}
export function func2() {
  console.log("func2");
}

module.exports = { func1, func2 };
//commonJS에선 module exports, require 를 사용
