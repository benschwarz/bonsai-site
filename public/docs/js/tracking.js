$(function() {
	var as = $("a[href^='http']");
	for(var i=0; i < as.length; i++) {
		$(as[i]).click(function() {
			pageTracker._trackPageview('/outgoing/' + $(this).attr("href").replace('http://', ''));
		});
	}
});