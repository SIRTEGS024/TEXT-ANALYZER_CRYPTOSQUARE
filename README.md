# _Cryptosquare_

## Description

_This page has a form that allows the user to enter a message. After pressing the submit button, the user will receive  the message they entered as a new encoded message._

## Specifications

* Program will return empty string when field is submitted blank.
* Program will downcase all letters, remove any special characters and spaces.
* Program will not encode single letter inputs.
* If input length results in a perfect square, letters are sorted into columns equivalent to square root value and outputted in code blocks with the length of 5 (last block may be less than 5).
* If input length is not a perfect square, letters are sorted into columns corresponding to the first perfect square larger than the input and outputted in code blocks with the length of 5 (last block may be less than 5).

# _Text-Analyzer_

## Description

_This a form that encrypts offensive words using Cryptosquare , makes a selected word from the passage bold  and shows the 3 most occuring words . For the purpose of this application, there are only four offensive words : zoinks, muppeteer, biffaroni, and loopdaloop._

## Test
Describe: boldPassage()

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

Test: "It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"

Test: "It should wrap words that match in `b` tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: "<p><b>hello</b> there</p>"


Describe: topThreeWords()

test: for each element in an array, output the number of times that element occurs in the array and what that element is
Code
const text = "Hello I like saying hello.";
const wordArray = text.trim().split(" ");
numberOfOccurrencesInText(word, text);
expected output: "Hello 2, I 1, like 1, saying 1, hello 2"

test: do not reprint repeated words
Code
const text = "Hello I like saying hello.";
const wordArray = text.trim().split(" ");
numberOfOccurrencesInText(word, text);
expected output: "Hello 2, I 1, like 1, saying 1"o

test: only print the 3 most occuring word And number of times it occurs
const text = "Hello I like saying hello.";
const wordArray = text.trim().split(" ");
topThreeWords(text)
expected output: "Hello 2, I 1, like 1"

## Setup/Installation Requirements

* _Clone GitHub repository_
* _Open folder named cryptosquare_
* _Open index.html with web browser of choice_
 
## Known Bugs

_There are no known bugs at this time._

### By _**Metitiri Oghenetega**_

## Support and contact details

_contact me via E-mail at kesienametitiri024@gmail.com_

## Technologies Used

_HTML CSS JavaScript jQuery_

### License

*This software is licensed under the MIT license*
 Copyright (c) 2022 **Metitiri Oghenetega**