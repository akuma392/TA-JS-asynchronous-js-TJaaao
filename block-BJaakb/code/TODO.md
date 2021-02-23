1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

```js
function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 5000);
  });
}

let time = wait().then(() => console.log('Promise done'));
```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
function wait() {
  return new Promise((resol, reject) => {
    reject('failed');
  });
}

let time = wait().catch((error) => console.log(error));
```

3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log messgae `Promise Settled!`.

```js
function wait() {
  return new Promise((resol, reject) => {
    reject('failed');
  });
}

let time = wait()
  .catch((error) => console.log(error))
  .finally(() => console.log('promise settled'));
```

4. What will be the output of the code below.

```js
console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0);

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D');

//A
//D
//C
//B
```

5. This challenge we'll chain promises together using `.then` Create two variables: `firstPromise` and `secondPromise`.

Set `secondPromise` to be a promise that resolves to "Second!". Set `firstPromise` to be a promise that resolves to `secondPromise`. Call the firstPromise with a `.then`, which will return the secondPromise promise. Then print the contents of the promise after it has been resolved by passing `console.log` to `.then

```js
var firstPromise, secondPromise;

secondPromise = Promise.resolve('second');

firstPromise = Promise.resolve(secondPromise);

firstPromise.then((value) => console.log(value));
```

6. Write a funtion named `wait` that accepts `time` in ms and executes the function after the given time.

```js
function wait(time) {
  setTimeout(() => console.log(`${time} seconds`), time);
}

wait(2000);
```
