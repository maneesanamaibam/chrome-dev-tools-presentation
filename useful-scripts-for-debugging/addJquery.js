// Includes jQuery onto a page if it is not yet included.

(function () {
  if (!window.jQuery) {
    var dollarInUse = !!window.$;
    var s = document.createElement("script");
    s.setAttribute(
      "src",
      "//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"
    );
    s.addEventListener("load", function () {
      console.log("jQuery loaded!");

      if (dollarInUse) {
        jQuery.noConflict();
        console.log("`$` already in use; use `jQuery`");
      }
    });

    document.body.appendChild(s);
  }
})();
