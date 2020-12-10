const puppeteer = require("puppeteer");
const readlineSync = require('readline-sync');

console.log("Hunting page start");

async function huntHref() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  //const url = `https://sites.google.com/view/fim-de-ano-refrigerador-e-aqui/in%C3%ADcio?fbclid=IwAR2ikoMbsxFfgLSQ3fh8qAHrZJ0YUuBYXAbtox9CULuDKvK50nmTn0mbYzo`;
  const inputUrl = readlineSync.question('URL: ');    
  await page.goto(inputUrl);

  const getAllURLs = await page.evaluate(() => {
    const urls = [];
    let i = 0;
    document.querySelectorAll("[href]").forEach((item) => {
      urls.push(item.href);
    });
    return urls;
  });

  console.log(getAllURLs)
  await browser.close();
}

huntHref();
