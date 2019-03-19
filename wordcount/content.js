rawText = document.body.innerText.trim();
text = rawText.replace(/\n/g, "").replace(/[^a-zA-z]/g, " ").replace(/ +/g, " ");
words = text.split(" ");
console.log(words);
count = {};
words.forEach((word) => {
    if (!count[word])
        count[word] = 1;
    else
        count[word]++;
})
console.log(count)
// chrome.browserAction.onClicked.addListener(handleClick)
// let msg = {
//     'txt': 'hello'
// }
// chrome.tabs.send_message(msg)