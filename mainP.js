// Task 1: Check if a string is a palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  // Task 2: Encode a string with special characters
  function encodeString(str) {
    const encoded = [];
    for (let i = 0; i < str.length; i++) {
      encoded.push('$' + str[i]);
      encoded
    }
    return encoded.join('#');
  }
  
  // Task 3: Get the surname from a full name
  function getSurname(fullName) {
    const nameParts = fullName.split(' ');
    return nameParts[nameParts.length - 1];
  }
  
  // Task 4: Check if a string contains a substring
  function hasSubstring(str, substring) {
    return str.includes(substring);
  }
  
  // Task 5: Capitalize the first letter of a word
  function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  // Task 6: Print each letter of a word on a new line
  function printLetters(word) {
    for (let i = 0; i < word.length; i++) {
      console.log(word[i]);
    }
  }
  
  // Task 7: Count the number of words in a sentence
  function countWords(sentence) {
    const words = sentence.split(' ');
    return words.length;
  }
  
  // Task 8: Check if a word contains a vowel
  function hasVowel(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
        return 'YES';
      }
    }
    return 'NO';
  }
  
  // Task 9: Count the number of vowels and consonants in a word
  function countVowelsAndConsonants(word) {
    let vowelCount = 0;
    let consonantCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < word.length; i++) {
      const lowercaseChar = word[i].toLowerCase();
      if (vowels.includes(lowercaseChar)) {
        vowelCount++;
      } else if (lowercaseChar >= 'a' && lowercaseChar <= 'z') {
        consonantCount++;
      }
    }
    return {
      vowels: vowelCount,
      consonants: consonantCount
    };
  }
  
  // Task 10: Check if a word ends with 'ing'
  function endsWithIng(word) {
    return word.toLowerCase().endsWith('ing');
  }
  
  // Task 11: Decode an encoded string from Task 2
  function decodeString(encodedStr) {
    const decoded = [];
    const specialChars = ['$','#','@','+','&','*'];
    for (let i = 0; i < encodedStr.length; i++) {
      if (specialChars.includes(encodedStr[i])) {
        decoded.push('');
      } else {
        decoded[decoded.length - 1] += encodedStr[i];
      }
    }
    return decoded.join('');
  }
  
  // Testing the functions
  console.log(isPalindrome('level')); // true
  console.log(encodeString('hello')); // "$h#e@l+l&o*"
  console.log(getSurname('Frances Anaebo')); // "Unachukwu"
  console.log(hasSubstring('Hello, world!', 'world')); // true
  console.log(capitalizeWord('javascript')); // "Javascript"
  printLetters('gratitude');
  console.log
  