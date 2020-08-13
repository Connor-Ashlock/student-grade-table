class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('TBODY');
    tbody.innerHTML = '';
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
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
      var row = document.createElement('TR');
      var stuName = document.createElement('TD');
      var stuCourse = document.createElement('TD');
      var stuGrade = document.createElement('TD');
      var opsTd = document.createElement('TD');
      var opsBtn = document.createElement('BUTTON');
      stuName.textContent = data.name;
      stuCourse.textContent = data.course;
      stuGrade.textContent = data.grade;
      stuName.classList = 'border-right-black';
      stuCourse.classList = 'border-right-black';
      stuGrade.classList = 'border-right-black';
      opsBtn.classList = 'btn btn-danger';
      opsBtn.textContent = 'Delete';
      opsBtn.addEventListener('click', data.id);

      opsTd.appendChild(opsBtn);
      row.append(stuName, stuCourse, stuGrade, opsTd);
      return row;
  }
}
