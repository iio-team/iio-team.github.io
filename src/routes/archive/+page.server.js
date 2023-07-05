import competitions from '$lib/json/competitions.json';

export async function load() {
    const years = Object.keys(competitions);
    years.sort().reverse();

    years.forEach(year => {
        if(competitions.year.tasks) competitions.year.tasks = {};
        if(competitions.year.results) competitions.year.results = {};
    });

    return { years, competitions };
};