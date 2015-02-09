describe('pigLatin', function() {
  it('adds ay on the end of a one syllable word that starts with a vowel', function() {
    expect(pigLatin("at")).to.equal("atay");
  });

  it('removes first consonant from a word that start with one consonant and moves it to the end and adds "ay"', function() {
    expect(pigLatin("dog")).to.equal("ogday");
  });

  it('removes beginning consonants from a word that starts with two consonants and moves them to the end, also adding ay', function() {
    expect(pigLatin("thug")).to.equal("ugthay");
  });

  it('correctly deals with qu words, like quandary', function() {
    expect(pigLatin("quandary")).to.equal("andaryquay");
  });

  it('correctly deals with squ words, like squabble', function() {
    expect(pigLatin("squabble")).to.equal("abblesquay")
  });

  it('correclty deals with two word phrases', function() {
    expect(pigLatin("hello squabble")).to.equal("ellohay abblesquay")
  });

  it('correctly handles Capitolized vowels', function() {
    expect(pigLatin("I am a sqUirrel")).to.equal("Iay amay aay irrelsqUay")
  });
});
