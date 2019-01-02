$(document).ready(function() {
  var paint = {
    g: {
      controls: false,
      html: "",
      size: 20,
      width: 0,
      height: 0,
      shape: 1, // 0 : square, 1: circle, 2: both

      circle: true,
      square: false,

      shadow: false,

      state: false,
      style: "",
      fade: false,

      colorize: {
        done: false,
        max: 0,
        current: 0,
        el: null,
        interval: null
      }
    },

    color: [
      "#bbde43",
      "#e5f7c0",
      "#faff2b",
      "#d9473f",
      "#3fb3d9",
      "#726358",
      "#333",
      "#000",
      "#888",
      "#99856f",
      "#f58425",
      "#affefe"
    ],

    getColor: function() {
      return this.color[Math.floor(Math.random() * this.color.length)];
    },

    getStyle: function(shape) {
      if (typeof shape == "undefined") {
        shape = 0;
      }
      var s = this.g.size;

      var style = "padding:" + s + "px;";

      switch (shape) {
        case 1:
          style +=
            "border-radius:" +
            s +
            "px; -moz-border-radius:" +
            s +
            "px; -webkit-border-radius:" +
            s +
            "px; -khtml-border-radius:" +
            s +
            "px;";
          break;
        case 2: {
          if (Math.floor(Math.random() * 2)) {
            style +=
              "border-radius:" +
              s +
              "px; -moz-border-radius:" +
              s +
              "px; -webkit-border-radius:" +
              s +
              "px; -khtml-border-radius:" +
              s +
              "px;";
          }
        }
      }

      if (this.g.shadow) {
        style +=
          "box-shadow:3px 3px 10px rgba(0,0,0,0.2);-webkit-box-shadow:3px 3px 10px rgba(0,0,0,0.2); -moz-box-shadow:3px 3px 10px rgba(0,0,0,0.2);-khtml-box-shadow:3px 3px 10px rgba(0,0,0,0.2);";
      }

      // console.log(style);

      return style;
    },

    setup: function(el, size, shape) {
      // maintain context / scope
      var paint = this;

      if (!this.g.controls) {
        this.controls();
        this.g.controls = true;
      }

      if (typeof shape != "undefined") {
        this.g.shape = shape;
      }
      if (typeof size != "undefined") {
        this.g.size = size;
      }

      this.g.width = $(el).width();
      this.g.height = $(el).height();
      var w = Math.floor(this.g.width / this.g.size / 2);
      var h = Math.floor(this.g.height / this.g.size / 2);
      var screen_size = Math.floor(w * h);

      // $('#fade').removeClass('active');

      if (this.g.circle) {
        $("#circle").addClass("active");
      }
      if (this.g.square) {
        $("#square").addClass("active");
      }

      if (this.g.colorize.interval != null) {
        $("#colorize").removeClass("active");
        clearInterval(this.g.colorize.interval);
      }

      this.g.colorize = {
        done: false,
        max: 0,
        current: 0,
        el: null,
        interval: null
      };

      this.g.colorize.max = screen_size;
      this.g.html = "";

      for (var i = 0; i < screen_size; i++) {
        this.g.html +=
          '<div class="dot" style="' + this.getStyle(shape) + '"></div>';
      }
      $(this.g.html).appendTo(el);

      this.g.colorize.el = $(".dot");

      $(".dot").bind({
        // mousedown : function(){
        // 					paint.g.state = true;
        // 				},
        // 				mouseup : function(){
        // 					paint.g.state = false;
        // 				},
        mouseover: function() {
          // if(!paint.g.state){

          var style = paint.getStyle(paint.g.shape);
          style += "opacity:1.0; background-color:" + paint.getColor();

          if (paint.g.fade) {
            $(this)
              .stop()
              .attr("style", style)
              // .css({'opacity': 1.0, 'background-color': paint.getColor() })
              .animate({ opacity: 0.0 }, 1000);
          } else {
            $(this)
              .stop()
              .attr("style", style);
            // .css({'opacity': 1.0, 'background-color': paint.getColor() });
          }
          // }
        }
      });
    },

    controls: function() {
      // maintain context / scope
      var paint = this;

      $("#clear").click(function() {
        $(".dot").css("background-color", "transparent");
      });

      $("#colorize").click(function() {
        if (paint.g.colorize.interval == null) {
          $(this).addClass("active");
          paint.g.colorize.interval = setInterval(function() {
            paint.colorize();
          }, 30);
        } else {
          $(this).removeClass("active");
          clearTimeout(paint.g.colorize.interval);
          paint.g.colorize.interval = null;
        }
      });

      $("#fade").toggle(
        function() {
          $(this).addClass("active");
          paint.g.fade = true;
        },
        function() {
          $(this).removeClass("active");
          paint.g.fade = false;
        }
      );

      $("#grow").click(function() {
        var s = Math.floor(parseInt(paint.g.size) + 5);

        if (s > 65) {
          paint.g.size = 65;
        } else {
          paint.g.size = s;

          $(".dot")
            .unbind()
            .remove();
          paint.setup("#paint", paint.g.size, paint.g.shape);
        }
      });

      $("#shrink").click(function() {
        var s = Math.floor(parseInt(paint.g.size) - 5);
        if (s < 5) {
          paint.g.size = 5;
        } else {
          paint.g.size = s;
          $(".dot")
            .unbind()
            .remove();
          paint.setup("#paint", paint.g.size, paint.g.shape);
        }
      });

      $("#square").click(function() {
        if (!paint.g.square) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }

        paint.checkShape(square, circle);
      });

      $("#circle").click(function() {
        if (!paint.g.circle) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }

        paint.checkShape(square, circle);
      });

      $("#shadow").toggle(
        function() {
          $(this).addClass("active");

          paint.g.shadow = true;
        },
        function() {
          $(this).removeClass("active");

          paint.g.shadow = false;
        }
      );
    },

    checkShape: function() {
      paint.g.square = $("#square").hasClass("active");
      paint.g.circle = $("#circle").hasClass("active");

      if (paint.g.square == true && paint.g.circle == false) {
        paint.g.shape = 0; // square
      }

      if (paint.g.square == false && paint.g.circle == false) {
        paint.g.shape = 0; //default to square
      }

      if (paint.g.square == true && paint.g.circle == true) {
        paint.g.shape = 2; // both
      }

      if (paint.g.square == false && paint.g.circle == true) {
        paint.g.shape = 1; // circle only
      }
    },

    colorize: function() {
      var paint = this;
      if (paint.g.colorize.current >= paint.g.colorize.max) {
        paint.g.colorize.done = true;
      }
      $(paint.g.colorize.el[paint.g.colorize.current]).trigger("mouseover");
      // $(paint.g.colorize.el[paint.g.colorize.current]).css({'opacity': 1.0, 'background-color': paint.getColor() });

      paint.g.colorize.current++;

      if (paint.g.colorize.done) {
        // clearTimeout(paint.g.colorize.interval);
        // paint.g.colorize.interval = null;
        paint.g.colorize.current = 0;
        paint.g.colorize.done = false;
        // console.log('done!');
      }
    }
  };

  // setup ( el, size, shape)
  // -- shape 0: square, 1: circle, 2: both
  paint.setup("#paint", 20, 1);
});
