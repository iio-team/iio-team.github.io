import competitions from '$lib/json/competitions.json';

export async function load({ params }) {
    const year = params.year;

    const rows = competitions[`${year}`].results;
    const headers = Object.keys(rows[0]);
    const tasks = headers.slice(4, -1);

    return { headers, rows, tasks};
};