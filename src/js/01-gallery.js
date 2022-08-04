// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";


const allGallery = document.querySelector(`.gallery`);

const galleryMarkUp = galleryItems
  .map(
    (picture) =>
    `<a class="gallery__item" href="${picture.original}">
      <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" />
    </a>
    `
  )
  .join(``);

allGallery.innerHTML = galleryMarkUp;



let gallery = new SimpleLightbox('.gallery a',{
    captionType: 	'attr',
    captionsData: `alt`,
    captionDelay: 250,
});
  


