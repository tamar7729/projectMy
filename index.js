
import  puppeteer  from 'puppeteer';
import puppeteerCore from 'puppeteer-core';
import { start } from 'repl';


const puppeteer = require('puppeteer')

(async function start(){
   
    const browser = await puppeteer.launch({
        headless:false
});
    const page = await browser.newPage()
    await page.setViewport({
       width: 1200,
        height:800
    });
  
    await page.goto('http://contractorsinsurancereview.com/ExampleForm/')
    const navigationPromise = page.waitForNavigation()
    
    await navigationPromise
    await page.waitForSelector('input[type="text"]')
    await page.type('input[type="text"]', process.env.fullName)
    
    await page.waitForSelector('input[type="email"]')
    await page.type('input[type="email"]', process.env.aaaaa_aaaa)

    await page.waitForSelector('input[id="phone"]', process.env,{delay:1234567878})
    await page.type('input[id="phone"]', process.env,{ delay: 1234567878 })

    await page.waitForSelector('input[id="company"]')
    await page.type('input[id="company"]', process.env.Company_Name)
    await page.waitForTimeout(5000)
    await page.screenshot({path: 'screenshot.png'})
    await page.click('#primary button')
    await navigationPromise

    console.log('See screenshot:' +screenshot)
    await browser.close()
    
    
})
start()