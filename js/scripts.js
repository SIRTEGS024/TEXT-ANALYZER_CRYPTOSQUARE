function errorCheck(sentence) {
  if (!sentence) {
    return "error: no input";
  }
}

function filterSentence(sentence) {
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/[^a-z0-9]+/g, "");
  return sentence;
}

function encodeSentence(sentence) {
  sentence = filterSentence(sentence);
  let error = errorCheck(sentence);
  if (error) {
    return error;
  } else {
    let square = [];
    let squareSides = Math.ceil(Math.sqrt(sentence.length));
    for (let i = 0; i < squareSides; i++) {
      square.push([]);
    }
    let sentenceArray = sentence.split("");
    let index = 0;
    sentenceArray.forEach(function (sentence) {
      square[index].push(sentence);
      index++;
      if (index === squareSides) {
        index = 0;
      }
    });
    let results = ""
    square.forEach(function (column) {
      results += column.join("");
    });
    let splitResults = "";
    for (let i = 0; i < results.length; i += 5) {
      splitResults += results.slice(i, i + 5) + " ";
    }
    return splitResults;
  }
}

function maskOffensiveWord(passage) {
  passage = passage.toLowerCase();
  let error = errorCheck(passage);
  if (error) {
    return error;
  }
  let offensiveArray =  ["biffaroni","loopdaloop","zoinks","muppeteer"];
  let retArray = [];
  let textArray = passage.split(" ");
  textArray.forEach(function (element) {
    offensiveArray.forEach(function (oElement) {
      if (element === oElement) {
        element = encodeSentence(element);
      }
    })
    retArray.push(element);
  });
  return retArray.join(' ');
}



// User Interface Logic
$(document).ready(function () {
  $("#output1").submit(function (event) {
    event.preventDefault();
    $(".alert").hide();
    let sentence = $("#sentence").val();
    let codedSentence = encodeSentence(sentence);
    if (codedSentence === "error: no input") {
      $(".alert").show();
    } else {
      $("#result1").text(encodeSentence(sentence));
    }
  });
});

$(document).ready(function () {
  $("#output2").submit(function (event) {
    event.preventDefault();
    $(".alert").hide();
    let sentence1 = $("#sentence1").val();
    let maskedSentence = maskOffensiveWord(sentence1);
    if (maskedSentence === "error: no input") {
      $(".alert").show();
    } else {
      $("#result2").text(maskOffensiveWord(sentence1));
    }
  });
});
















