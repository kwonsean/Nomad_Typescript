export {};

// JS에서는 public private 신경 안씀
// private인 경우 클래스 외부에서 접근 불가능
class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
// constructor 메서드는 class가 시작할때마다 실행됨

const KSH = new Human("KSH", 10, "male");

const sayHi = (person: Human): void => {
  console.log("HI!", person.name);
};

sayHi(KSH);
