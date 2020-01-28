let num = 266219;
let res = 1;
let deg = 3;

num.toString().split('').forEach(function(el) {
  res *= el;
});

console.log('res: ', res);

res = res ** 3;

console.log(res.toString().split(''));

console.log(res.toString().substring(0, 2));

