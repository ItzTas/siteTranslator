let siteURL = document.querySelector("#siteURL");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#URLform");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(`Submitted URL: ${siteURL.value}`);
  });
});
