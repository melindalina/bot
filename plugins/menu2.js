const command = {
    command: ['menu2'],
    category: ['main']
};

command.script = async (m, { hisoka }) => {
    const commands = hisoka.getCommand;

    let text = `Halo Dek @${m.sender.split`@`[0]}, Ini Menu:\n\n`;

    for (const [fileName, plugin] of commands['all:commands']) {
        if (plugin.command && plugin.category) {
            text += `*${plugin.category[0]}*\n`;
            text += `└─ ${plugin.command.join(', ')}\n\n`;
        }
    }

    await m.reply(text, { mentions: [m.sender] });
};

export default command;
