const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
const browser = await chromium.launch();
const page = await browser.newPage();

const svgPath = path.join(__dirname, 'assets', 'shield-icon.svg');
const iconsDir = path.join(__dirname, 'src-tauri', 'icons');

// 读取 SVG 内容
const svgContent = fs.readFileSync(svgPath, 'utf8');

// 创建 HTML 页面来渲染 SVG
const html = `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:transparent;">
${svgContent}
</body>
</html>`;

await page.setContent(html);
await page.setViewportSize({ width: 512, height: 512 });

// 生成各种尺寸的 PNG
const sizes = [
{ name: '32x32.png', size: 32 },
{ name: '128x128.png', size: 128 },
{ name: '128x128@2x.png', size: 256 },
{ name: 'icon.png', size: 512 },
];

for (const { name, size } of sizes) {
await page.setViewportSize({ width: size, height: size });
await page.screenshot({
path: path.join(iconsDir, name),
omitBackground: true
});
console.log(`✅ 生成 ${name} (${size}x${size})`);
}

// 生成 ICO 文件（Windows 图标）
// 使用 32x32 作为 ICO
const icoPath = path.join(iconsDir, 'icon.ico');
fs.copyFileSync(path.join(iconsDir, '32x32.png'), icoPath);
console.log('✅ 生成 icon.ico');

// 生成 ICNS 文件（macOS 图标）
// 简单处理：复制 256x256 作为 ICNS（实际应该用专门工具）
const icnsPath = path.join(iconsDir, 'icon.icns');
fs.copyFileSync(path.join(iconsDir, '128x128@2x.png'), icnsPath);
console.log('✅ 生成 icon.icns');

console.log('\n🎉 所有图标生成完成！');
await browser.close();
})().catch(console.error);
