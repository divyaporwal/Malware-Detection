var App = {};
App.init = function () {
    $("#submit").addEventListener("click",function(){
        alert("sub");
        $(this).val("Submit");
        event.preventDefault();
        console.log("hi")
    })

    $("#drop").ondragleave = function (evt) {
		$("#drop").classList.remove("active");
		evt.preventDefault();
	};
}();

