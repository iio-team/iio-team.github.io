// @ts-nocheck
import fs from 'fs';
import path from 'path';

export async function load() {
	const directory = path.join(process.cwd(), `static/images/gallery`);
	const folders = fs.readdirSync(directory);

	let galleries = [];

	folders.forEach(folder => {
		const imagesDirectory = path.join(process.cwd(), `static/images/gallery/${folder}`);
		let file = fs.readdirSync(imagesDirectory)[0];

		galleries.push({
			year: folder,
			image: {
				name: file
			},
			title: folder
		})
	})
	galleries = galleries.sort().reverse();

	return { galleries };
};