var grid = document.querySelector('.masonry-grid');
var msnry;

imagesLoaded( grid, function() {
	var msnry = new Masonry( grid, {
	  // options
	  itemSelector: '.grid-item',
	  columnWidth: '.grid-sizer',
	  percentPosition: true
	});
});
