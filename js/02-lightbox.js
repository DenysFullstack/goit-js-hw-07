import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const renderList = (arr) =>
  arr
    .map(
      (item) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
              <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
            </a>
        </li>`
    )
    .join("");

galleryList.insertAdjacentHTML("beforeend", renderList(galleryItems));

const lightbox = new SimpleLightbox(".gallery li a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
