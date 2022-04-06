export {};
const name = "KSH";

const sayHi = (name: string): void => {
  console.log("HI!", name);
};

sayHi(name);
// 인수들 뒤에 함수의 리턴 형식을 지정해줄 수 있다. (void는 아무것도 리턴 X)

/* 
sayHi(99);
'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.
*/
