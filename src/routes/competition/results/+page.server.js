import {headers, rows} from '$lib/results/2023/results.json';

export async function load() {
    return { headers, rows };
};