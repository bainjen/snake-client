
const IP = '135.23.222.131';
const PORT = 50542;

module.exports = {
  IP,
  PORT
};

//future developments to move over constants
// Perhaps the player's name/initials. That said, one could argue that this should be provided as a command line argument instead
// The movement keys (W, A, S, D) could be added to constants like like MOVE_UP_KEY, etc.
// What about our key mappings for messages, as well?
// Every time a user presses the key 'x', it displays the message 'y'
// This seems like a mapping that's perfect for an object ({ x: "y" })
// Instead of using if statements to implement this, we can define an object (as a constant) which defines these message mappings. Our logic would change to simply lookup the appropriate mapping in the object, and if found, send the value as the message string
