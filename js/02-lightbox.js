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
            />
          </a>
        </li>`;
    })
    .join("");
}

const onElementClick = (e) => {
    e.preventDefault();
    let gallery = new SimpleLightbox(".gallery a");
    gallery.on("show.simplelightbox", function () {
    });

    gallery.on("error.simplelightbox", function (e) {
      console.log(e);
    });
};

gallery.addEventListener("click", onElementClick);



