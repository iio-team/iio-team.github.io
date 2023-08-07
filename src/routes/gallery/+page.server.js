// @ts-nocheck
import gallery from '$lib/competition-data/gallery.json';

export async function load() {
    let years = Object.keys(gallery);
	let galleries = [];
	years.forEach((y) => {
		galleries.push({
			year: y,
			firstImage: gallery[`${y}`][0],
			title: y
		})
	})
	galleries = galleries.sort().reverse();

	
    return {galleries};
};