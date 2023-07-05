import competitions from '$lib/json/competitions.json';

export async function load() {
    const years = Object.keys(competitions);
    years.sort().reverse();

    return { years, competitions };
};