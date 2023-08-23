// @ts-nocheck
import fs from 'fs';
import path from 'path';

export async function load() {
	const directory = path.join(process.cwd(), `static/images/gallery`);
	const folders = fs.readdirSync(directory);

	let galleries = [];

	folders.forEach(folder => {
		const imagesDirectory = path.join(process.cwd(), `static/images/gallery/${folder}`);
		let files = fs.readdirSync(imagesDirectory);
		files = files.filter(name => name != "webp");

		const image = files[0].replaceAll(' ', '%20'); // filenames with spaces cause some problems;
		galleries.push({
			year: folder,
			coverFile: image,
			coverName: image.slice(0, image.lastIndexOf(".")),
			title: folder
		})
	})
	galleries = galleries.sort().reverse();


	return { galleries };
};