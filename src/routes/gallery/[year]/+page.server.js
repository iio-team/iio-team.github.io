// @ts-nocheck
import fs from 'fs';
import path from 'path';

export async function load({ params }) {
    let year = params.year;

    const imagesDirectory = path.join(process.cwd(), `static/images/gallery/${year}`);
    let files = fs.readdirSync(imagesDirectory);

    files = files.filter(name => name != "webp");

    const images = [];
    files.forEach(file => {
        file = file.replaceAll(' ', '%20'); // filenames with spaces cause some problems
        images.push(    
            {
                file: file,
                name: file.slice(0, file.lastIndexOf("."))
            }
        );
    })

    return { year, images };
};