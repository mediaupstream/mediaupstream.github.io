//
// paintSpread - an interactive drawing experiment
//
$(function() {
  // start the app
  paintSpread();

  // change color theme when clicking anywhere
  $("body").click(function() {
    // add a new color scheme from colourLovers api
    // getColor(function(data){
    //   scheme.push(data);
    // })

    // pick random number between 0 and scheme length
    var i = theme;
    i++;
    // if next theme is undefined, pick first theme
    if (i >= scheme.length) i = 0;

    // reset the canvas area
    paintSpread(i);
  });
});

var scheme = [
  // times changing
  ["#322531", "#634d52", "#f77a52", "#a49a87", "#fe9554"],
  // miami sunset
  ["#fea861", "#da727e", "#ac6c82", "#685c79", "#455d7a"],
  // for juliette
  ["#fe7560", "#c2ae8b", "#fccd6b", "#e27a3f", "#de484b"],
  // orange crush
  ["#ee521c", "#f9591c", "#ff6517", "#fe6b29", "#ff822e"],
  // info+rio
  [
    "#107b82",
    "#e34517",
    "#31a777",
    "#f5ff53",
    "#ffd06b",
    "#b6e665",
    "#f09b68",
    "#1bbc74",
    "#ce4d45",
    "#0c4139"
  ],
  // simple duo
  ["#343844", "#fcf1d8"],
  // RGB
  ["#f21b55", "#a8bf12", "#00aab5"],
  // CMYK
  ["#0bb4ea", "#e10b7e", "#f2e92d", "#000000"],
  // watermelon
  ["#7d8a2e", "#c9d787", "#ffffff", "#fe8598"],
  // bright playground
  ["#c0d945", "#fc7218", "#004357", "#ffe11a"]
];

// globals
var theme = 0;
var delay = 3;
var block = 5; // block style, 0: fill, >1: border width
var size = 200; // width/height of block

var tick = 0;
var active = 0;
var previous = -1;
var next_previous = 0;
var rhandle = null; // for rainbow mode
var ri = 0;
var sections = [];

//
// paintSpread
//
function paintSpread(t) {
  if (rhandle) rainbow(false);
  theme = typeof t == "undefined" ? theme : t;
  tick = 0;
  active = 0;
  previous = -1;
  next_previous = 0;
  sections = scheme[theme];

  size = 1000 / sections.length;

  block = Math.floor(Math.random() * 8);
  delay = Math.floor(Math.random() * 5) + 1;

  $("#container").html("");

  // build the sections html
  var html = "";
  for (var i = 0; i < sections.length; i++) {
    html += '<div class="section"></div>';
  }
  $("#container").append(html);

  // initialize sections color and data
  $(".section").each(function(i, el) {
    $(this).data("id", i);
    $(this).css("background-color", sections[i]);
    $(this).css("width", 100 / sections.length + "%");
  });

  // on mouse over
  $(".section").on("mouseover", function() {
    var id = $(this).data("id");
    if (previous != -1 && next_previous != id) previous = next_previous;
    active = id;
    if (previous == -1) previous = active;
  });

  // on mouse out
  $(".section").on("mouseout", function() {
    var id = $(this).data("id");
    next_previous = id;
  });

  // draw dots inside the section, set color to be the previous section color
  $(".section").on("mousemove", function(ev) {
    tick++;
    if (tick % Number(delay) != 0) return;
    var w = size;
    var h = size;
    var x = ev.offsetX - w / 2;
    var y = ev.offsetY - h / 2;

    if (previous == -1) {
      previous = active;
    }

    var span = '<span style="';
    if (block == 0) {
      span += "background-color:" + sections[previous] + "; ";
    } else {
      span += "border-color:" + sections[previous] + "; ";
      span += "border-width:" + block + "px;";
    }
    span += "top:" + y + "px; left:" + x + "px;";
    span += "width:" + w + "px; height:" + h + "px;";
    span += deg(tick);
    span += '"></span>';

    $(this).append(span);
  });
}

//
// Helper methods, 'n stuff like that
//

function rainbow(enable) {
  if (rhandle) {
    clearInterval(rhandle);
    rhandle = null;
  }
  if (enable) {
    var len = Number(sections.length);
    rhandle = setInterval(function() {
      ri++;
      if (ri >= scheme.length) ri = 0;
      sections = scheme[ri];
      var j = 0;
      while (sections.length < len) {
        sections.push(sections[j]);
        j++;
      }

      $(".section").each(function(i, el) {
        $(this).css("background-color", sections[i]);
      });
    }, 4000);
  } else {
    clearInterval(rhandle);
  }
}

function getColor(cb) {
  $.ajax({
    type: "GET",
    url: "http://www.colourlovers.com/api/palettes/random?format=json",
    dataType: "jsonp",
    crossDomain: true,
    cache: false,
    jsonp: "jsonCallback",
    // jsonpCallback: 'jsonCallback',
    success: function(data) {
      var c = data[0].colors;
      c.forEach(function(d, i) {
        c[i] = "#" + d;
      });
      cb(c);
    }
  });
}

function deg(d) {
  var result = "";
  result += "-webkit-transform: rotate(" + d + "deg);";
  result += "-moz-transform: rotate(" + d + "deg);";
  result += "-o-transform: rotate(" + d + "deg);";
  result += "-ms-transform: rotate(" + d + "deg);";
  result += "transform: rotate(" + d + "deg);";
  return result;
}

function qs(key) {
  key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
  var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}
