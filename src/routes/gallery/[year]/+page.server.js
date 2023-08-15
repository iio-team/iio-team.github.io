// @ts-nocheck
import fs from 'fs';
import path from 'path';

export async function load({params}) {
    let year = params.year;

    const imagesDirectory = path.join(process.cwd(), `static/images/gallery/${year}`);
    const imageFiles = fs.readdirSync(imagesDirectory);

    const images = [];
    imageFiles.forEach(file => {
        images.push(
            {
                url: `images/gallery/${year}/${file}`,
                name: file
            }
        );
    })

    return { year, images};
};