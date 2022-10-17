// Ambil Aja Gak Papa

let anonymous = {}

function createRoom(a, b) {
    let room = Object.values(anonymous).find(p => p.check(a))
    if (!!room) return !1
    let id = Date.now()
    anonymous[id] = {
        id: id,
        a: a,
        b: b,
        state: "CHATTING",
        check: function(p) {
            return [this.a, this.b].includes(p)
        },
        other: function(p) {
            return p == this.a ? this.b : p == this.b ? this.a : ""
        }
    }
    return Object.values(anonymous).find(p => p.check(a))
}

function leaveRoom(ab) {
    let room = Object.values(anonymous).find(p => p.check(ab))
    if (!room) return !1
    let other = room.other(ab)
    delete anonymous[room.id]
    return other
}
handler.tags = ['premium']
handler.owner = benar
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = salah
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = penangan

module.exports = { createRoom, leaveRoom, anonymous }
