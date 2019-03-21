let incognito;
let url;

function settingChanged() {
  const type = this.id;
  const setting = this.value;
  const pattern = /^file:/.test(url) ? url : url.replace(/\/[^\/]*?$/, '/*');
  console.log(type + ' setting for ' + pattern + ': ' + setting);
  chrome.contentSettings[type].set({
    'primaryPattern': pattern,
    'setting': setting,
    'scope': (incognito ? 'incognito_session_only' : 'regular')
  });
}

document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const current = tabs[0];
    incognito = current.incognito;
    url = current.url;
    const types = ['cookies', 'images', 'javascript', 'location', 'plugins',
      'popups', 'notifications', 'microphone', 'camera',
      'unsandboxedPlugins', 'automaticDownloads'];
    types.forEach(function (type) {
      chrome.contentSettings[type] && chrome.contentSettings[type].get({
        'primaryUrl': url,
        'incognito': incognito
      },
        function (details) {
          document.getElementById(type).disabled = false;
          document.getElementById(type).value = details.setting;
        });
    });
  });

  const selects = document.querySelectorAll('select');
  for (let i = 0; i < selects.length; i++) {
    selects[i].addEventListener('change', settingChanged);
  }
});

