
(function () {
  $(document).ready(function () {
    $(function() {
      setInterval(update, 21000);
    });
    function update() {
      window.open("./home.html","_self");
    }
  });
})();

