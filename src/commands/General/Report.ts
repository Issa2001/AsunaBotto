import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings"; 

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rep',
            aliases: ['report'],
            description: 'Sends a report to the bot owner',
            category: 'general',
            usage: `${client.config.prefix}report`,
            baseXp: 10
        })
    }

    run = async (

		M: ISimplifiedMessage,		{ joined }: IParsedArgs

	): Promise<void> => {
        
             const term = joined.trim()
            await this.client.sendMessage(
               // enter your unique gid
`254115175696-1628429288@g.us`,
                `*「𝖠𝗌𝗎𝗇𝖺 𝖱𝖾𝗉𝗈𝗋𝗍」*\n\n ${term} by ${M.sender.username} \n
                   From : ${M.groupMetadata?.subject} `,
                MessageType.text
            );
            return void M.reply('🎉Successfully sent the report to bot moderators, action will be taken soon.')
        }}