/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "rules",
      description: "shows the rules for beyond",
      category: "general",
      usage: `${client.config.prefix}rules`,
      baseXp: 0,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    const buttons = [
      {
        buttonId: "faq",
        buttonText: { displayText: `${this.client.config.prefix}faq` },
        type: 1,
      },
    ];

    const buttonMessage: any = {
      contentText: `📮𝘼𝙨𝙪𝙣𝙖 𝙍𝙪𝙡𝙚𝙨\n\n 1.𝖠𝗏𝗈𝗂𝖽 𝗌𝗉𝖺𝗆𝗆𝗂𝗇𝗀/𝖼𝖺𝗅𝗅𝗂𝗇𝗀 𝗍𝗁𝖾 𝖻𝗈𝗍.(𝖠𝗎𝗍𝗈 𝖡𝗅𝗈𝖼𝗄)\n\n 2.𝖠𝗏𝗈𝗂𝖽 𝖺𝗌𝗄𝗂𝗇𝗀 𝗍𝗁𝖾 𝖻𝗈𝗍 𝖺𝗇𝗒 𝗂𝗇𝗌𝗎𝗅𝗍𝗌/𝗇𝗎𝖽𝗂𝗍𝗒 𝖼𝗈𝗇𝗍𝖾𝗇𝗍.(𝖡𝖺𝗇)\n\n 3.𝖠𝗏𝗈𝗂𝖽 𝖼𝗁𝖺𝗍𝗍𝗂𝗇𝗀 𝗍𝗁𝖾 𝖻𝗈𝗍 𝗂𝗇 𝗉𝖾𝗋𝗌𝗈𝗇𝖺𝗅 𝗆𝖾𝗌𝗌𝖺𝗀𝖾, 𝖮𝖭𝖫𝖸 𝗀𝗋𝗈𝗎𝗉 𝗅𝗂𝗇𝗄𝗌 𝖺𝗅𝗅𝗈𝗐𝖾𝖽.(𝖡𝗅𝗈𝖼𝗄)\n\n 4.𝖴𝗌𝖾 ${this.client.config.prefix}𝗌𝗎𝗉𝗉𝗈𝗋𝗍 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗍𝗈 𝗀𝖾𝗍 𝗌𝗎𝗉𝗉𝗈𝗋𝗍 𝗀𝗋𝗈𝗎𝗉 𝗅𝗂𝗇𝗄.\n\n 5.𝖲𝖾𝗇𝖽 𝗅𝗂𝗇𝗄 𝗍𝗈 𝖻𝗈𝗍'𝗌 𝖣𝖬 & 𝗂𝗍 𝗐𝗂𝗅𝗅 𝗃𝗈𝗂𝗇 𝗒𝗈𝗎𝗋 𝗀𝗋𝗈𝗎𝗉 𝗌𝗈𝗈𝗇.\n\n 6.𝖡𝗈𝗍 𝖬𝖴𝖲𝖳 𝖻𝖾 𝖺𝗇 𝖺𝖽𝗆𝗂𝗇 𝗈𝖿 𝗒𝗈𝗎𝗋 𝗀𝗋𝗈𝗎𝗉.\n\n 7.𝖡𝗈𝗍 𝗐𝗂𝗅𝗅 𝗃𝗈𝗂𝗇 𝖺 𝗀𝗋𝗈𝗎𝗉 𝗐𝗂𝗍𝗁 50+ 𝗆𝖾𝗆𝖻𝖾𝗋𝗌.\n\n 8.𝖡𝗈𝗍 𝗐𝗂𝗅𝗅 𝗇𝗈𝗍 𝗃𝗈𝗂𝗇 𝖻𝖺𝖼𝗄 𝗂𝗇 𝖺 𝗀𝗋𝗈𝗎𝗉 𝗐𝗁𝖾𝗋𝖾 𝗂𝗍 𝗐𝖺𝗌 𝗋𝖾𝗆𝗈𝗏𝖾𝖽.\n\n 9.𝖡𝗈𝗍 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝗏𝖾 𝗂𝗇𝖺𝖼𝗍𝗂𝗏𝖾 & 𝖽𝖾𝖺𝖽 𝗀𝗋𝗈𝗎𝗉𝗌.\n\n 10.𝖣𝗈𝗇'𝗍 𝖺𝖻𝗎𝗌𝖾 𝗍𝗁𝖾 𝖻𝗈𝗍 𝗈𝗋 𝗈𝗐𝗇𝖾𝗋 𝗂𝗇 𝖺𝗇𝗒 𝗐𝖺𝗒.(𝖡𝖺𝗇)\n\n 11.𝖠𝗏𝗈𝗂𝖽 𝗍𝖾𝗑𝗍𝗂𝗇𝗀 𝗍𝗁𝖾 𝗆𝗈𝖽𝗌 𝖺𝗌𝗄𝗂𝗇𝗀 𝗍𝗈 𝖻𝖾 𝖺𝖽𝖽𝖾𝖽 𝖺𝗌 𝖺 𝗆𝗈𝖽.(𝖡𝖺𝗇)\n\n 12.𝖲𝗉𝖺𝗆𝗆𝗂𝗇𝗀 𝖼𝗈𝗆𝗆𝖺𝗇𝖽𝗌 𝗂𝗇 𝖢𝖺𝗌𝗂𝗇𝗈 𝗈𝗋 𝖺𝗇𝗒 𝗀𝗋𝗈𝗎𝗉 𝗍𝗁𝖾 𝖻𝗈𝗍 𝗌𝖾𝗋𝗏𝖾𝗌, 𝗐𝗂𝗅𝗅 𝗅𝖾𝖺𝖽 𝗍𝗈 𝖺 48 𝗁𝗈𝗎𝗋𝗌 𝖻𝖺𝗇.\n\n 13.𝖣𝗈𝗇'𝗍 𝖺𝗌𝗄 𝖿𝗈𝗋 𝗍𝗁𝖾 𝖻𝗈𝗍 𝗌𝖼𝗋𝗂𝗉𝗍, 𝗐𝖾'𝗋𝖾 𝗇𝗈𝗍 𝗀𝗂𝗏𝗂𝗇𝗀/𝗌𝖾𝗅𝗅𝗂𝗇𝗀 𝗈𝗎𝗋 𝖻𝗈𝗍𝗌.\n\n 14.𝖡𝗈𝗍 𝗆𝗈𝖽𝖾𝗋𝖺𝗍𝗈𝗋𝗌 𝗐𝗂𝗅𝗅 𝖻𝖾 𝖼𝗁𝗈𝗈𝗌𝖾𝗇 𝗋𝖺𝗇𝖽𝗈𝗆𝗅𝗒 & 𝖺𝗇𝗇𝗈𝗎𝗇𝖼𝖾𝖽 𝗏𝗂𝖺 𝖻𝗋𝗈𝖺𝖽𝖼𝖺𝗌𝗍.\n\n 15.𝖳𝗁𝖾 𝗆𝗈𝗋𝖾 𝗀𝗈𝗈𝖽 𝗒𝗈𝗎 𝗐𝗂𝗅𝗅 𝖻𝖾 𝖺𝗌 𝖠𝗌𝗎𝗇𝖺 𝗎𝗌𝖾𝗋, 𝗍𝗁𝖾 𝗆𝗈𝗋𝖾 𝗋𝖾𝗐𝖺𝗋𝖽𝗌 𝗒𝗈𝗎 𝗐𝗂𝗅𝗅 𝗀𝖾𝗍.`,
      footerText: "© 𝖠𝗌𝗎𝗇𝖺 2022",
      buttons: buttons,
      headerType: 1,
    };
    await M.reply(buttonMessage, MessageType.buttonsMessage);
  };
}
