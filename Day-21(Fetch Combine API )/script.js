const postApi = () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    if (!res.ok) {
      throw new Error("Post Api Failed!");
    }
    return res.json();
  });

const commentApi = () =>
  fetch("https://jsonplaceholder.typicode.com/comments").then((res) => {
    if (!res.ok) {
      throw new Error("Comment Api Failed!");
    }
    return res.json();
  });

let combine = async () => {
  try {
    const [post, comment] = await Promise.all([postApi(), commentApi()]);
    return {
      post: post[0],
      comment: comment[0],
    };
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

combine()
  .then(console.log)
  .catch(console.error);
