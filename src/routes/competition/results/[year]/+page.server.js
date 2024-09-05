// @ts-nocheck
import results from '$lib/json-data/results.json';
import tasks from '$lib/json-data/tasks.json';

export async function load({ params }) {
    const year = params.year;

    if(!results[`${year}`]) {
        throw error(404, "Not Found");
    }

    const rows = results[`${year}`];
    
    const hasTasks = tasks[`${year}`] ? true : false;
    
    const main_rows = rows['main'];
    let guest_rows = rows['guest'];
    
    const headers = Object.keys(main_rows[0]);

    return { headers, main_rows, guest_rows, year, hasTasks };
};