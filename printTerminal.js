const terminalImage = require('terminal-image');

const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

console.log("Print Terminal start");

async function report() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const inputUrl = readlineSync.question("URL: ");

  await page.goto(inputUrl);
  await page.screenshot({ path: "img/capture.png" });

  console.log("Create archive img/capture.png");
  await browser.close();
}

report();