class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades);
    var sum = 0;
    var students = 0;
    for (var i = 0; i < grades.length; i++) {
      sum += grades[i].grade;
      students++;
    }
    var avg = Math.round(sum / students);
    this.pageHeader.updateAverage(avg);
  }
  getGrades(){
    $.ajax({
      headers: {"x-access-Token": "wvaSxfcL"},
      url: "https://sgt.lfzprototypes.com/api/grades",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    });
  }
  start(){
    this.getGrades();
  }
}
