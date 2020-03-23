// from data.js
var tableData = data;
var tbody = d3.select('tbody');
var btn = d3.select('button');

renderTable(tableData);
btn.on('click', handleClick);

// =======================================
function renderTable(data) {
    tbody.html('');

    data.forEach(tableRow => {
        var row = tbody.append('tr');

        Object.values(tableRow).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        });
    });
};

function handleClick() {
    var filteredData = tableData;
    var date = d3.select('input').property('value');

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    
    d3.select('input').property('value','');
    renderTable(filteredData);
};
