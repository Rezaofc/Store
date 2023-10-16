require("./module.js")

const spinner = { 
"interval": 500,
"frames": [
"🅘",
"🅡",
"🅕",
"🅐",
"🅝",
"🅑", 
"🅐", 
"🅢",
"🅔"
]}

let globalSpinner;

const getGlobalSpinner = (disableSpins = false) => {
if (!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
spins.add(id, {text: text})
}

const info = (id, text) => {
spins.update(id, {text: text})
}

const success = (id, text) => {
spins.succeed(id, {text: text})
}

const close = (id, text) => {
spins.fail(id, {text: text})
}

const reSize = (buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}

const createSerial = (size) => {
        return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

function getRandom(ext) {
    ext = ext || ""
    return `${Math.floor(Math.random() * 100000)}.${ext}`
}

global.start = start
global.info = info
global.success = success
global.close = close
global.reSize = reSize
global.createSerial = createSerial
global.getBuffer = getBuffer
global.getRandom = getRandom

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})