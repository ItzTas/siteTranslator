import { fetchHTML } from "./src/fetchURL.js";

let siteURL = document.querySelector("#siteURL");
let errorP = document.querySelector("#errorP");

const getTranslate = async (html, lang) => {
  let response;
  try {
    response = await axios.get("/translate", {
      params: {
        html: html,
        lang: lang,
      },
    });
  } catch (error) {
    throw error;
  }
  console.log(response.data);
};

const PostFetchRequest = async (url) => {
  let response;
  try {
    response = await axios.post("http://localhost:3000/fetch", {
      url: url,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
  console.log(response.data);
}

const getFetchRequest = async () => {
  let response;
  try {
    response = await axios.get("http://localhost:3000/fetch")
  } catch (error) { 
    console.log(error);
    throw error;
  }
  return response;
}

PostFetchRequest("https://blog.boot.dev");
const test = await getFetchRequest();
console.log(test.data);

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
      errorP.style.color = "red";
      errorP.innerHTML = `${error.message}: ${siteURL.value}`;
    }
  });
});
