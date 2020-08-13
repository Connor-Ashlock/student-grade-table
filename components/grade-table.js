class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var noGradesElement = document.querySelector('.d-none');
    if (!grades) {
      noGradesElement.classList.remove('d-none');
    } else {
      noGradesElement.classList.add('d-none');
    }
    var tbody = this.tableElement.querySelector('TBODY');
    tbody.innerHTML = '';
    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
      var tbody = this.tableElement.querySelector('TBODY');
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
      tbody.appendChild(row);
  }
}
