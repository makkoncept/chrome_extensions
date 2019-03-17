chrome.runtime.onMessage.addListener(updateBackgroundColor);

function updateBackgroundColor(message, sender, sendResponse) {
    console.log(message)
    document.body.style.background = "#" + message.color;
}