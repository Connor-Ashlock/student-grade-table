class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    console.log(grades)
    if (grades.length) {
      this.noGradesElement.classList.add('d-none');
    } else {
      this.noGradesElement.classList.remove('d-none');
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
      opsBtn.addEventListener('click', function(){
        deleteGrade(data.id);
      });

      opsTd.appendChild(opsBtn);
      row.append(stuName, stuCourse, stuGrade, opsTd);
      tbody.appendChild(row);
  }
}
