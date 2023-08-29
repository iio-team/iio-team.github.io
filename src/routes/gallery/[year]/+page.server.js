// @ts-nocheck
import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function load({ params }) {
    let year = params.year;

    const imagesDirectory = path.join(process.cwd(), `static/images/gallery/${year}`);

    if(!fs.existsSync(imagesDirectory)) {
        throw error(404, "Not Found");
    }

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