// Write your code in this file!

const currentUser = 'Carrie';

// const welcomeMessage = 'Welcome to Flatbook, '; -- need to add currentUser
// const welcomeMessage = currentUser; -- need welcomeMessage

// INTERPOLATION -- 
// const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// CONCATENATION --
const welcomeMessage = 'Welcome to Flatbook, ' + currentUser+'!';

// avoding repeating ourselves and use .toUpperCase()
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;