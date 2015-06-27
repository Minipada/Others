var easter_egg = new Konami();
easter_egg.code = /*function fx() {
  var $o = $(explose_everything);

  $o.html($o.text().replace(/([\S])/g, "<span>$1</span>"));
  $o.css("position", "relative");
  $("span", $o).each(function(i) {
    var newTop = Math.floor(Math.random()*500)*((i%2)?1:-1);
    var newLeft = Math.floor(Math.random()*500)*((i%2)?1:-1);

    $(this).css({position: "relative",
      opacity: 1,
      fontSize: 12,
      top: 0,
      left: 0
    }).animate({
      opacity: 0,
      fontSize: 14,
      top: newTop,
      left:newLeft
    },25000);
  });
}*/

function my_alert () {
	swal({   
		title: "The end!",
		text: "I hope you're proud of you starting the apocalypse. Enjoy the end of the world now.",
		imageUrl: "js/sweetalert-master/lib/apocalypse.jpg"
	});

  var all = document.getElementsByTagName("*");
  for (var i=0, max=all.length; i < max; i++) {
    all[i].style.fontFamily="Comic Sans MS";
  }
}

easter_egg.load();

