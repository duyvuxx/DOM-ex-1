const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listItem = $(".product");

listItem.innerHTML = `<div class="spinner-grow text-dark" role="status">
<span class="visually-hidden">Loading...</span>
</div>`;

setTimeout(() => {
  const getItems = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    html = data
      .map((val) => {
        return `<li class="product-items">
      <div class="product-items-img">
        <img src="${val.image}" alt="${val.title}" />
      </div>
      <div class="product-items-infor">
        <h3 class="name">${val.title.slice(0, 23)}</h3>
        <p class="price">${val.price}$</p>
      </div>
    </li>`;
      })
      .join("");

    listItem.style.height = "40rem";
    listItem.innerHTML = html;
  };

  getItems();
}, 1000);

const input = $("input");

input.addEventListener("input", function (e) {
  const inputValue = e.target.value;
  const h3Names = $$(".name");

  h3Names.forEach((val) => {
    if (
      !val.innerText.toLowerCase().includes(inputValue) &&
      !val.nextElementSibling.innerText.includes(inputValue)
    ) {
      val.parentElement.parentElement.classList.add("none");
    } else {
      val.parentElement.parentElement.classList.remove("none");
    }
  });
});
