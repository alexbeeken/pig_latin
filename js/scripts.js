var pigLatin = function(phrase) {
  var word_array = phrase.split(" ");
  var output_array = [];
  word_array.forEach(function (word) {

    var letter_array = word.split("");
    var vowel_found = false;

    (word.split("")).forEach(function(letter) {
      if ((/[aeioAEIO]/.test(letter))
      || ((/[uU]/.test(letter)) && (letter_array[letter_array.length - 1] !== 'q'))) {
        vowel_found = true;
      }

      if (vowel_found !== true) {
        letter_array.shift();
        letter_array.push(letter);
      }

    });

    letter_array.push("ay");
    output_array.push(letter_array.join(""));

  });
  return output_array.join(" ");
};

$(document).ready(function() {
  $("form#phrase").submit(function(event) {
    var english_phrase = $("input#english-phrase").val();
    var translation = pigLatin(english_phrase);
    $(".translated-phrase").text(translation);

    $("#translation").show();
    event.preventDefault();
  });
});
