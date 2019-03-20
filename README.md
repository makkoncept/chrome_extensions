# chrome_extensions
repository dump for extensions made during learning.

## Run Locally
- Navigate to [chrome://extensions](chrome://extensions).
- Toggle developer mode and click on "Load Unpacked" button.
- Navigate to extension folder and select it.

## Debugging
For three basic components of the extension, there are different consoles.
- **Content script**: It is injected in the content page itself, therefore default page console is where you should look for errors and console messages.
- **Background script**: This script can be used for browser Actions, page Actions etc. For this navigate to the extension page [chrome://extensions](chrome://extensions) and click on _background page_ in the extension card.
- **Popup**: The html section that appears when extension icon is clicked. Right click the extension icon and select _Inspect pop-up_ to open it's console. 
