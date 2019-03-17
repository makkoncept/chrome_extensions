let colors = ['FFFFFF', '6B717F', 'C5D86F', 'DC9F82', 'EFABC4', '52A2A3', 'A41622', '91F5AD', 'B0BBF3', 'FFD09C', 'B96C40'];
let min = 0;
let max = 10;
let current = min;


function updateIconAndBackground(tab) {
  chrome.browserAction.setIcon({ "path": "icons/" + colors[current] + ".png" });
  let msg = {
    "color": colors[current]
  }
  current++;

  chrome.tabs.sendMessage(tab.id, msg);


  if (current > max)
    current = min;
}

chrome.browserAction.onClicked.addListener(updateIconAndBackground);