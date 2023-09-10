
# iio-team.github.io

This is the official website of the International Informatics Olympiad in Teams.


## Run Locally

Clone the project:
```bash
  git clone https://github.com/iio-team/iio-team.github.io
```

Install dependencies:
```bash
  cd iio-team.github.io
```
```bash
  npm install
```

Run the project locally:

```bash
  npm run dev
```


## Deployment

To deploy on github pages, run:

```
  npm run deploy
```


## Update Tasks

The data for the tasks pages is stored in the `tasks.json` file in the `src/lib/json-data` folder. For the correct json structure, see the data of the previous years.

Each task object has 5 variables:

| Variable | Description |
| -        |        -    |
| `id`     | The short name of the task |
| `name`   | The full name of the task |
| `statement` | Link to the statement pdf file (Google Drive) |
| `solutions` | Link to the solution(s) file/folder (Google Drive) |
| `testcases` | Link to the testcases folder (Google Drive) |


## Update Results

The data for the results pages is stored in the `results.json` file in the `src/lib/json-data` folder.

Create the results table in Excel, you can find an example file [here](static/excel/results.xlsx) with the correct format. 

If you want to display the awarded medals, create a column named `Award`. There are three available values in this column: `gold`, `silver` and `bronze`. If the team didn't get any award, leave the corresponding cell empty.

After that, use an [Excel to JSON converter](https://tableconvert.com/excel-to-json) to convert it into an **Array of Object*** format. 

*(On the linked site, choose the *Array of Object* option for the JSON format.)

(You can also check the data of the previous years in the `results.json` file for the required final JSON format.)


## Update Countries

The data for the countries page is stored in the `countries.json` file in the `src/lib/json-data` folder.

For creating a new country, just use one of the existing countries in the `countries.json` file as a template.

Each country has a `.svg` flag file, which is stored in the `static/images/flags` folder. For new countries, please create or download an `.svg` file of the countries flag and place it in there. [Wikimedia: SVG flags of countries](https://commons.wikimedia.org/wiki/Category:SVG_flags_by_country)

> The name of the `.svg` file is **required** to match the `name` parameter of the country in the `countries.json` file.


## Update Gallery

Creating a new  gallery is really simple. Just create a new folder in the `static/images/gallery` folder and put the pictures inside this new folder. The name of the folder should be the year of the gallery (for example: `2024`).


## Update Editions

To update the Editions (Archive) page, navigate to the `src/routes/editions/+page.svelte` file and create a new `<AccordionItem>` component where the others are.

Write the location of the competition or etc. inside the `<p slot="title">` element.

The parameters of the `<AccordionItem>` tag are:
| Parameter | Description |
| :- | :- |
| `year` |  **Required**. The year of the competition. |
| `flag` |  The name of the country's `.svg` flag. |


## Documents

The documents that are linked on the site such as the *Regulations.pdf* etc. are in the `static/documents` folder, replace them there if needed.


## Authors

| Github | Email |
| :- | :- |
| [@TkcsHnr](https://www.github.com/TkcsHnr) | [tkcshnr@gmail.com](mailto:tkcshnr@gmail.com) |
| [@niklaci](https://www.github.com/niklaci) | [laszlo.nikhazy@gmail.com](mailto:laszlo.nikhazy@gmail.com) |


## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| IIOT logo turquoise | ![#6dc1c3](https://via.placeholder.com/10/6dc1c3?text=+) #6dc1c3 |
| IIOT logo purple | ![#f8f8f8](https://via.placeholder.com/10/595bb4?text=+) #595bb4 |
| IIOT logo grey | ![#00b48a](https://via.placeholder.com/10/a3a3a3?text=+) #a3a3a3 |

