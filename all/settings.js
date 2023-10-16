require("./module")

global.owner = "6289606790112"
global.namabot = "RezaOffc"
global.autoJoin = false
global.codeInvite = "FwtMxovJqW3Jj55x524hjT"
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By RezaOffc"

global.namastore = "RezaOffc"
global.nodana = "6289606790112"
global.nogopay = "6289518919704"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})