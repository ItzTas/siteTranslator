#!/usr/bin/env node
const { fetchHTML } = require("./fetchPage");
const express = require("express");
const session = require("express-session");
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  session({
    secret: "simplesecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  }),
);

app.post("/fetch", async (req, res) => {
  try {
    req.session.url = req.body.url;
    req.session.html = await main(req.session.url);
    res.send(`HTML stored from the url: ${req.body.url}`);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.get("/fetch", (req, res) => {
  try {
    if (req.session.url && req.session.html) {
      res.send(req.session.html);
    } else {
      res.status(404).send("No HTML found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

async function main(url) {
  return await fetchHTML(url);
}
