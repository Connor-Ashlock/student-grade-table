var header = document.querySelector('HEADER')
var table = document.querySelector('TABLE');
var gradeTable = new GradeTable(table);
var pageHeader = new PageHeader(header);
var app = new App(gradeTable);

app.start()
