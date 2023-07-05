import competitions from '$lib/json/competitions.json';


export async function load({ params }) {
    const year = params.year;

    const tasks = competitions[`${year}`].tasks;

    return { tasks }
};