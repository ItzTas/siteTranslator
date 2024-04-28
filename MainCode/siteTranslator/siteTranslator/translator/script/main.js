const { fetchHTML } = require("./fetchPage");
const { axios } = require("axios");
const { express } = require("express");
const app = express();
const port = 3000;

async function main(url) {
    return await fetchHTML(url);
}