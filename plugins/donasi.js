let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL [085926431562]
│ • Tri [08977599516]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [085926431562]
│
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
