import path from 'path';
import fs from 'fs';

export async function load() {
    const galleryFolder = path.join(process.cwd(), `static/images/gallery`);
    const galleries = fs.readdirSync(galleryFolder);

    return { galleries }
}
