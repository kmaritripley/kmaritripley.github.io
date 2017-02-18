// Masonry
var grid = document.querySelector('.masonry-grid');

if (grid) {
	// Prevent no-javascript fallback from fading in grid too soon 
	grid.classList.toggle('fading-in');
	var msnry; 
	var listItems = document.querySelectorAll('.grid-item');

	// Remove the visible class assigned in markup
	for (i = 0; i < listItems.length; i++) { 
	  listItems[i].classList.toggle( 'visible' );
	}

	imagesLoaded( grid, function() {
		var msnry = new Masonry( grid, {
		  // options
		  itemSelector: '.grid-item',
		  columnWidth: '.grid-sizer',
		  percentPosition: true
		});
		var i = 0;
		// fade the grid back in
		grid.style.opacity = "1";
		// fade in the grid-items one at a time
		(function fadeInImages(i) {          
			setTimeout(function () {   
		    listItems[i].classList.toggle( 'visible' );              
		    if (++i < listItems.length) fadeInImages(i);
			}, 120)
		})(0);
	});
}

// Lightbox 
if (document.querySelectorAll("body.gallery-layout").length > 0 ) {
	var lightboxLoaded = false;
	var notMobile = function() {
		var w = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;
		return w > 520;
	};

	var lightboxOptions = {
		captions: true
	}

	var loadLightbox = function() {
		if ( notMobile() ) {
			var lightbox = new Lightbox(lightboxOptions);
			lightbox.load();
			lightboxLoaded = true;
		}
	};
	loadLightbox();

	window.addEventListener("resize", function() {
		if ( !lightboxLoaded && notMobile() ) {
			loadLightbox();
		}
	});
}




