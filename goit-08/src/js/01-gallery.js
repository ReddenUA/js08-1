
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';


const galaryContainer = document.querySelector('.gallery');

const galaryMarkup = createGalaryMarkup(galleryItems);

galaryContainer.insertAdjacentHTML('beforeend', galaryMarkup);

function createGalaryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
            `;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});