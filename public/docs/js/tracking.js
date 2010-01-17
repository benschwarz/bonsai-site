$(function() {
	
	// Out links
	$("a[href^='http']").click(function() {
			pageTracker._trackPageview('/outgoing/' + $(this).attr("href").replace('http://', ''));
	});
	
	// Download tracking
	$("a[href$='pdf'], a[href$='zip']").click(function () {
		pageTracker._trackEvent("Downloads", this.href.match(/.\w+$/), this.href)
	});
	
	// Amount of page scrolled
	// If the page can be scrolled, what percentage was scrolled?
	$(window).scroll(function(){ 
	  var bottom = $(window).height() + $(window).scrollTop(); 
	  var height = $(document).height(); 
	  var percentage = Math.round(100*bottom/height); 

		pageTracker._trackEvent("UX", "Page scrolling", percentage);
	});
	
	// Elements clicked that weren't A's ?? 
	// $(":not(html,body,a)") ??
	
	// Tabbing through fields (Do users actually do it?)
	
	// Copy and paste tracking
});