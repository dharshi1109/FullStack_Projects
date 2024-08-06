const inputString = "aaaaaabbbbbbcccccaa";
const regex = /aa+/;
const replacedString = inputString.replace(regex, 'b');
console.log(replacedString);
