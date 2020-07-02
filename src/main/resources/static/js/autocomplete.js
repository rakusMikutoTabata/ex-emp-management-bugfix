$(function() {
	$("#searchName").on("keyup", function() {
		var hostURL = "http://localhost:8080/employee/autoComplete";
		$.ajax({
			url : hostURL,
			dataType : "json",
			type : 'GET'
		}).done(function(searchResult) {
			$('#searchName').autocomplete({
				source : searchResult,
				autoFocus : true,
				minLength : 1
			});
		}).fail(function(XMLHttpRequest, textStatus, errorThrown) {
			alert("エラーが発生しました！");
			console.log("XMLHttpRequest : " + XMLHttpRequest.status);
			console.log("textStatus     : " + textStatus);
			console.log("errorThrown    : " + errorThrown.message);
		});
	});
});