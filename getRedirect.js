const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

console.log("Hunting page start");

async function huntHref() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  //const url = `https://sites.google.com/view/fim-de-ano-refrigerador-e-aqui/in%C3%ADcio?fbclid=IwAR2ikoMbsxFfgLSQ3fh8qAHrZJ0YUuBYXAbtox9CULuDKvK50nmTn0mbYzo`;
  const inputUrl = readlineSync.question("URL: ");

  const response = await page.goto(inputUrl);
  const chain = response.request().url();
  console.log(chain.length); 
  console.log(chain); 

  await browser.close();
}

huntHref();
