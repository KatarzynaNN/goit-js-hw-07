import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const markup = galleryItems
	.map(
		(item) =>
			`<li class="gallery__item"><a class="gallery__link" href=${item.original}><img class="gallery__image" src=${item.preview} data-source=${item.original} alt=${item.description}/></a></li>`
	)
	.join("");

galleryList.innerHTML = markup;

// z dokumentacji lightbox
const content = document.createElement("div");
const img = document.createElement("img");
content.append(img);
const instance = basicLightbox.create(content);

galleryList.addEventListener("click", (event) => {
	event.preventDefault();
	//tylko kliknięcie w img
	if (event.target.nodeName !== "IMG") {
		return;
	}

	img.src = event.target.dataset.source;

	// z dokumentacji lightbox
	instance.show();
});

// zamknięcie okna przyciskiem esc
document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		instance.close();
	}
});
