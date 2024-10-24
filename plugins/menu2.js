const command = {
    command: ['menu2'],
    category: ['info']
};

command.script = async (m, { hisoka }) => {
    const commandsList = Object.values(hisoka.getCommand('all:commands'));
    let menuText = '🌟 *Menu Commands* 🌟\n\n';

    commandsList.forEach(plugin => {
        const commandNames = plugin.command.join(', ');
        const category = plugin.category.join(', ');
        menuText += `🔹 *Commands:* ${commandNames}\n`;
        menuText += `🔹 *Category:* ${category}\n\n`;
    });

    await m.reply(menuText);
};

export default command;