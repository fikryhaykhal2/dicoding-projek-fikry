const txtElement = ['Informatic engineering student', 'Junior Web Developer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function tik() {
  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector('.efek-tik').textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  document.querySelector('.efek-tik').style.transform = `scale(${1 + Math.random()})`;

  setTimeout(tik, 100);
})();
