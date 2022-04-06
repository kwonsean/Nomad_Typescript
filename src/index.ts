export {};
// 인터페이스는 JS에는 없고 JS에도 영향을 미치지 않음
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "KSH",
  age: 90,
  gender: "male",
};

const sayHi = (person: Human): void => {
  console.log("HI!", person.name);
};

sayHi(person);
// 인수로 객체를 넘겨주고 인수로 받는 객체 속 요소들의 타입을 지정한 인터페이스를 통해 타입 체크 가능
