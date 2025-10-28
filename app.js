let list = document.querySelector(".list");

let posts = [
  { id: 1, title: "Hello World", liked: false },
  { id: 2, title: "TypeScript is cool", liked: true },
  { id: 3, title: "Trontend Dev Life", liked: false },
];

function renderPosts(arr, parent) {
  parent.innerHTML = "";

  arr.forEach((el) => {
    let li = document.createElement("li");
    li.innerHTML = `${el.title}`;
    li.classList.add("post");

    let btn = document.createElement("button");
    btn.classList.add(el.liked ? "liked" : "unliked");
    btn.innerHTML = el.liked ? "❤️ Liked" : "🤍 Like";
    li.appendChild(btn);
    parent.appendChild(li);

    btn.addEventListener("click", () => {
      toggleLike(posts, el.id);
    });
  });
}

function toggleLike(arr, id) {
  posts = arr.map((el) => {
    return el.id === id ? { ...el, liked: !el.liked } : el;
  });
  renderPosts(posts, list);
}

renderPosts(posts, list);