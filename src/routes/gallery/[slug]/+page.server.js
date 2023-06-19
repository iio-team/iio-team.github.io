// @ts-nocheck
export async function load() {
    let images = [];
	for (let i = 1; i <= 12; i++) {
		images.push({id: i*12, name: "Image_".concat(i.toString())});
	}
    return {images};
};