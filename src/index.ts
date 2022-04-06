export {};
const name = "KSH";

const sayHi = (name?) => {
  console.log("HI!", name);
};

sayHi(name);
/*
sayHi();
1개의 인수가 필요한데 0개를 가져왔습니다.
 */

sayHi(); // ?를 붙이면 값을 안넣어줘도 오류가 발생하지 않음
