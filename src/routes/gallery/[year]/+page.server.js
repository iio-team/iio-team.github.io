// @ts-nocheck
import gallery from '$lib/competition-data/gallery.json';

// @ts-nocheck
export async function load({params}) {
    let year = params.year;
    let imageNames = gallery[`${year}`];

    return {imageNames, year};
};