const { chromium } = require('playwright');

(async () => {
const browser = await chromium.launch({ headless: false });
const page = await browser.newPage();

console.log('1. 测试首次使用设置密码...');
await page.goto('http://localhost:1420');
await page.waitForTimeout(2000);

// 清除本地存储以模拟首次使用
await page.evaluate(() => localStorage.clear());
await page.reload();
await page.waitForTimeout(2000);

// 检查是否显示设置密码界面
const setupForm = await page.locator('#setupPasswordForm');
if (await setupForm.isVisible()) {
console.log('✅ 显示设置密码界面');
} else {
console.log('❌ 未显示设置密码界面');
}

// 设置密码
await page.fill('#setupPassword', 'TestPass123!');
await page.fill('#confirmPassword', 'TestPass123!');
await page.click('#setupPasswordForm button:has-text("确定")');
await page.waitForTimeout(2000);

// 检查AUTH_KEY是否包含hash和salt
const authData = await page.evaluate(() => JSON.parse(localStorage.getItem('password_manager_auth')));
if (authData && authData.hash && authData.salt && !authData.password) {
console.log('✅ 密码已哈希存储（包含hash和salt，不包含明文password）');
} else {
console.log('❌ 密码存储格式错误');
}

console.log('\n2. 测试登录功能...');
// 锁定系统
await page.click('button:has-text("锁定")');
await page.waitForTimeout(1000);

// 输入错误密码
await page.fill('#unlockPassword', 'WrongPass');
await page.click('#lockModal button:has-text("解锁")');
await page.waitForTimeout(1000);

// 检查错误提示
const errorText = await page.locator('.notification-content').textContent();
if (errorText.includes('登录密码错误')) {
console.log('✅ 错误密码被拒绝');
} else {
console.log('❌ 错误密码未被正确处理');
}

// 输入正确密码
await page.fill('#unlockPassword', 'TestPass123!');
await page.click('#lockModal button:has-text("解锁")');
await page.waitForTimeout(2000);

// 检查是否解锁成功
const lockModal = await page.locator('#lockModal');
if (!(await lockModal.isVisible())) {
console.log('✅ 正确密码解锁成功');
} else {
console.log('❌ 解锁失败');
}

console.log('\n3. 测试密码数据加密存储...');
// 添加一个密码
const addPwdBtn = await page.locator('button:has-text("新建密码")');
await addPwdBtn.click();
await page.waitForTimeout(1000);

await page.fill('#modal input[placeholder*="github"]', 'test.com');
await page.fill('#modal input[placeholder*="用户名"]', 'testuser');
await page.fill('#passwordInput', 'MySecretPass123!');
await page.fill('#categoryInput', '测试分类');
await page.click('#modal button:has-text("保存")');
await page.waitForTimeout(1000);

// 检查STORAGE_KEY是否为加密格式
const storageData = await page.evaluate(() => localStorage.getItem('password_manager_data'));
const parsed = JSON.parse(storageData);
if (parsed && parsed.iv && parsed.data) {
console.log('✅ 密码数据已加密存储（包含iv和data字段）');
} else {
console.log('❌ 密码数据未加密');
}

console.log('\n4. 测试密码复制功能...');
// 点击复制按钮
const copyBtn = await page.locator('button:has-text("复制")').first();
if (await copyBtn.isVisible()) {
await copyBtn.click();
await page.waitForTimeout(1000);

// 检查通知
const notification = await page.locator('#notification');
if (await notification.isVisible()) {
const notifText = await page.locator('#notification-content').textContent();
if (notifText.includes('密码已复制到剪贴板')) {
console.log('✅ 复制功能正常');
} else {
console.log('❌ 复制功能异常');
}
} else {
console.log('❌ 未显示复制成功通知');
}
} else {
console.log('❌ 未找到复制按钮');
}

console.log('\n5. 测试密码强度指示器...');
const addPwdBtn2 = await page.locator('button:has-text("新建密码")');
await addPwdBtn2.click();
await page.waitForTimeout(1000);

// 输入弱密码
await page.fill('#passwordInput', '123');
await page.waitForTimeout(500);
let strengthText = await page.locator('#strengthText').textContent();
if (strengthText.includes('弱')) {
console.log('✅ 弱密码检测正常');
} else {
console.log('❌ 弱密码检测异常，实际内容: ' + strengthText);
}

// 输入强密码
await page.fill('#passwordInput', 'MyStr0ng!Pass#2024');
await page.waitForTimeout(500);
strengthText = await page.locator('#strengthText').textContent();
if (strengthText.includes('强')) {
console.log('✅ 强密码检测正常');
} else {
console.log('❌ 强密码检测异常，实际内容: ' + strengthText);
}

await page.click('#modal button:has-text("取消")');
await page.waitForTimeout(500);

console.log('\n6. 测试数据迁移（模拟旧版本数据）...');
// 清除数据，模拟旧版本格式
await page.evaluate(() => {
localStorage.setItem('password_manager_auth', JSON.stringify({
password: 'TestPass123!',
createdAt: new Date().toISOString()
}));
localStorage.setItem('password_manager_data', JSON.stringify([
{ id: 1, service: 'old.com', username: 'olduser', password: 'OldPass123', category: '其他', note: '', createdAt: '2024-01-01', updatedAt: '2024-01-01' }
]));
});
await page.reload();
await page.waitForTimeout(2000);

// 检查是否显示迁移对话框
const migrateModal = await page.locator('#migrateModal');
if (await migrateModal.isVisible()) {
console.log('✅ 检测到旧版本数据并显示迁移对话框');

// 输入密码执行迁移
await page.fill('#migratePassword', 'TestPass123!');
await page.click('#migrateModal button:has-text("确认升级")');
await page.waitForTimeout(2000);

// 检查迁移后的数据格式
const newAuth = await page.evaluate(() => JSON.parse(localStorage.getItem('password_manager_auth')));
const newData = await page.evaluate(() => JSON.parse(localStorage.getItem('password_manager_data')));

if (newAuth.hash && newAuth.salt && !newAuth.password) {
console.log('✅ 认证数据迁移成功（已哈希）');
} else {
console.log('❌ 认证数据迁移失败');
}

if (newData.iv && newData.data) {
console.log('✅ 密码数据迁移成功（已加密）');
} else {
console.log('❌ 密码数据迁移失败');
}
} else {
console.log('⚠️ 未显示迁移对话框（可能已经是新格式）');
}

console.log('\n🎉 所有测试完成！');

await browser.close();
})().catch(console.error);
