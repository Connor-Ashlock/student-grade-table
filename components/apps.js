class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
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
    this.gradeForm.onSubmit(this.createGrade);
  }
  createGrade(name, course, grade) {
    $.ajax({
      headers: { "x-access-Token": "wvaSxfcL" },
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        name: name,
        course: course,
        grade: grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
    console.log(name, course, grade);
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess(data) {
    this.getGrades();
    console.log(data);
  }
}
