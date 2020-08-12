class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('TBODY');
    tbody.innerHtml = '';
    for (var i = 0; i < grades.length; i++) {
      var row = document.createElement('TR');
      var stuName = document.createElement('TD');
      var stuCourse = document.createElement('TD');
      var stuGrade = document.createElement('TD');
      stuName.textContent = grades[i].name;
      stuCourse.textContent = grades[i].course;
      stuGrade.textContent = grades[i].grade;
      stuName.classList = 'border-right-black';
      stuCourse.classList = 'border-right-black';

      row.append(stuName, stuCourse, stuGrade);
      tbody.appendChild(row);
    }
    console.log(grades);
  }
}
