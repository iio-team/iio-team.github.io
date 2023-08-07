// @ts-nocheck
import results from '$lib/json-data/results.json';

export async function load({ params }) {
    const year = params.year;

    const rows = results[`${year}`];
    const headers = Object.keys(rows[0]);

    return { headers, rows, year };
};