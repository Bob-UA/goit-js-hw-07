import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const markupCards = createGalleryCardsMarckup(galleryItems);
gallery.insertAdjacentHTML("afterbegin", markupCards);

function createGalleryCardsMarckup(elements) {
  return elements
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
              title="${description}"

            />
          </a>
        </li>`;
    })
    .join("");
}
    let gal = new SimpleLightbox(".gallery a");
gal.on("show.simplelightbox", function () {
    
});
    gal.on("error.simplelightbox", function (e) {
      console.log(e);
    });


