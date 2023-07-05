export async function load({ params }) {
    const year = params.year;

    const jsonData = await import(`../../../../lib/competition/${year}/tasks.json`);
    const tasks = jsonData.default;

    return { tasks }
};