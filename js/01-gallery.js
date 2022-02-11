import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBoxRef = document.querySelector(".gallery");
galleryBoxRef.innerHTML = galleryImg(galleryItems);
galleryBoxRef.addEventListener("click", onModalOpen);
let modalInstance;

function galleryImg(items) {
    return items
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
        })
        .join("");
}

function onModalOpen(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }
    event.preventDefault();
    modalInstance = basicLightbox.create(
        `<img width="1400" height="900" 
    src="${event.target.dataset.source}">`, {
            onShow: (modalInstance) => {
                addListener();
            },
            onClose: (modalInstance) => {
                removeListener();
            },
        }
    );
    modalInstance.show();
}

function onEscClick(event) {
    if (event.code === "Escape") {
        modalInstance.close();
    }
}

function addListener() {
    window.addEventListener("keydown", onEscClick);
}

function removeListener() {
    window.removeEventListener("keydown", onEscClick);
}
console.log(galleryItems)