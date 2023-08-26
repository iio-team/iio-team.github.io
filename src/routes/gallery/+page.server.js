// @ts-nocheck
import fs from 'fs';
import path from 'path';

export async function load() {
	const directory = path.join(process.cwd(), `static/images/gallery`);
	const folders = fs.readdirSync(directory);

	let galleries = [];

	let name = '';
	folders.forEach(folder => {
		const imagesDirectory = path.join(process.cwd(), `static/images/gallery/${folder}`);
		let file = fs.readdirSync(imagesDirectory).filter(name => name != "webp")[0];

		name = file.slice(0, file.lastIndexOf('.'));
		galleries.push({
			year: folder,
			image: {
				file,
				name,
				webp: name.replaceAll(' ', '%20') + '.webp',
			},
			title: folder
		})
	})
	galleries = galleries.sort().reverse();

	return { galleries };
};