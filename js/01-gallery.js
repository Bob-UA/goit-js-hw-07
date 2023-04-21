import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const markupCards = createGalleryCardsMarckup(galleryItems);
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

const onElementClick= ((event) => {
    event.preventDefault();
    const originalImg = event.target.attributes[2].nodeValue;
    const isImageEl = event.target.classList.contains("gallery__image");
    
    if (!isImageEl) {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${originalImg}" width="800" height="600">
`);
    
    instance.show();

    const handleClick = (event) => {
      console.log("asdasd");
      if (event.code === "Escape") {
          instance.close();
          document.removeEventListener("keydown", handleClick);
      }
    };
    
    document.addEventListener("keydown", handleClick);
})



gallery.addEventListener("click", onElementClick);

