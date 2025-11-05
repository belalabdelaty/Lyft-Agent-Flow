function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Ride XP Tools')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
