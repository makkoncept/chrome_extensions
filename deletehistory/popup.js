var PopupController = function () {
  this.button_ = document.getElementById('button');
  this.timeframe_ = document.getElementById('timeframe');
  this.addListeners_();
};

PopupController.prototype = {
  button_: null,

  timeframe_: null,

  addListeners_: function () {
    this.button_.addEventListener('click', this.handleClick_.bind(this));
  },

  parseMilliseconds_: function (timeframe) {
    var now = new Date().getTime();
    var milliseconds = {
      'hour': 60 * 60 * 1000,
      'day': 24 * 60 * 60 * 1000,
      'week': 7 * 24 * 60 * 60 * 1000,
      '4weeks': 4 * 7 * 24 * 60 * 60 * 1000
    };

    if (milliseconds[timeframe])
      return now - milliseconds[timeframe];

    if (timeframe === 'forever')
      return 0;

    return null;
  },

  handleCallback_: function () {
    var success = document.createElement('div');
    success.classList.add('overlay');
    success.setAttribute('role', 'alert');
    success.textContent = 'Data has been cleared.';
    document.body.appendChild(success);

    setTimeout(function () { success.classList.add('visible'); }, 10);
    setTimeout(function () {
      if (close === false)
        success.classList.remove('visible');
      else
        window.close();
    }, 4000);
  },

  handleClick_: function () {
    var removal_start = this.parseMilliseconds_(this.timeframe_.value);
    if (removal_start !== undefined) {
      this.button_.setAttribute('disabled', 'disabled');
      this.button_.innerText = 'Clearing...';
      chrome.browsingData.remove({ "since": removal_start }, {
        "appcache": true,
        "cache": true,
        "cookies": true,
        "downloads": true,
        "fileSystems": true,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "serverBoundCertificates": true,
        "pluginData": true,
        "passwords": true,
        "webSQL": true
      }, this.handleCallback_.bind(this));
    }
  }
};

document.addEventListener('DOMContentLoaded', function () {
  window.PC = new PopupController();
});
