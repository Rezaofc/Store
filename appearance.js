module.exports = async (basenewkirbotz, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dtext = args.join(" ")
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const groupMetadata = isGroup? await basenewkirbotz.groupMetadata(m.chat).catch(e => {}) : ""
const participants = isGroup? await groupMetadata.participants : ""
const groupAdmins = isGroup? await participants.filter(v => v.admin !== null).map(v => v.id) : ""
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false
const botNumber = basenewkirbotz.user.id.split(':')[0]
const sender = m.key.fromMe ? (basenewkirbotz.user.id.split(':')[0]+'@s.whatsapp.net' || basenewkirbotz.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)

// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return basenewkirbotz.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `${randomcolor}`), color(`FROM`, `${randomcolor}`), color(`${pushname}`, `${randomcolor}`), color(`Text :`, `${randomcolor}`), color(`${body}`, `white`))
}

// Database
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./all/database/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await basenewkirbotz.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await basenewkirbotz.getName(i + '@s.whatsapp.net')}\n
FN:${await basenewkirbotz.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await basenewkirbotz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
const fkethmb = await reSize(ppuser, 300, 300)

// Function Reply
const reply = (teks) => { 
basenewkirbotz.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "REZA OFFICIAL`", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "https://www.youtube.com/@MrReza18", 
"sourceUrl": "https://www.youtube.com/@MrReza18" }}}, { quoted: m }) }

switch (command) {
case "m": {
const text12 = `Hai Kak @${sender.split("@")[0]}

  FITUR OWNER
*⥁*${prefix}addprem
*⥁*${prefix}delprem
*⥁*${prefix}hidetag
*⥁*${prefix}tagall
*⥁*${prefix}join

 STORE REZAOFFC
*⥁*${prefix}sewabot
*⥁*${prefix}buypremium
*⥁*${prefix}produklain
*⥁*${prefix}payment
*⥁*${prefix}proses
*⥁*${prefix}done

 STORE JB REZAOFC
*⥁*${prefix}feerekber
*⥁*${prefix}formatpost
*⥁*${prefix}formatneed
*⥁*${prefix}payment
*⥁*${prefix}proses
*⥁*${prefix}done

 FITUR PUSHKONTAK
*⥁*${prefix}jpm *teks*
*⥁*${prefix}jpm2 *teks*
*⥁*${prefix}idgc
*⥁*${prefix}listidgc
*⥁*${prefix}cekidgc
*⥁*${prefix}listgroup
*⥁*${prefix}ceknamagc
*⥁*${prefix}infogc
*⥁*${prefix}pushkontakid
*⥁*${prefix}pushkontakgc
*⥁*${prefix}pushkontakidjd
*⥁*${prefix}pushkontakgcjd
*⥁*${prefix}savecontactid
*⥁*${prefix}savecontactgc
*⥁*${prefix}savekontak
*⥁*${prefix}sendkontak

 FITUR STIKER
*⥁*${prefix}qc
*⥁*${prefix}tts
*⥁*${prefix}sticker

 FITUR JADIBOT
*⥁*${prefix}jadibot
*⥁*${prefix}stopjadibot
*⥁*${prefix}listjadibo${prefix}

 FITUR INFO
*⥁*${prefix}owner
*⥁*${prefix}yt

YouTube *RezaOffc ✆*
https://youtube.com/@MrReza18`
basenewkirbotz.sendMessage(from, { image: { url: `https://telegra.ph/file/ae4a2871360662e0e75af.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "sewabot": {
const text12 = `SEWA EZABOT

➠ NOMER BOT wa.me/6281515696780

*SEWA BOT*
7 hari || Rp: 5.000 ✓
1 bulan || Rp: 10.000 ✓
2 bulan || Rp: 15.000 ✓

*Apa Keuntungan Sewa bot?*
Bot Masuk Ke Grup Kamu ✓
Bisa main game ✓
Ada Anti Link ✓
Add / Kick Pakai Bot ✓
Dan Masih Banyak Lagi`
basenewkirbotz.sendMessage(from, { image: { url: `https://www.dd.ci/file/ca3089c0ab84e043df447.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "buypremium": {
const text12 = ` Buy premium
*PREMIUM:*
5 hari || Rp: 5.000 ✓
20 hari || Rp: 10.000 ✓
35 hari || Rp: 15.000 ✓

*Apa Keuntungan Premium?*
Limit Unlimited ✓
Akses Semua Fitur ✓
Unlock Fitur 18+ & Nsfw
Dan Masih Banyak lagi...`
basenewkirbotz.sendMessage(from, { image: { url: `https://www.dd.ci/file/2196d0701ff332b37a304.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "produklain": {
const text12 = `• *Jasa buat web ulang tahun*
 _Rp:1.000_

• *Jasa Jadi bot*
_7H Rp:10.000_
_30H Rp:20.000_
PAKAI SC DARI GW

• *Jasa Run Bot*
_7H Rp:5.000_
_30H Rp:15.000_
PAKAI SC DARI LU`
basenewkirbotz.sendMessage(from, { image: { url: `https://www.dd.ci/file/ca3089c0ab84e043df447.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case 'payment':{
const owned = `${global.ownerNumber}@s.whatsapp.net`
let rsm = `*-------「 PAYMENT 」 -------*

DANA : ${nodana}
GOPAY : ${nogopay}

*KETIK .proses AGAR PESANAN ANDA LANGSUNG*
*KAMI PROSES*`
basenewkirbotz.sendMessage(from, { image: { url: `https://telegra.ph/file/ae4a2871360662e0e75af.jpg` }, caption: `${rsm}` }, { quoted: m })
}
        break
break
case "tts": case "gtts":{
if (!q) return reply(` contoh : ${prefix+command} yamate kudasai`)
reply(mess.wait)
const gtts = require("./all/gtts")(`id`, q)
var bby = args.join(' ')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
basenewkirbotz.sendMessage(from, { audio: buff, mimetype: "audio/mp4", ptt: false },{ quoted: m })
fs.unlinkSync(rano)
})
})
}
break
case "sticker": 
case "s": {
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await basenewkirbotz.sendStimg(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await basenewkirbotz.sendStvid(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case "qc": {
if (!quoted){
const getname = await basenewkirbotz.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
basenewkirbotz.sendStimg(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
basenewkirbotz.sendStimg(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break
case "owner": {
const repf = await basenewkirbotz.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
basenewkirbotz.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Ini Owner Ku Kak Kalo Mau sewa bot/buy premium Ke Dia Aja`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "public": {
if (!isOwner) return reply(mess.only.owner)
basenewkirbotz.public = true
reply(mess.success)
}
break
case "self": {
 return reply(mess.only.owner)
basenewkirbotz.public = false
reply(mess.success)
}
break
case "yt": {
const text12 = `Nih Link Yt Ku Kak

https://youtube.com/@MrReza18`
reply(text12)
}
break
case 'done':
case 'don':{
const tek = `               「 *TRANSAKSI BERHASIL* 」

*TERiMA KASIH SUDAH ORDER DI* *${namastore}*
*NEXT ORDERNYA DI TUNGGU YAH KAK🙏*`
reply(tek)
}
       break
case 'proses':{
m.reply('*SIAP PESANAN ANDA AKAN KAMI PROSES JADI DI MOHON UNTUK MENUNGGU SEBENTAR YAH BANG*')
basenewkirbotz.sendMessage(owner + "@s.whatsapp.net", { text: "BANG REZA ADA YANG MESEN NIH CEPETAN PROSES NANTI BUYER NGAMOK", contextInfo:{ forwardingScore: 9999, isForwarded: true }})
}
break
case "formatneed": {
const text12 = `*FORMAT JASA NEED AKUN BY ${namastore}*
*( BUKAN AKUN ADMIN )*

NAMA PEMILIK : 
AKUN :
LOGIN :
HARGA : 
SPEK AKUN :  
  
*#TIDAK MENERIMA KIRKON*

📝𝐍𝐎𝐓𝐄 : 
*WAJIB MENGGUNAKAN JASA ADMIN ${namastore} UNTUK MENGHINDARI PENIPUAN*

*PERINGATAN ⚠️*
*MOHON NAMA PEMILIK AKUNNYA HARUS DI ISI DENGAN BENAR AGAR SELLER GAMPANG DI CARI*`
basenewkirbotz.sendMessage(from, { image: { url: `https://www.dd.ci/file/ca3089c0ab84e043df447.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "formatpost": {
const text12 = `🥀FORMAT JASPOST BY ${namastore}🥀
(BUKAN AKUN MILIK ADMIN)
                   
JUAL AKUN :
SPEK :
HARGA:
NOMER : wa.me/


NOTE‼️: WAJIB MENGGUNAKAN JASA ADMIN ${namastore} AGAR TERHINDAR DARI PENIPUAN


🥀BEE SMART BUYER🥀`
basenewkirbotz.sendMessage(from, { image: { url: `https://www.dd.ci/file/ca3089c0ab84e043df447.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "feerekber": {
const text12 = `FEE BER² ${namastore}
•0 - 20K ≠ 5K
•21K - 150K ≠ 10K
•151K - 200K ≠ 15K
•201K - 324K ≠ 20K
•325K - 400K ≠ 25K
•401K - 500K ≠ 30K
•501K - 599K ≠ 35K
•600K - 699K ≠ 40K
•700K - 799K ≠ 45K
•800K - 1JT ≠ 50K
•1,1JT - 1,7JT ≠ 70K
•1,8JT - 2,5JT ≠ 100K
•BTBER ≠ 50K 
•TTBEB ≠ 50K`
basenewkirbotz.sendMessage(from, { image: { url: `https://www.dd.ci/file/ca3089c0ab84e043df447.jpg` }, caption: text12, fileLength: 10, contextInfo: { mentionedJid:[sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
}
break
case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6289606790112`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await basenewkirbotz.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp Yah Kontol!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
}
break
case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6289606790112`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break
case "jadibot":{
if (!isOwner) return reply(mess.only.owner)
if (m.isGroup) return
jadibot(basenewkirbotz, sender)
}
break
case "listjadibot":{
if (!isOwner) return reply(mess.only.owner)
if (m.isGroup) return
listjadibot(basenewkirbotz, m)
}
break
case "stopjadibot":{
if (!isOwner) return reply(mess.only.owner)
if (m.isGroup) return
stopjadibot(basenewkirbotz, sender)
}
break
case "listidgc": {
if (!isOwner) return reply(mess.only.owner)
let getGroups = await basenewkirbotz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `ID GRUP\n\n`
for (let x of anu) {
let metadata2 = await basenewkirbotz.groupMetadata(x)
teks += `${metadata2.id}\n`
}
reply(teks + `\nUntuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case "ceknamagc": {
if (!isOwner) return reply(mess.only.owner)
let getGroups = await basenewkirbotz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP BY REZA*\n\n`
for (let x of anu) {
let metadata2 = await basenewkirbotz.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ Member : ${metadata2.participants.length}\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case "cekidgc": {
if (!isPremium && !isOwner) return reply(mess.only.premium)
let getGroups = await basenewkirbotz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP BY REZA*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await basenewkirbotz.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break

case "listgroup":{
if (!isOwner) return (`Ngapain ? Khusus RezaOffc Aja !!`)
let getGroups = await basenewkirbotz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST GROUP BY REZA*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await basenewkirbotz.groupMetadata(x)
teks += `❏ Group Ke ${hituet+=1}\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu ID Group Nya Di Atas`)
}
break
case "jpm": case "jpm2":{
if (!isOwner) return reply(`Khusus Bang Reza`)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wait Tuan Ku✅_")
let getGroups = await basenewkirbotz.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await basenewkirbotz.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await basenewkirbotz.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await basenewkirbotz.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await basenewkirbotz.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL BANG Rezz✅*")
}
break
case "pushkontakid":{
if (!isOwner) return reply(`Khusus Bang Reza`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(mess.wait)
const groupMetadataa = !isGroup? await basenewkirbotz.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await basenewkirbotz.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await basenewkirbotz.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(3000)
} else {
await basenewkirbotz.sendMessage(mem, { text: global.tekspushkon })
await sleep(3000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:thomz[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await basenewkirbotz.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakgc":{
if (!isOwner) return reply(`Khusus Bang Reza`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
reply(mess.wait)
const groupMetadata = isGroup? await basenewkirbotz.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = text
if (isContacts) return
for (let men of halsss) {
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await basenewkirbotz.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await basenewkirbotz.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv2 })
await sleep(3000)
} else {
await basenewkirbotz.sendMessage(men, { text: global.tekspushkonv2 })
await sleep(3000)
}
}
reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:thomz[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await basenewkirbotz.sendMessage(sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "pushkontakidjd":
if (!isOwner) return reply(`Khusus Bang Reza`)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
await reply("Laksanakan Bang Reza")
const groupMetadataa = !isGroup? await basenewkirbotz.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await basenewkirbotz.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await basenewkirbotz.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await basenewkirbotz.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Succes Bang Rezz!")
break
case "pushkontakgcjd":
if (!isOwner) return reply(`Khusus Bang Thomz`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
await reply("Laksanakan Bang Reza")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await basenewkirbotz.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await basenewkirbotz.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await basenewkirbotz.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Succes Bang Rezz!")
break
case "savecontactgc": {
if (!isOwner) return reply(`Khusus Bang Reza`)
if (!isGroup) return reply(mess.only.group)
if (!text) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadata = isGroup? await basenewkirbotz.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
reply("Sukses File Sudah Di Kirim Lewat Chat Private")
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:thomz[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await basenewkirbotz.sendMessage(sender, { document: fs.readFileSync("./data/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case 'infogc': case 'getkontak':
if (!isOwner) return reply(`Khusus Bang Reza`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
huhuhs = await basenewkirbotz.sendMessage(m.chat, {
    text: `GRUP: *${groupMetadata.subject}*\nID :* ${groupMetadata.id}\nMEMBER: *${participants.length}\n\n${groupMetadata.desc}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
reply
break
case 'idgc': case 'getkontak':
if (!isOwner) return reply(`Khusus Bang Reza`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
huhuhs = await basenewkirbotz.sendMessage(m.chat, {
    text: `*ID :* ${groupMetadata.id}\n\nJangan Lupa Di Salin Idnya Yah Bang Reza*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); mengirim kontak seluruh member
reply
break
case 'savekontak': case 'svkontak':
if (!isOwner) return reply(`Khusus Reza Aja`)
if (!isGroup) return m.reply(`Khusus Group Kontol`)
let cmiggc = await basenewkirbotz.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
basenewkirbotz.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
break
case 'sendkontak': case 'kontak':
if (!isOwner) return reply(`Khusus Bang Reza`)
if (!isGroup) return m.reply(`Khusus Group`)
if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
let snTak = dtext.split(' ')[1] ? dtext.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
basenewkirbotz.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
break
case "savecontactid": {
if (!isOwner) return reply(`Khusus Bang Reza`)
if (isGroup) return reply(mess.only.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !isGroup? await basenewkirbotz.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await basenewkirbotz.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
}
}
break
case "hidetag": {
if (!isGroup) return reply(mess.only.group)
if (!isAdmins && !isOwner) return reply(mess.only.admin)
if (!text) return reply("Teks Nya Mana Kak?")
global.txhtg = text
basenewkirbotz.sendMessage(from, { text : global.txhtg , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
break
case "tagall": {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isOwner) return reply(`Maaf Fitur Ini Hanya Bisa Digunakan Oleh Admin Group`)
if (!q) return reply(`Teks nya mana mek ?`)
let teks = `${q ? q : ''}\nRzaOffc Tagall\n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
basenewkirbotz.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
default:
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
basenewkirbotz.sendMessage("6289606790112@s.whatsapp.net", {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})