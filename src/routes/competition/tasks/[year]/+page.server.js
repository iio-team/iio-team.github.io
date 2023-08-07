// @ts-nocheck
import tasks_json from '$lib/competition-data/tasks.json';
import axios from 'axios';

// Google Drive API key
const API_KEY = 'AIzaSyCHlNRwQjcCceW-2FeB7d90mPbMmLruEJE'; 

// Creating download links for all the zip files in the google drive folder
// The FOLDER_ID should be specified in the 'tasks.json' file for each year
async function zipDownloadLinks(FOLDER_ID) {
    const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}`;
    const zipMap = {};
    try {
        const response = await axios.get(apiUrl);
        const files = response.data.files;

        files.forEach(file => {
            let downloadLink = `https://drive.google.com/uc?id=${file.id}`;
            zipMap[(file.name.replace(".zip",""))] = downloadLink;
        });
    } catch (error) {
        console.error('Error listing files:', error.message);
    }
    return zipMap;
}

export async function load({ params }) {
    const year = params.year;

    const tasks = tasks_json[`${year}`].tasks;
    const FOLDER_ID = tasks_json[`${year}`].FOLDER_ID;

    let zipMap = zipDownloadLinks(FOLDER_ID);

    return { tasks, zipMap }
};