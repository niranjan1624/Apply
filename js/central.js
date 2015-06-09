
$('form#Reg0').submit(function(event) {
			console.log("triggered");
			//alert(event);
			var values = {};
			$("form#Reg0 :input").each(function(){
				var input = $(this);
				var str = input.val();
				var id = input.attr("id");
				values[id] = str;
			});
			console.log(values);
});