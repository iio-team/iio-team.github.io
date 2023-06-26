// @ts-nocheck
export async function load() {
    let galleries = [];
	let count = 4 + Math.floor(Math.random() * 5);
	for (let i = 1; i <= count; i++) {
		galleries.push({id: i, name: "Subgallery ".concat(i.toString())});
	}
    return {galleries};
};