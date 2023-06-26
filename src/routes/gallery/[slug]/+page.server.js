// @ts-nocheck
export async function load() {
    let images = [];
	let count = 5 + Math.floor(Math.random() * 13);
	for (let i = 1; i <= count; i++) {
		images.push({id: i*count, name: "Image_".concat(i.toString())});
	}
    return {images};
};