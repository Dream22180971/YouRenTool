<div align="center">

# YouRen

**A local-first password manager that keeps your secrets on your own computer.**

[English](./README.md) | [简体中文](./README.zh-CN.md)

[![Product Site](https://img.shields.io/badge/PRODUCT-youren.seanwalter.top-165DFF?style=for-the-badge)](https://youren.seanwalter.top)
[![Tauri](https://img.shields.io/badge/Tauri-1.x-24C8DB?style=for-the-badge&logo=tauri&logoColor=white)](https://tauri.app)
[![Version](https://img.shields.io/badge/version-1.0.0-F59E0B?style=for-the-badge)](./package.json)
[![License](https://img.shields.io/badge/LICENSE-MIT-10B981?style=for-the-badge)](./LICENSE)

</div>

---

## 💡 Why YouRen

Some people simply do not want their password vault hosted by a third party.

YouRen takes the opposite approach:

- no account system
- no mandatory cloud
- local storage first
- portable desktop usage
- export your own data when you want

> Your passwords stay on your computer.

---

## 📦 Get it

Visit the product site:

**https://youren.seanwalter.top**

The project is designed as a desktop app. For development:

```bash
git clone https://github.com/Dream22180971/YouRenTool.git
cd YouRenTool

npm install
npm run dev
```

For the Tauri desktop shell:

```bash
npm run tauri dev
```

---

## ✨ Core Features

| Feature | Description |
|---|---|
| Password vault | add, edit, delete, search and categorize credentials |
| Password generator | generate stronger passwords |
| Screenshot parsing | paste screenshots to help fill credential fields |
| Security audit | detect weak or repeated passwords |
| CSV import / export | move or back up your data |
| Clipboard protection | clear copied passwords after a short interval |
| Auto lock | lock after inactivity |
| Themes | light / dark appearance |

---

## 🔐 Privacy Model

YouRen is intentionally local-first.

- no required registration
- no cloud sync by default
- no central password database
- no subscription dependency

For backups, use export and store the backup somewhere you trust.

---

## 🧩 Architecture

```text
Desktop Shell
Tauri 1.x
   │
   ▼
Frontend
Vite · HTML / CSS / JavaScript
   │
   ▼
Local data
Stored on the user's machine
```

---

## ⚠️ Current Limitations

- no browser extension yet
- no automatic multi-device sync
- backup is user-managed
- local-first means device security still matters

---

## 🗺 Roadmap

- [x] password CRUD
- [x] local-first storage
- [x] password generation
- [x] security audit
- [x] CSV import / export
- [x] auto lock
- [ ] browser extension
- [ ] stronger backup workflow
- [ ] optional encrypted sync
- [ ] richer credential templates

---

## 📄 License

[MIT](./LICENSE)

<div align="center">

**Convenience is useful. Control is better.**

</div>
