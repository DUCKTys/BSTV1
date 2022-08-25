var handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [081359053674]
│ • DANA [08211499086]
│ • OVO [081359053674]
│ • GOPAY [08211499086]
│ • SHOPPY PAY [08211499086]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281359053674
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
