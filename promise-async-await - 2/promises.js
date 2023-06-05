const posts = [
  { title: "The first post!", body: "This is the first post!" },
  { title: "The second post!", body: "This is the second post!" },
];

function get_posts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li><ol>${post.body}</ol>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function create_post(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!");
      }
    }, 2000);
  });
}

/* PROMISE KASUTAMINE! */
create_post({ title: "The third post!", body: "This is the third post!" })
  .then(get_posts)
  .catch((error) => console.log(error));

/* ASYNC/AWAIT KASUTAMINE (eemalda callback function create_post meetodist)! */
/*async function init() {
  await create_post({
    title: "The third post!",
    body: "This is the third post!",
  });
  get_posts();
}
async function fetch_users() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}
init();
fetch_users();*/

/* PROMISE.ALL KASUTAMINE! */
/*const promise_1 = Promise.resolve("First promise!");
const promise_2 = "Second promise!";
const promise_3 = new Promise((resolve) => {
  setTimeout(resolve, 2000, "Third promise!");
});
const promise_4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json()
);
Promise.all([promise_1, promise_2, promise_3, promise_4]).then((values) =>
  console.log(values)
);*/
