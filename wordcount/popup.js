chrome.runtime.onMessage.addListener(acceptMessage)
console.log("hello")

function acceptMessage(message, sender, x) {
    console.log(message.txt)
    div = document.querySelector(".second");
    div.innerText = message.txt;
}