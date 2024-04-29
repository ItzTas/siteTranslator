import { fetchHTML } from "./src/fetchURL.js";

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
  return response;
};

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#URLform");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    errorP.innerHTML = "";
    try {
      let mainFooter = document.querySelector(".mainFooter");
      let siteURL = document.querySelector("#siteURL");
      let errorP = document.querySelector("#errorP");
      let lang = document.querySelector("#lang");
      const html = await fetchHTML(siteURL.value);
      siteURL.value = "";
      errorP.style.color = "steelblue";
      errorP.innerHTML = "Please wait a minute";
      let translated = await getTranslate(html, lang.value);
      displayResult(translated);
      errorP.innerHTML = "";
      mainFooter.style.position = "static";
    } catch (error) {
      errorP.style.color = "red";
      errorP.innerHTML = `${error.message}: ${siteURL.value}`;
    }
  });
});

function displaytranslatedtitle(translated) {
  let title = document.querySelector("#resultsOftrs h5");
  title.innerHTML = `The translated title tag is: \n ${translated.data.title[0][2].replace(/\n/g, "").trim()}`;
}

function displaytransP(translated) {
  if (!translated.data.p) {
    return;
  }
  let ptrs = document.querySelector("#pTrs");
  let numP = translated.data.p[translated.data.p.length - 1];
  let ptresh4 = document.querySelector("#pTrs h4");
  ptresh4.innerHTML = `The number of paragraphs translated is: ${numP}`;
  let listOfp = translated.data.p.slice(0, -1);
  for (let pList of listOfp) {
    ptrs.innerHTML += `<li><p>Normal ${pList[0]}: ${pList[1].replace(/\r?\n/g, "").trim()}</p><p>Translated ${pList[0]}: ${pList[2].replace(/\r?\n/g, "").trim()}</p></li>`;
  }
}

function displaytransLi(translated) {
  if (!translated.data.li) {
    return;
  }
  let litrs = document.querySelector("#liTrs");
  let numLi = translated.data.li[translated.data.li.length - 1];
  let liresh4 = document.querySelector("#liTrs h4");
  liresh4.innerHTML = `The number of list items translated is: ${numLi}`;
  let listOfli = translated.data.li.slice(0, -1);
  for (let liList of listOfli) {
    litrs.innerHTML += `<li><p>Normal ${liList[0]}: ${liList[1].replace(/\r?\n/g, "").trim()}</p><p>Translated ${liList[0]}: ${liList[2].replace(/\r?\n/g, "").trim()}</p></li>`;
  }
}

function displaytransTd(translated) {
  if (!translated.data.td) {
    return;
  }
  let tdtrs = document.querySelector("#tdTrs");
  let numTd = translated.data.td[translated.data.td.length - 1];
  let tdresh4 = document.querySelector("#tdTrs h4");
  tdresh4.innerHTML = `The number of table data translated is: ${numTd}`;
  let listOftd = translated.data.td.slice(0, -1);
  for (let tdList of listOftd) {
    tdtrs.innerHTML += `<li><p>Normal ${tdList[0]}: ${tdList[1].replace(/\r?\n/g, "").trim()}</p><p>Translated ${tdList[0]}: ${tdList[2].replace(/\r?\n/g, "").trim()}</p></li>`;
  }
}

function displayResult(translate) {
  let finishedTest = document.querySelector("#resultsOftrs h3");
  finishedTest.innerHTML = "The page was successfully translated!";
  displaytranslatedtitle(translate);
  displaytransP(translate);
  displaytransLi(translate);
  displaytransTd(translate);
}
