// task 1: translate the story into code!

const onMyBirthday = (KayoIsSick) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!KayoIsSick) {
        resolve(1);
      } else {
        // reject(0);
        reject(new Error("I am sad!"));
      }
    }, 2000);
  });
};

console.time("Timer");

onMyBirthday(true)
  .then((result) => {
    console.timeLog("Timer");
    console.log(`I now have ${result} cakes!`);
  })
  .catch((error) => {
    console.timeLog("Timer");
    console.log(error);
  })
  .finally(() => {
    console.log("We are going to have a party!");
  });

onMyBirthday(false)
  .then((result) => {
    console.timeLog("Timer");
    console.log(`I now have ${result} cakes!`);
  })
  .catch((error) => {
    console.timeLog("Timer");
    console.log(error);
  })
  .finally(() => {
    console.log("We are going to have a party!");
  });
