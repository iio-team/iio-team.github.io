// @ts-nocheck
import fs from 'fs';
import path from 'path';

export async function load({ params }) {
    let year = params.year;

    const imagesDirectory = path.join(process.cwd(), `static/images/gallery/${year}`);
    let files = fs.readdirSync(imagesDirectory);

    files = files.filter(name => name != "webp");

    const images = [];
    let name = '';
    files.forEach(file => {
        name = file.slice(0, file.lastIndexOf('.'));
        images.push(    
            {
                file: file,
                name: name,
                webp: name.replaceAll(' ', '%20') + '.webp'
            }
        );
    })

    return { year, images };
};