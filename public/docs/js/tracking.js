$(function() {
	$("a[href^='http']").click(function() {
			pageTracker._trackPageview('/outgoing/' + $(this).attr("href").replace('http://', ''));
	});
});