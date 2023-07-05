const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const getItems = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
};

getItems();
