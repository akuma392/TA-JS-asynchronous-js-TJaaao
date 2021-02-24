// const userNames = ['getify', 'pirahana', 'gaearon', 'dshaw', 'jdunck'];

// const usernamePromises = Promise.all(
//   userNames.map((user) => {
//     return fetch(`https://api.github.com/users/${user}`)
//       .then((res) => res.json())
//       .then((value) => console.log(value.followers));
//   })
// );

// let promise1 = fetch(`https://random.dog/woof.json`).then((res) => res.json());
// let promise2 = fetch(`https://aws.random.cat/meow`).then((res) => res.json());

// let promise3 = Promise.race([promise1, promise2, hello]);

// const one = new Promise((resolve, reject) =>
//   setTimeout(() => resolve('Arya'), 1000)
// );
// const two = new Promise((resolve, reject) =>
//   setTimeout(() => reject(new Error('Whoops!')), 2000)
// );
// const three = new Promise((resolve, reject) =>
//   setTimeout(() => resolve('John'), 3000)
// );

// let promise = Promise.allSettled([one, two, three])
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

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
