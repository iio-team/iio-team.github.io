// @ts-nocheck
import gallery from '$lib/json-data/gallery.json';

export async function load({params}) {
    let year = params.year;
    let imageNames = gallery[`${year}`];

    return {imageNames, year};
};