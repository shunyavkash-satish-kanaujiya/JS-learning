let parent = document.querySelector(".parent");
let child = document.querySelector(".child");
let otherbox = document.getElementById("another-box");

let observer = new MutationObserver((data) => {
  console.log(data);
});
observer.observe(parent, {
  childList: true,
  subtree: true,
  characterData: true,
});
let removeFirst = () => {
  parent.children[0].remove();
};
let removeInnerChild = () => {
  otherbox.children[0].remove();
};
let changeTextContent = () => {
  parent.children[0].textContent = "write your own";
};
