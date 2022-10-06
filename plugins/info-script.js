//Credits Jangan Dihapus
//Thanks For KannaChan & Papah-Chan
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://dwiqi.my.id/root/Mizu*`
let wibu = `https://api.zacros.my.id/randomimg/waifu` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://www.instagram.com/angga_ozmy?r=nametag._",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/reel/Ce_bngYBkEA/?igshid=YmMyMTA2M2Y=", 
    title: 'Yui-Chan MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['sc', 'script']
handler.tags = ['info', 'main']
handler.command =  /^(script|sc)$/i

export default handler
