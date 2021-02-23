function wait() {
  return new Promise((resol, reject) => {
    reject('failed');
  });
}

try {
  wait();
} catch (error) {
  console.log(error);
  console.log('Promise failed');
}
