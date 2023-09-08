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

galleryList.insertAdjacentHTML("beforeend", markup);
let instance;

const onClose = (event) => {
	if (event.key === "Escape") {
		instance.close();
		document.removeEventListener("keydown", onClose);
	}
};

const onShow = (event) => {
	event.preventDefault();
	//tylko kliknięcie w img
	if (event.target.nodeName !== "IMG") {
		return;
	}
	// z dokumentacji lightbox
	const content = document.createElement("div");
	const img = document.createElement("img");
	img.src = event.target.dataset.source;
	content.append(img);
	instance = basicLightbox.create(content);
	instance.show();
	document.addEventListener("keydown", onClose);
};

galleryList.addEventListener("click", onShow);
