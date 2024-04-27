import { fetchHTML } from "./src/fetchURL.js";

let siteURL = document.querySelector("#siteURL");
let errorP = document.querySelector("#errorP");
const getRequest = async () => {
  const response = await axios.get("/request", {
    params: {
      test: "this is a test",
    },
  });
  console.log(response.data);
};
getRequest()

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#URLform");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    console.log(`Submitted URL: ${siteURL.value}`);
    try {
      const html = await fetchHTML(siteURL.value);
      siteURL.value = "";
      errorP.style.color = "steelblue";
      errorP.innerHTML = "Feched!";
      console.log(html);
    } catch (error) {
      errorP.innerHTML = `${error.message}: ${siteURL.value}`;
    }
  });
});
