// Logs your global variables to the console. Useful for finding leaked global variables.

(function () {
  "use strict";

  function getIframe() {
    var el = document.createElement("iframe");
    el.style.display = "none";
    document.body.appendChild(el);
    var win = el.contentWindow;
    document.body.removeChild(el);
    return win;
  }

  function detectGlobals() {
    var iframe = getIframe();
    var ret = Object.create(null);

    for (var prop in window) {
      if (!(prop in iframe)) {
        ret[prop] = window[prop];
      }
    }

    return ret;
  }

  console.log(detectGlobals());
})();
