//════════════════════════════//

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6283851929130'] //masukin no owner nya
global.ownername = "Margareta"
global.ytname = "Gk ada deck!" //ur yt chanel name
global.socialm = "Apa liatt-liat?" //ur github or insta name
global.location = "Indonesia, Jatim, Jombang" //ur location

//bot bombdy
global.botname = "RettXD" //ur bot name
global.websitex = "https://github.com/arygamz" //ur website
global.vidmenu = { url: 'https://k.top4top.io/m_2368l5agg1.mp4' } //gif and video menu
global.packname = "punya MARGARETA"
global.author = "⁉️" 
global.themeemoji = "🗿"
global.reactmoji = "🤖"
global.ownertag = ['6283851929130','6283851929130'] //ur owner tag
global.ownernummenu = ['6283851929130','6283851929130'] //ur owner number in menu and all
global.watermark = "RettXD" //ur watermark
global.botscript = "Hayoo cari apa deck??"
global.linkz1 = "https://chat.whatsapp.com/HxhFecGJ3nz512zMrSFcZ8"
global.linkz2 = "https://chat.whatsapp.com/GK1tGYSVYaK4lc73z52F9p"

//Bot theme media
global.thum = fs.readFileSync("./Galery/theme/DNP77picture.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Galery/theme/DNP77picture.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Galery/theme/DNP77picture.jpg") //ur error pic
global.thumb = fs.readFileSync("./Galery/theme/DNP77picture.jpg") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "KaysaS"
global.sessionName = "sessionnya"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Done!',
    admin: 'Luu tuh bukan admin deck!',
    botAdmin: 'Bot bukan admin!',
    owner: 'Luu bukan owner deck!',
    group: 'Fitur untuk grup!',
    private: 'Fitur untuk chat pribadi!',
    bot: 'Lu bukan bot kn?',
    wait: 'Tunggu deck...',
    linkm: 'Mana linknya deck?',
    error: 'Error!',
    ban: 'Kesiann diband owner, makanya jan aneh aneh deck!',
    nsfw: 'Tobat deck!',
    banChat: 'Bot diband digrup ini oleh owner!'
}
global.limitawal = {
    premium: "Infinity",
    free: 5,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 5
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
