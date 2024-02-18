const puppeteer = require("puppeteer");

console.log("connected");

async function start() {
  console.log("Start");
  // Get current time and date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();

  // format the full date string
  const formattedDate =
    year + "-" + month + "-" + day + "-" + hour + "-" + minute + "-" + second;

  // Acess browser and take a screenshot
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://learnwebcode.github.io/practice-requests/");
  await page.screenshot({ path: `${formattedDate}.png` });
  await page.goto("https://en.wikipedia.org/wiki/JavaScript");
  await page.screenshot({ path: `${formattedDate}-wiki.png`, fullPage: true });
  await browser.close();
}

start();
console.log("End");
