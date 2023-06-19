// @ts-nocheck
export async function load() {
    let galleries = [];
	for (let i = 1; i <= 9; i++) {
		galleries.push({id: i, name: "Subgallery ".concat(i.toString())});
	}
    return {galleries};
};