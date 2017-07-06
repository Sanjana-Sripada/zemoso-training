var y=document.getElementsByClassName("_3cb8");
var k=document.getElementById("globalContainer");
var z=k.getElementsByClassName("livetimestamp");
var s="Name,LinkedIn Page,Date\n";
var strdate = dateElem.sdate.split("-");
var enddate = dateElem.edate.split("-");
sd = new Date(strdate[0], strdate[1] - 1, strdate[2]);
ed = new Date(enddate[0], enddate[1] - 1, enddate[2]);
for(i=0;i<y.length;i++){
var dt=z[i].innerHTML;
var curdate = dt.split("/");
f = new Date(curdate[2], curdate[1] - 1, curdate[0]);
if(f > sd && f < ed)
{
s=s+(y[i].text+",https://www.linkedin.com/search/results/index/?keywords="+y[i].text+"&origin=GLOBAL_SEARCH_HEADER,"+""+z[i].innerHTML);
s=s+"\n";
}
}
function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}
download('Result.csv', s);

