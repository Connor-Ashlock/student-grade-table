var header = document.querySelector('HEADER')
var table = document.querySelector('TABLE');
var form = document.querySelector('FORM');
var gradeTable = new GradeTable(table);
var pageHeader = new PageHeader(header);
var gradeForm = new GradeForm(form);
var app = new App(gradeTable, pageHeader, gradeForm);

app.start()
