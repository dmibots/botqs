const { calculatePing } = require('../../utils')

module.exports = {
    name: 'ping',
    category: 'misc',
    desc: 'Bot response in second.',
    async exec(msg, sock) {
        await msg.reply('Hadirrr\n\n' + `*_${calculatePing(msg.messageTimestamp, Date.now())} second(s)_*`)
    }
}