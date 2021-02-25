- Create four promises that resolves after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promises that it resolved with.

```js
function resolver1(res, rej) {
  setInterval(() => res(1), 1000);
}

let promise1 = new Promise(resolver1);

function resolver2(res, rej) {
  setInterval(() => res(2), 2000);
}

let promise2 = new Promise(resolver2);
function resolver3(res, rej) {
  setInterval(() => res(3), 3000);
}

let promise3 = new Promise(resolver3);

function resolver4(res, rej) {
  setInterval(() => res(4), 4000);
}

let promise4 = new Promise(resolver4);

let allPromise = Promise.all([
  promise1,
  promise2,
  promise3,
  promise4,
]).then((value) => console.log(value));

console.log(allPromise);
```

- Create a list of 5 github usernames in an array and using `Promise.all` get access to the data of each user from github api. Log the number of followes of each users.

```js
const userNames = ['getify', 'pirahana', 'gaearon', 'dshaw', 'jdunck'];

const usernamePromises = Promise.all(
  userNames.map((user) => {
    return fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((value) => console.log(value.followers));
  })
);
```

- Use `Promise.race` to see which API resolves faster from the given list of urls. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow

```js
let promise1 = fetch(`https://random.dog/woof.json`).then((res) => res.json());
let promise2 = fetch(`https://aws.random.cat/meow`).then((res) => res.json());

let promise3 = Promise.race([promise1, promise2, hello]);
```

- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

let promise = Promise.all([one, two, three])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

let promise = Promise.allSettled([one, two, three])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
```

- What will be the output of the following code snippet? How much time will it take for the promise to resolve.

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);

// 0: "Arya"
// 1: "Sam"
// 2: {name: "John"}
```
