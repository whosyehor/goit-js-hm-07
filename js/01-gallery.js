import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGalleryCardMarkUp(items) {
return items.map(({ preview, original, description}) => {
return`
<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
</a>
</div>`;
}).join('');
};

const cardsMarkup = createGalleryCardMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
    event.preventDefault();

    if(event.target.nodeName !== 'IMG') {
        return
    }
    const modalImg = event.target.dataset.source
    console.log(modalImg);

    const instance = basicLightbox.create(`<img src= "${modalImg}" alt="" width="800" height="600">`)
    instance.show();
};

// console.log(galleryItems);
