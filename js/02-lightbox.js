import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const markup = galleryItems
	.map(
		(item) =>
			`<a class="gallery__item" href=${item.original}><img class="gallery__image" src=${item.preview} data-source=${item.original} alt=${item.description}/></a></li>`
	)
	.join("");

galleryList.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionPosition: "bottom",
	captionDelay: 250,
});
