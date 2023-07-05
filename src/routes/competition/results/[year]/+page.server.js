// @ts-nocheck
export async function load({ params }) {
    const year = params.year;

    const jsonData = await import(`../../../../lib/competition/${year}/results.json`);
    
    const rows = jsonData.default;
    const headers = Object.keys(rows[0]);
    const tasks = headers.slice(4, -1);

    return { headers, rows, tasks};
};