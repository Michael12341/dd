const fs = require('fs');
const chalk = require('chalk');
/*
 * Create By Sych
 * Follow https://github.com/sychdev
 * Whatsapp : https://whatsapp.com/channel/0029Vb0v3F71yT264EejzJ3e
 */
//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\
global.own = ['6281541182115', '0']
global.owner = ['6281541182115', '6281541182115']
global.packname = 'KagaLvly'
global.author = 'ydaa'
global.owname = 'Michael'
global.botname = 'Kagal Lvly'
global.listprefix = ['+', '!', '.']
global.themeemoji = '🪀'
global.listv = ['•', '●', '■', '✿', '▲', '➩', '➢', '➣', '➤', '✦', '✧', '△', '❀', '○', '□', '♤', '♡', '◇', '♧', '々', '〆']
global.emot = ['🌱', '🌻', '🌞', '❄️', '🌿', '💫', '⭐', '🍃', '🔥', '⚡', '🫧', '🪵', '🌪️', '🍄']
global.tempatDB = 'database.json'
global.pairing_code = true
global.fake = {
	texz: `Owner: ${owname}\nBot: ${botname}`,
	trolTn: fs.readFileSync('./src/media/fk.jpg'),
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://ibb.co.com/sKkCmwN',
	thumbnail: fs.readFileSync('./src/media/sych.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/pdf'],
}
global.my = {
	yt: 'https://www.instagram.com/mic.ajaa/',
	gh: 'https://www.instagram.com/mic.ajaa/',
	gc: 'https://chat.whatsapp.com/KVr51RQArna8KD1XT13emA',
	ch: '312131@newsletter',
}
global.limit = {
	free: 999,
	premium: 999,
	vip: 'VIP'
}
global.uang = {
	free: 100000,
	premium: 1000000,
	vip: 10000000
}
global.mess = {
	key0: 'Apikey mu telah habis silahkan kunjungi\nhttps://youtube.com',
	owner: 'lu bkn owner',
	admin: 'lu bkn atmin',
	botAdmin: 'gw bkn atmin bro',
	group: 'cma buat grup aj',
	private: 'cm di prvt cht',
	prem: 'lu bkn user premium',
	wait: 'bentar duluu',
	error: 'eror bro!',
	done: 'udh lunas yh'
}
global.APIs = {
	hitori: 'https://my.hitori.pw/api',
}
global.APIKeys = {
	'https://my.hitori.pw/api': 'htrkey-awokawok',
}
//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
