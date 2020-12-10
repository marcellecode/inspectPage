const terminalImage = require('terminal-image');

const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

console.log("Print Terminal start");

async function report() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const inputUrl = readlineSync.question("URL: ");

  await page.goto(inputUrl);
//   await page.screenshot({ path: "img/teste.png" });

//   console.log(await terminalImage.file("img/teste.png"));
  await browser.close();
}

report();