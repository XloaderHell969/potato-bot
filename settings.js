const fs = require('fs')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU

global.namabot = "VelMd-V1" // UBAH JADI NAMA LU
global.namaowner = "Velin" // NAMA OWNER
global.footer_text = "© Velin" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6285171230159'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
global.packname = '© Velin' //sticker wm ubah
global.author = 'Di Buat Oleh Velin' //sticker wm ganti nama kalian
// = \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.script = ("https://www.youtube.com/@xloaderhell666") // BEBAS ASAL JAN HAPUS
global.fakelink = "https://instagram.com/masss" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://chat.whatsapp.com/fmefmemfomefm`) // GANTI LINK GRUB BOT LU \\
// - \\
// FALSE OR TRUE \\
global.autoTyping = true // BEBAS
global.welcome = true // KALO MAU AUTO WELCOME UBAH JADI true
global.left = true // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})
