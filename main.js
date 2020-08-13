var header = document.querySelector('HEADER')
var table = document.querySelector('TABLE');
var form = document.querySelector('FORM');
var noGradesRecorded = document.getElementById('no-grades');
var gradeTable = new GradeTable(table, noGradesRecorded);
var pageHeader = new PageHeader(header);
var gradeForm = new GradeForm(form);
var app = new App(gradeTable, pageHeader, gradeForm);

app.start()
