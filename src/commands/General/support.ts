import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
                `*📮𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗚𝗿𝗼𝘂𝗽 𝗟𝗶𝗻𝗸𝘀*
「ֆAƤƤꫝɨ℟E: RE🈲」:\n\nhttps://chat.whatsapp.com/DBkC5mV10TkCQUhc753kyb\n\n「𝗦𝗮𝗽𝗽𝗵𝗶𝗿𝗲: 𝗖𝗮𝘀𝗶𝗻𝗼💰」:\n\nhttps://chat.whatsapp.com/BAHvPJ05TNo4yvgc8wyJ1r\n\n 「𝗦𝗮𝗽𝗽𝗵𝗶𝗿𝗲: 𝙌𝙪𝙞𝙯📑」:\n\nhttps://chat.whatsapp.com/EtPNYEtYSqwJTsL5vshDlH`,
           MessageType.text
        ))
        const n = [
            './assets/images/asuna-yuuki.png,./assets/images/yuuki-asuna.jpeg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Regarding this, I have sent you a personal message in your DM📪\n` }
        )

        }
}
