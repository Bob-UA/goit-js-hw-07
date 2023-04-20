import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const markupCards = createGalleryCardsMarckup(galleryItems);
console.log(markupCards);
gallery.insertAdjacentHTML("afterbegin", markupCards)

function createGalleryCardsMarckup(elements) {
    return elements.map(
        ({ preview, original, description }) => {
            return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;}).join("");
}
