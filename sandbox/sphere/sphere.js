//
// Sphere, encode / decode spherical messages and send them to Jerry
//
var Sphere = function() {
  var dict = " GBHYTFVNJU76RDCMKI85ESX,LO94WAZ.;P03?2Q1\n";

  var _decodeWord = function(word) {
    var result = [];
    var i = 0;
    word = String(word);
    word = word.replace(/\n/gi, "");
    while (i < word.length) {
      var a = word[i];
      if (word[i + 1]) a += "" + word[i + 1];
      var tmp = dict[Number(a)];
      if (tmp) result.push(tmp);
      i += 2;
    }
    return result.join("");
  };

  var _decode = function(str) {
    if (str[0] == 0 && str[1] == 0) {
      str = str.slice(2);
    }
    var words = String(str).split(" ");
    var result = [];

    for (var i = 0; i < words.length; i++) {
      result.push(_decodeWord(words[i]));
    }
    return result.join(" ");
  };

  var _encodeChar = function(str) {
    var num = dict.indexOf(String(str));
    if (num == -1) return "";
    if (String(num).length == 1) {
      num = "0" + num;
    }
    return num;
  };

  var _encode = function(str) {
    str = str.toUpperCase();
    var chars = str.split("");
    var result = "00";
    for (var i = 0; i < chars.length; i++) {
      if (chars[i] == " ") {
        result += " ";
      } else {
        result += _encodeChar(chars[i]);
      }
    }
    return result;
  };

  return {
    encode: _encode,
    decode: _decode
  };
};

//
// Setup the UI hooks for encoding / decoding using the above Sphere object
//
var message =
  "00032125252632 032629 301321 04261037 18 3016 0618082132 29033005 1822 04261013 0830162137 1604 08301621 1822 033013130432";

var sphere = new Sphere();

document.onready = function() {
  console.log("your mom");
};

window.onload = function() {
  var enc = document.getElementById("encode");
  var dec = document.getElementById("decode");

  var encode = function() {
    dec.value = sphere.decode(this.value);
  };
  var decode = function() {
    this.value = String(this.value).toUpperCase();
    enc.value = sphere.encode(this.value);
  };

  enc.onchange = encode;
  enc.onkeyup = encode;

  dec.onchange = decode;
  dec.onkeyup = decode;

  enc.value = "000321252526";
  dec.value = "HELLO";
};
