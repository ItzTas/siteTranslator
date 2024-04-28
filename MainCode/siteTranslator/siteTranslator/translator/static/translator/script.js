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
getRequest();

const getTranslate = async (html, lang) => {
  const response = await axios.get("/translate", {
    params: {
      html: html,
      lang: lang,
    },
  });
  console.log(response.data);
};

const postHtml = async (html) => {
  const response = await axios.post("../script/main.js");  
};

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#URLform");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    let lang = document.querySelector("#lang");
    console.log(lang.value);
    try {
      const html = await fetchHTML(siteURL.value);
      siteURL.value = "";
      errorP.style.color = "steelblue";
      errorP.innerHTML = "Feched!";
      let translated = await getTranslate(html, lang.value);
      getTranslate(html, lang.value);
    } catch (error) {
      errorP.innerHTML = `${error.message}: ${siteURL.value}`;
    }
  });
});
