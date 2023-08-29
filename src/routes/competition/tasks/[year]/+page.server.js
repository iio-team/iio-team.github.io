// @ts-nocheck
import tasks_json from '$lib/json-data/tasks.json';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const year = params.year;

    if(!tasks_json[`${year}`]) {
        throw error(404, "Not Found");
    }

    let contest_tasks = tasks_json[`${year}`].contest_tasks;
    let practice_tasks = tasks_json[`${year}`].practice_tasks;

    return { contest_tasks, practice_tasks, year }
};