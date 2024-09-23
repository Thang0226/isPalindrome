function isPalindrome(s) {
  let n = s.length;

  if (n <= 1) return true;

  if (s[0] === s[n - 1]) {
    let s_new = s.slice(1, n - 1);
    return isPalindrome(s_new);
  } else return false;
}

let word = prompt("Enter a word:");
if (isPalindrome(word)) alert("This is a palindrome word!");
else alert("This is NOT a palindrome word.");
