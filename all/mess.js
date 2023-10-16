require("./global")

const mess = {
   wait: "Wait Kak Lagi Proses Kalo Udah Selesai Jangan Lupa Savecontact Dulu\n\nBiar Bisa Push Lagi Ya Bang Reza",
   success: "sukses✅ Bang Reza",
   on: "Sudah Aktif", 
   off: "Sudah Off",
   query: {
       text: "Teks Nya Mana Kak?",
       link: "Link Nya Mana Kak?",
   },
   error: {
       fitur: "Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki",
   },
   only: {
       group: "Fitur Nya Cuman Bisa Di Dalem Grup Yah Bang Reza",
       private: "Di Chat Pribadi Bang Reza Biar Bisa Di Pake",
       owner: "Ga Usah Pake Fitur Ini Asu Lu Bukan Bang Reza",
       admin: "Ga Usah Pake Fitur Ini Asu Lu Bukan Bang Reza",
       badmin: "Maaf Kak Kaya Nya Kakak Tidak Bisa Menggunakan Fitur Ini Di Karenakan Bot Bukan Admin Group",
       premium: "Maaf Kamu Belum Jadi User Premium Untuk Menjadi User Premium Silahkan Beli Ke Owner Dengan Cara Ketik .owner",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})