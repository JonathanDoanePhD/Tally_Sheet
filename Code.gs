// This code creates a sidebar for "Tally Sheet" to make notifications upon changes

// Adds "Tally Notifier" to the menu bar, includes a clickable element to open our sidebar
function onOpen() {
  var ui = SpreadsheetApp.getUi()
    .createMenu('Tally Notifier')
    .addItem('Open Tally Notifier', 'openTallyNotifier')
    .addToUi();
  openTallyNotifier();
}

// When the element "Open Tally Notifier" is clicked, our sidebar opens...
function openTallyNotifier() {
  //
  // Our sidebar appears as described by "Sidebar.html"
  var html = HtmlService.createHtmlOutputFromFile('Sidebar') 
    .setTitle("Tally Notifier");
  //
  // our sidebar opens... because of this
  SpreadsheetApp.getUi()
    .showSidebar(html);
}