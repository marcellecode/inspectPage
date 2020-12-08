const puppeteer = require('puppeteer');

console.log('Bem-vindo ao bot Inspect Page');


async function huntHref() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
   
    const url = `https://www.google.com/`;
    await page.goto(url);
   
    const resultado = await page.evaluate(() => {
       const dados = [];
       document.querySelectorAll('[href]').forEach(item => {
            dados.push(item.href);   
       })
       return dados 
    });

    console.log(resultado);
    await browser.close();
}

huntHref();