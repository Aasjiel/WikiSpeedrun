var started = false;
var start;
var end;
var delta;
var endValue;

document.getElementById('startBtn').addEventListener('click', function(){timer();getLinks()});

function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = chrome.tabs.query(queryOptions);
  console.log(tab);
  return tab;
}

function timer() {
  let text = document.getElementById('startBtn').firstChild;
  text.data = text.data == "Stop" ? "Start" : "Stop";
  if(started){
    end = Date.now();
    console.log("End: " + end)
    delta = (Math.floor(end - start) / 1000);
    console.log("Delta: " + delta);
    started = false;
    return delta;
  } else if (!started) {
    start = Date.now();
    console.log("Start: " + start);
    started = true;
  }
}

function getLinks(){
  if(document.getElementById("end").value != null){
    endValue = document.getElementById("end").value;
    console.log("EndValue: " + endValue);
  }else{
    console.log("Error: Endlink is null")
  }
}
