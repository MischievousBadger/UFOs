// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
	// First, clear out any existing data
	tbody.html("");

	// Next, loop through each object in the data
	// and append a row and cells for each value in the row
	data.forEach((dataRow) => {
		// Append a row to the table body
		let row = tbody.append("tr");

		// Loop through each field in the dataRow and add
		// each value as a table cell (td)
		Object.values(dataRow).forEach((val) => {
			let cell = row.append("td");
			cell.text(val);
		});
	});
}
// save element, value, id of filter changed and loop through filters, 
// keep data that matches filter values
function filterTable() {
	// get a list of filters
	let filters = document.getElementsByClassName("filter");
	// filter the data
	let data = tableData; 
	// loop through the filters
	for (let i = 0; i < filters.length; i++){
		// get filter value
		let currentFilter = filters[i]; 
		let val = currentFilter.value; 
		// what condition we are filtering on
		let property = currentFilter.id; 
		// check that there is a value
		if (val) {
			data = data.filter(row => row[property] === val);
		}
	} 
	buildTable(data);
}

// 2. Attach an event to listen for changes to each filter
d3.selectAll(".filter").on("change", filterTable);

// Build the table when the page loads
buildTable(tableData);
