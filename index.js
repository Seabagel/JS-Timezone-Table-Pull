// Link: https://www.timeanddate.com/time/zones/

var listRows = document.getElementsByTagName("table")[0].rows;
var tableLength = listRows.length;
var values;

function getCollumn(collumn) {
    values = [];
    for (let i = 1; i < tableLength; i++) {
        var data = listRows[i].cells[collumn].innerText;
        values += `"${data}",\n`;
    }
}

getCollumn(Values);
