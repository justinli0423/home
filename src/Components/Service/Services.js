import moment from 'moment';

// put all wanted commands here
// current:
// - cls/clear (clears screen)
// - npm help (list all commands)
// - npm start git
// - npm start linkedin
// - npm start resume
// - npm show languages (show languages)
// - npm show tools (shows tools)
// - npm show projects (shows projects)

// WIP:

// future:
// - exit/logout/logoff (closes 'program')
// - windows run logoff  (logs user off -> will show login screen)

export default {
  commandValidator(command) {
    return new Promise((resolve, reject) => {
      if (command === 'cls' || command === 'clear') {
        return resolve('clear');
      }
      if (command === 'npm help') {
        return resolve('help');
      }
      if (command === 'npm start git') {
        return resolve('git');
      }
      if (command === 'npm start linkedin') {
        return resolve('linkedin');
      }
      if (command === 'npm start resume') {
        return resolve('resume');
      }
      if (command === 'npm show languages') {
        return resolve('languages');
      }
      if (command === 'npm show tools') {
        return resolve('tools');
      }
      if (command === 'npm show projects') {
        return resolve('projects');
      }
      return reject(new Error('invalid Command'));
    });
  },

  getCurrentTime() {
    const currentTime = moment();
    return {
      time: currentTime.format('HH:mm A'),
      date: currentTime.format('YYYY-MM-DD'),
      loginTime: currentTime.format('HH:mm'),
      loginDate: currentTime.format('ddd, D MMM'),
    };
  },
};
