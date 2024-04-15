// Print a table of query string (GET) values. This can be helpful, especially when trying to read the values from a long or complicated URL that may otherwise need to be pasted into another editor to read
// TODO: need to test
(function () {
  var url = location;
  var querystring = location.search.slice(1);
  var tab = querystring.split("&").map(function (qs) {
    return {
      Key: qs.split("=")[0],
      Value: qs.split("=")[1],
      "Pretty Value": decodeURIComponent(qs.split("=")[1]).replace(/ /g, ""),
    };
  });

  console.group("Querystring Values");
  console.log("URL: " + url + "\nQS:  " + querystring);
  console.table(tab);
  console.groupEnd("Querystring Values");
})();
