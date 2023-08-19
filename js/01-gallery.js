import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const renderList = (arr) =>
  arr
    .map(
      (item) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
         <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
         />
        </a>
        </li>`
    )
    .join("");

galleryList.insertAdjacentHTML("beforeend", renderList(galleryItems));

galleryList.addEventListener("click", handleListClick);

function handleListClick(evt) {
  evt.preventDefault();

  if (evt.currentTarget === evt.target) {
    return;
  }
  const imgEl = evt.target.alt;
  const imgUrl = galleryItems.find((item) => item.description === imgEl);

  const modalListance = basicLightbox.create(`
    <li class="gallery__item">
        <img class="gallery__image" src="${imgUrl.original}" alt="${imgUrl.description}"/>
        </li>
    `);
  modalListance.show();

  document.addEventListener("keydown", onEscClose);

  function onEscClose(e) {
    if (e.code === "Escape") {
      modalListance.close();
      document.removeEventListener("keydown", onEscClose);
    }
  }
}
