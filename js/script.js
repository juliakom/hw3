//1

let name = prompt('Your name');
for (i = 1; i < 4; i++) {
   if (i === 3) {
     console.log(`Happy birthday, dear ${name}`);
   }
   console.log (`Happy birthday to you`);
}

//2

let amount = +prompt('Enter count');
let str = ''; 
for (let i = 0; i < amount; i++) {
	str += '#.';
}
console.log(str);

//3

let num = +prompt('Enter your number',''); 
while (isNaN(num)) {
  alert('Invalid. You should enter a number');
  num = +prompt('Enter your number again',''); 
}

let sum = Number('');
for (i = 0; i < num; i++) {
  if (i % 2 == 0) {
    continue;
  }
  sum += i;
}
console.log(sum);

//4

for (i = 0; true; i++) {
  let a = Math.random();
  if (a > 0.7) {
    console.log(`Loop was finished because of: ${a}`);
    break;
  }
}
console.log(`Number of iterations: ${i}`);

//5

for (i = 1; i <= 50; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log('Div by 5 and 3');
  } else if (i % 5 == 0) {
    console.log('Div by 5');
  } else if (i % 3 == 0) {
    console.log('Div by 3');
  } else {
    console.log(i);
  }
}

//6

let date = new Date();
let day = date.getTimezoneOffset()/60;
console.log(date.toLocaleString('day'));