function isPalindrome(word) {
  // Write your algorithm here
  // Compare the original word with its reversed version
  // If they are the same, return true; otherwise, return false
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  - Split the word into an array of characters
  - Reverse the array
  - Join the reversed array into a string
  - Compare the original word with the reversed word
  - If they are equal, return true; otherwise, return false
*/

/*
  Add written explanation of your solution here
  The function splits the word into an array of characters, then reverses the array using the reverse() method. Finally, it joins the reversed array back into a string. The function then compares the original word with the reversed word. If they are the same, it means the word is a palindrome, so the function returns true. Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


// Test Suite
