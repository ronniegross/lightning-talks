// $("h1").velocity("transition.slideLeftIn", { stagger: 1000, drag: true });

// $("h1").velocity("fadeIn", { duration: 1500 });
// $("h2").velocity("slideOut", {opacity: 0.0}, { delay: 4000 }, { duration: 1000 });
// $(".blueBar").velocity("fadeIn", {opacity: 0}, {delay: 4000 }, { duration: 1000 });


// $("h1").velocity( { opacity: .7}, 1000, "swing", function() { console.log("effect done."); } );

// $("h1")
//   .velocity( { opacity: 0.5 }, { duration: 1000 } )
//   .velocity( { opacity: 1.0 }, { duration: 1000 } );

//   $("h1").velocity( { opacity: 0.1 }, { duration: 500, loop: 2 } );

// $("h1").velocity("transition.fadeIn");

$(".sectionOne").velocity("fadeIn", function(){
	$(".arrow").velocity(
        // {translateX: "90%"},
		{ translateY: "10px" },
		{ duration: 800, loop: true }
	);
});

$("#arrow1").click(function(){
	$(".sectionTwo").velocity({ opacity: 0 }, function(){
		$(this)
			.velocity("scroll", 500)
			.velocity({ opacity: 1 });
	});
});

$("#arrow2").click(function(){
	$(".sectionThree").velocity({ opacity: 0 }, function(){
		$(this)
			.velocity("scroll", 500)
			.velocity({ opacity: 1 });
	});
});

$("#arrow3").click(function(){
	$(".sectionFour").velocity({ opacity: 0 }, function(){
		$(this)
			.velocity("scroll", 500)
			.velocity({ opacity: 1 });
	});
});

$("#arrow4").click(function(){
	$(".sectionFive").velocity({ opacity: 0 }, function(){
		$(this)
			.velocity("scroll", 500)
			.velocity({ opacity: 1 });
	});
});

$("#arrow5").click(function(){
	$(".sectionSix").velocity({ opacity: 0 }, function(){
		$(this)
			.velocity("scroll", 500)
			.velocity({ opacity: 1 });
	});
});