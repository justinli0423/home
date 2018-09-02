/* eslint-disable */

// empty space
const _ = '\u00a0\u00a0';
const tab = '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0';

const Prompt = {
  startUp: `Getting devices ready${_}`,
  initializeStatement: [
    `jli0423@WEBAPP: `,
    `/mnt/c/Users/jli0423.github.io$ `,
  ],
  welcomeStatement: [
    `Welcome.`,
    `For a list of options enter "npm help".`,
  ],
  npmHelp: [
    `Usage: [npm, windows] <command>`,
    `${_} ${_} ${_} ${_} npm: where <command> is one of:`,
    `${_} ${_} ${_} ${_} help ${_} ${_} quick help guide`,
    `${_} ${_} ${_} ${_} start ${_} ${_} <git, linkedin, resume> ${_} ${_} starts <command>`,
    `${_} ${_} ${_} ${_} show ${_} ${_} <languages, tools, languages> ${_} ${_} shows <command>`,
    // `${_} ${_} windows: where <command> is one of:`,
    // `${_} ${_} ${_} ${_} run <logoff, shutdown> ${_} ${_} runs the <command> on machine`,
  ],
  incorrectInput: 'The command is not recognized. For a list of options enter "npm help"',
  npmGit: [
    `Git: ${_}`,
    `https://github.com/Jli0423`,
  ],
  npmLinkedIn: [
    `LinkedIn: ${_}`,
    `https://www.linkedin.com/in/jli0423/`,
  ],
  npmResume: [
    `Resume: ${_}`,
    `https://github.com/Jli0423/Resume/blob/master/JustinLiResume.pdf`,
  ],
  npmLanguages: [
    [
      '   _                                                         ',
      '  | |    __ _ _ __   __ _ _   _  __ _  __ _  ___  ___        ',
      '  | |   / _ `| `_ \\ / _` | | | |/ _` |/ _` |/ _ \\/ __|     ',
      '  | |__| (_| | | | | (_| | |_| | (_| | (_| |  __/\\__ \\     ',
      '  |_____\\__,_|_| |_|\\__, |\\__,_|\\__,_|\\__, |\\___||___/ ',
      '                    |___/             |___/            ',
      '========================================================',
      '1. HTML/CSS',
      '2. JavaScript',
      '3. Java',
      '4. C++',
    ], 
  ],
  npmTools: [
    [
     ' _______          _         ',
     ' |__   __|        | |       ',
     '    | | ___   ___ | |___    ',
     '    | |/ _ \\ / _ \\| / __| ',
     '    | | (_) | (_) | \\__ \\ ',
     '    |_|\\___/ \\___/|_|___/ ',
     '============================',
     '- React.js',
     '- Angular.js',
     '- Express.js',
     '- Node.js',
     '- Sass/Scss',
     '- Git',
     '- EJS',
     '- MongoDB',
     '- Heroku',
     '- Bash',
     '- jQuery',
     '- Postman',
     '- Bootstrap',
    ],
  ],
  npmProjects: [
    [
    '   _____           _           _            ',
    '  |  __ \\         (_)         | |          ',
    '  | |__) | __ ___  _  ___  ___| |_ ___      ',
    '  |  ___/ "__/ _ \\| |/ _ \\/ __| __/ __|   ',
    '  | |   | | | (_) | |  __/ (__| |_\\__ \\   ',
    '  |_|   |_|  \\___/| |\\___|\\___|\\__|___/ ',
    '                 _/ |                       ',
    '                |__/                        ',
    '=========================================   ',
    '- PlayMoji: https://github.com/Jli0423/PlayMoji',
    '- APIs for QHacks: https://github.com/Jli0423/Std-lib',
    '- Source Code: https://github.com/Jli0423/home',
    '- Old Website: https://github.com/Jli0423/Jli0423.github.io--v2',
    ],
  ],
  windowsNavbar: [
    `Do not type here to search`,
    `ENG`,
  ],
};

export default Prompt;
