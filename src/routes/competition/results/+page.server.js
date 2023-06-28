import {headers, rows} from '$lib/json/results.json';

export async function load() {
    return { headers, rows };
};