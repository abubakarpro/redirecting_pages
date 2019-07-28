$(document).ready(function() {
  const current_location = window.location.href;
  var login = localStorage.getItem("flage");

  if (current_location.indexOf("main_page.html") >= 0 && login === "true") {
    window.location = "newpage.html";
    return;
  } else if (current_location.indexOf("newpage.html") >= 0 && login != "true") {
    window.location = "main_page.html";
    return;
  }

  $("#goto").click(function() {
    localStorage.setItem("flage", "true");
    window.location = "newpage.html";
  });

  $("#backto").click(function() {
    localStorage.setItem("flage", "false");
    window.location = "main_page.html";
  });
});
