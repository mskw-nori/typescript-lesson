var hasValue = true; //falseのどちらかを持てる
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var thing = true; //右の値から型を推論している
//let hello 型を定義してないときanyの場合は型注釈を使う
var person = {
    name: 'Jack',
    age: 21
};
var fruits = ['apple', 'banana', 'grape'];
var fruit = fruits[0];
//fruits.push(2) string にnumberは入れられないようになっている
var book = ['business', 1500, false];
//上記タプル型で配列の中身を指定できる
console.log(person);
var coffeeSize;
(function (coffeeSize) {
    coffeeSize["short"] = "short";
    coffeeSize["tall"] = "tall";
    coffeeSize["grande"] = "grande";
    coffeeSize["venti"] = "venti";
})(coffeeSize || (coffeeSize = {}));
var coffee = {
    hot: true,
    size: coffeeSize.tall
};
