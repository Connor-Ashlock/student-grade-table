class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    var avgBadge = this.headerElement.querySelector('span');
    avgBadge.textContent = newAverage;
  }
}
