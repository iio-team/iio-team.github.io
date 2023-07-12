// @ts-nocheck
import competitions from '$lib/json/competitions.json';

export async function load({ params }) {
    const year = params.year;

    const rows = competitions[`${year}`].results;
    const headers = Object.keys(rows[0]);

    return { headers, rows };
};