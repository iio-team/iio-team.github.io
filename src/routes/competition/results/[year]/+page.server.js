// @ts-nocheck
import results from '$lib/json-data/results.json';
import tasks from '$lib/json-data/tasks.json';

export async function load({ params }) {
    const year = params.year;

    if(!results[`${year}`]) {
        throw error(404, "Not Found");
    }

    const rows = results[`${year}`];
    const headers = Object.keys(rows[0]);

    const hasTasks = tasks[`${year}`] ? true : false;

    return { headers, rows, year, hasTasks };
};