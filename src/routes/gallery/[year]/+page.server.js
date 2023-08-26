// @ts-nocheck
import fs from 'fs';
import path from 'path';

export async function load({ params }) {
    let year = params.year;

    const imagesDirectory = path.join(process.cwd(), `static/images/gallery/${year}`);
    let files = fs.readdirSync(imagesDirectory);

    const images = [];
    files.forEach(file => {
        images.push(    
            {
                name: file
            }
        );
    })

    return { year, images };
};