$(document).ready(function(){

	var popped = 1;
	var search_string = $(".search_input").val();
	
	prePop();
	
	function prePop() {
		if((search_string != "")&&(popped == 1)){
			searchSubmit();
			popped = 0;
		}else{
			popped = 0;
		}
		return popped;
	}
				
	// Glow function, may need reworking
	$(".search_input").click(function() {
		$(".search_input").removeClass("glow");
		$(".search_button").addClass("glow");
	});
	
	// Glow function, may need reworking
	$(".search_button").click(function() {
		$(".search_input").addClass("glow");
		$(".search_button").removeClass("glow");			
	});
	
	// Search event handler - search function
	$(".search_button").click(searchSubmit);	
	
	// Handles enter button presses, negates default submit behavior
	 $(".search_input").keypress(function(e) {
        if(e.which == 13) {
        	e.preventDefault();
            jQuery(this).blur();
            jQuery('.search_button').focus().click();
        }
    });	
		
	// Submit function
	function searchSubmit() {	
			
		$(".headline").hide();	
		$('#main').animate({'bottom' : '0%'}, 500);		
						
		var search_input = $(".search_input").val();
		var keyword= encodeURIComponent(search_input);
		var yt_url='http://gdata.youtube.com/feeds/api/videos?q='+keyword+'%20dubstep&format=5&max-results=1&v=2&alt=jsonc'; 
			
		$.ajax({
			type: "GET",
			url: yt_url,
			dataType:"jsonp",
			success: function(response){
				if(response.data.items){
					$.each(response.data.items, function(i,data){
						var video_id=data.id;
						var video_title=data.title;
						var video_viewCount=data.viewCount;
						
						var video_frame="<iframe width='100%' height='100%' src='http://www.youtube.com/embed/"+video_id+"?autoplay=1&controls=0&wmode=opaque&iv_load_policy=3&rel=0&showinfo=0&loop=1&playlist="+video_id+"' frameborder='0' type='text/html'></iframe>";
						
						var vidlink="";
						
						var final="<div id='title'>"+video_title+"</div><div>"+video_frame+"</div><div id='count'>"+video_viewCount+" Views</div>";
											
						$("#result").html(final);
						$(".vidlink").html("<div class='search-result'>You found <strong>"+search_input+" Dubstep!</strong> <div id='perm' class='permalink'>Permalink</div><input id='copylink' type='text' value='http://dbstp.it/?s="+search_input+"' readonly/> <a href='http://www.youtube.com/watch?v="+video_id+"' target='_blank'>YouTube</a></div>");
						$(".search_input").val("");
						$(".thumbnail").html("<img src='http://img.youtube.com/vi/"+video_id+"/0.jpg' />");
						$(".search_input").attr("placeholder", "Dubstep something else!");						
						
						// Permalink show/hide
						$("#perm").click(function() {
					  		$("#copylink").toggle("slow").select();
					  		$(this).toggleClass("active");
						});

						});
					}
					
				else{
					$("#result").html("<div id='no'>No Video</div>");
					$(".vidlink").html("<div class='search-result'><strong>"+search_input+" Dubstep</strong>, seriously? C'mon, bro.</div>");					
					$(".search_input").val("");
					$(".search_input").attr("placeholder", "Ok, now try for real.");
				}
			}
		});
	}
});

// Quotes
$(document).ready(function(){
	var myQuote = new Array();
	myQuote [0] = "&#8220;The Dub was in you all along Bro!&#8221;";
	myQuote [1] = "&#8220;Dubstep everything.&#8221;";
	myQuote [2] = "&#8220;Can you feel the Dub tonight?&#8221;";
	myQuote [3] = "&#8220;Voooooooooooom wub wub wub wub bubububububub.&#8221;";
	myQuote [4] = "&#8220;Ho Ho Ho, Merry Dubsmas! <img src='images/dublly.png' alt='Dubsmas Wreath' /> &#8221;";
	myQuote [5] = "&#8220;All my bros are going Dub.&#8221;";	
	myQuote [6] = "&#8220;If it exists, there is a Dubstep remix of it.&#8221;";	
	myQuote [7] = "&#8220;I dub thee, Sir Step of Droppingston.&#8221;";		
	myQuote [8] = "&#8220;Weak drop, bro.&#8221;";			
	myQuote [9] = "&#8220;A great way to make your computer run hot!&#8221;";	
	myQuote [10] = "&#8220;An engine for authentic dubsperiences.&#8221;";
	myQuote [11] = "&#8220;Post-Brostep.&#8221;";

	var myRandom = Math.floor(Math.random()*myQuote.length);
	$('h2.quote').html(myQuote[myRandom]);
});

// Search Suggestions
$(document).ready(function(){
	var searchSuggest = new Array();
	searchSuggest [0] = "&#8220;kittens&#8221;";
	searchSuggest [1] = "&#8220;home improvement&#8221;";
	searchSuggest [2] = "&#8220;space jam&#8221;";	
	searchSuggest [3] = "&#8220;pizza&#8221;";
	searchSuggest [4] = "&#8220;tails from the crypt&#8221;";
	searchSuggest [5] = "&#8220;zelda&#8221;";
	searchSuggest [7] = "&#8220;catstep&#8221;";
	searchSuggest [8] = "&#8220;unicorn&#8221;";
	searchSuggest [9] = "&#8220;the simpsons&#8221;";
	searchSuggest [10] = "&#8220;cher&#8221;";
	searchSuggest [11] = "&#8220;x files&#8221;";
	searchSuggest [12] = "&#8220;pokemon&#8221;";
	searchSuggest [13] = "&#8220;denver the last dinosaur&#8221;";
	searchSuggest [14] = "&#8220;foreigner&#8221;";
	searchSuggest [15] = "&#8220;skyrim&#8221;";
	searchSuggest [16] = "&#8220;peanut butter jelly time&#8221;";
	searchSuggest [17] = "&#8220;jeopardy&#8221;";
	searchSuggest [18] = "&#8220;super metroid&#8221;";
	searchSuggest [19] = "&#8220;axel foley&#8221;";
	searchSuggest [20] = "&#8220;hall and oats&#8221;";	
	searchSuggest [21] = "your favorite 80's cartoon";	
	searchSuggest [22] = "your favorite tv show";		
	searchSuggest [23] = "your favorite videogame";			
	searchSuggest [24] = "a type of animal";		
	searchSuggest [25] = "a non-electronic band";		
	searchSuggest [26] = "any internet meme";	
	searchSuggest [27] = "your favorite 90's sitcom";	
	searchSuggest [28] = "picking a random movie from your DVD collection";	
	searchSuggest [29] = "your favorite sports team";		

		$(".search_input").focus(function() {
			var myRandom = Math.floor(Math.random()*searchSuggest.length);
			$(".suggestion span").html(searchSuggest[myRandom]);
			
			$(".headline").fadeOut("fast", function(){
				$(".suggestion").fadeIn("fast");
				$(".search-result").fadeOut("fast");
			});	
		});
		
		$(".search_input").blur(function() {
			$(".suggestion").fadeOut("fast");
			$(".search-result").fadeIn("fast");
		});
});

// Browser debuggery
$(document).ready(function(){
    if (jQuery.browser.msie === true) {
		alert("Hi, if you are going to use this site, please don't use Internet Explorer - it WILL crash your browser. Any other modern browser should do! There may be a fix for this in a future build. Thank you for your cooperation, you've been warned.");
    }
});


$(document).ready(function(){
	
$(".search_random").click(searchRandom);
	
	function searchRandom() {	
			
		$(".headline").hide();	
		$('#main').animate({'bottom' : '0%'}, 500);		
		
		var randWord = new Array();
		randWord [0] = "green";
		randWord [1] = "space";
		randWord [2] = "espace";
		randWord [3] = "walter";
		randWord [4] = "lincoln";
		randWord [5] = "kia";
		randWord [6] = "drake";
		randWord [7] = "weekend";
		randWord [8] = "dino crisis";
		randWord [9] = "mario";
		randWord [10] = "giant cat";
		randWord [11] = "shark";
		randWord [12] = "terminator";
		randWord [13] = "dmx";
		randWord [14] = "ocean";
		randWord [15] = "kangaroo";
		randWord [16] = "double raibow";
		randWord [17] = "bros";
		randWord [18] = "mushroom";
		randWord [19] = "luigi";
		randWord [20] = "wolf";
		randWord [21] = "giant";
		randWord [22] = "jets";
		randWord [22] = "horses";
		randWord [23] = "stallion";
		randWord [24] = "rocky";
		randWord [25] = "rocky v";
		randWord [26] = "rampage";
		randWord [27] = "dubstep";
		randWord [28] = "engage";
		randWord [29] = "chime";
		randWord [30] = "bell";
		randWord [31] = "albatros";
		randWord [32] = "chrono trigger";
		randWord [34] = "final fantasy";
		randWord [35] = "jenova";
		randWord [36] = "spaghetti";
		randWord [37] = "jump";
		randWord [38] = "aerosmith";
		randWord [39] = "dishwasher";
		randWord [40] = "athens";
		randWord [41] = "new york";
		randWord [41] = "yonkers";
		randWord [43] = "pugs";
		randWord [44] = "bros";
		randWord [45] = "science";
		randWord [46] = "physics";
		randWord [47] = "car wash";
		randWord [48] = "step by step";
		randWord [49] = "jonas brothers";
		randWord [50] = "john";
		randWord [51] = "random";
		randWord [52] = "bone thugs";
		randWord [53] = "glass";
		randWord [54] = "table";
		randWord [55] = "epic";
		randWord [56] = "candles";
		randWord [57] = "lizards";
		randWord [58] = "california";
		randWord [59] = "blast";
		randWord [60] = "iron";
		randWord [61] = "its always sunny";
		randWord [62] = "buffy the vampire slayer";
		randWord [63] = "storm";
		randWord [64] = "pikachu";
		randWord [65] = "sky";
		randWord [66] = "volcano";
		randWord [67] = "snakes on a plane";
		randWord [68] = "magic the gathering";
		
		var myRandom = Math.floor(Math.random()*randWord.length);
						
		var rand_input = randWord[myRandom];
		var keyword= encodeURIComponent(rand_input);
		var yt_url='http://gdata.youtube.com/feeds/api/videos?q='+keyword+'%20dubstep&format=5&max-results=1&v=2&alt=jsonc'; 
			
		$.ajax({
			type: "GET",
			url: yt_url,
			dataType:"jsonp",
			success: function(response){
				if(response.data.items){
					$.each(response.data.items, function(i,data){
						var video_id=data.id;
						var video_title=data.title;
						var video_viewCount=data.viewCount;
						
						var video_frame="<iframe width='100%' height='100%' src='http://www.youtube.com/embed/"+video_id+"?autoplay=1&controls=0&wmode=opaque&iv_load_policy=3&rel=0&showinfo=0&loop=1&playlist="+video_id+"' frameborder='0' type='text/html'></iframe>";
						
						var vidlink="";
						
						var final="<div id='title'>"+video_title+"</div><div>"+video_frame+"</div><div id='count'>"+video_viewCount+" Views</div>";
						
						$("#result").html(final);
						$(".vidlink").html("<div class='search-result'>You found <strong>"+
							rand_input+
							" Dubstep!</strong> <a class='permalink' target='_blank' href='http://dbstp.it/?s="+
							rand_input+
							"'>Permalink</a> <a href='http://www.youtube.com/watch?v="+
							video_id+
							"' target='_blank'>YouTube Link</a></div>");

						$(".rand_input").val("");
						$(".rand_input").attr("placeholder", "Dubstep something else!");						
						});
					}
					
				else{
					$("#result").html("<div id='no'>No Video</div>");
					$(".vidlink").html("<div class='search-result'><strong>"+rand_input+" Dubstep</strong>, seriously? C'mon, bro.</div>");					
					$(".rand_input").val("");
					$(".rand_input").attr("placeholder", "Ok, now try for real.");
				}
				
			}
		});
	}
});