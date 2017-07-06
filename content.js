
document.addEventListener('DOMContentLoaded', function () {

document.getElementById('bid').addEventListener('click',function(){

var elementIDs = {
sdate: document.getElementById("date1").value,
edate: document.getElementById("date2").value
};
chrome.tabs.executeScript({
code: 'var dateElem='+JSON.stringify(elementIDs)
}, function() {
chrome.tabs.executeScript({file: "content_script.js"});
}
);
});
});





