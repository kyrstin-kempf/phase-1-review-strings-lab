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

// .slice() method is more flexible -- .slice(letter, end of output)
// let user = 'Matthew'
// user.slice(3) => "thew"
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;