// function wait() {
//   return new Promise((resol, reject) => {
//     reject(' promise failed');
//   });
// }

// let time = wait()
//   .catch((error) => console.log(error))
//   .finally(() => console.log('promise settled'));

var firstPromise, secondPromise;

secondPromise = Promise.resolve('second');

firstPromise = Promise.resolve(secondPromise);

firstPromise.then((value) => console.log(value));
