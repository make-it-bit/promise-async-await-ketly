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

function create_post(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

create_post(
  { title: "The third post!", body: "This is the third post!" },
  get_posts
);
