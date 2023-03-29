
function isPalindrome(word) {
  // Write your algorithm here

  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - i -1]){
      return false;
    }
}
return true;

}

/* 
  Add your pseudocode here

  isPalindrome should take a word as a paremeter.
  the word should be lowercased to prevent false.
  the word should be looped over to check for the palindromity.
*/

/*
  Add written explanation of your solution here
  
  the for loop iterates across all letters comparing if the last letter is equal to the first, and the second is equal to the second last as the string is greater than 0.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log (isPalindrome("aba"))
  console.log(isPalindrome('madam'))

  console.log("Expecting: true")
  console.log("=>", isPalindrome("anna"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
