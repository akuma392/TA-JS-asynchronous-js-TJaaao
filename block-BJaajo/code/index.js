function asyncForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(()=>cb(arr[i]), 1000);
  }
}

console.log('one');
asyncForEach([1, 2, 3], (num) => console.log(num));
console.log('three');

console.log('First Call');
[1, 2, 3, 4, 5].forEach((num) => setTimeout(console.log(num)), 1000);
console.log('Last Call');
