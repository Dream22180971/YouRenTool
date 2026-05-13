const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
const browser = await chromium.launch();
const page = await browser.newPage();

// 使用在线转换工具
await page.goto('https://convertio.co/png-ico/');
await page.waitForTimeout(2000);

// 上传文件
const inputPng = path.join(__dirname, 'src-tauri', 'icons', '128x128.png');
await page.setInputFiles('input[type="file"]', inputPng);
await page.waitForTimeout(1000);

// 点击转换按钮
await page.click('button:has-text("Convert")');
await page.waitForTimeout(5000);

// 下载文件
const download = await page.waitForEvent('download');
const outputIco = path.join(__dirname, 'src-tauri', 'icons', 'icon.ico');
await download.saveAs(outputIco);

console.log('✅ icon.ico 已生成');
await browser.close();
})().catch(console.error);
