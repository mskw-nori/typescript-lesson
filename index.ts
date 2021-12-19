let hasValue: boolean = true; //falseのどちらかを持てる
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = "hello";
let double: string = "hello";
let back: string = `hello`;

let thing = true; //右の値から型を推論している

//let hello 型を定義してないときanyの場合は型注釈を使う

const person: {
  name: string;
  age: number;
} = {
  name: "joe",
  age: 21,
};

const fruits: string[] = ["apple", "banana", "grape"];
const fruit = fruits[0];
//fruits.push(2) string にnumberは入れられないようになっている

const book: [string, number, boolean] = ["business", 1500, false];
//上記タプル型で配列の中身を指定できる

console.log(person);

enum coffeeSize {
  short = "short",
  tall = "tall",
  grande = "grande",
  venti = "venti",
}

const coffee = {
  hot: true,
  size: coffeeSize.tall,
};
