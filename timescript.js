var map = {
	first_name:"First Name",
	middle_name:"Middle Name",
	last_name:"Last Name",
	gender:"Gender",
	month : "DOB Month",
	year : "DOB Year",
	day : "DOB Day",
	mob : "Phone",
	cob:"Country of Birth",
	ciob: "City of Birth",
	citizenship:"Citizenship",
	"1schl_name":"School Name",
	"1month":"DOG Month",
	"1year":"DOG Year",
	"1day":"DOG Day",
	"1clsrank":"Class Rank",
	"1gradsize":"Grad Size",
	"1cgpa":  "Cumulative GPA",
	"1gpas": "GPA Scale",
	t1:"TOEFL Listening",
	t2: "TOEFL Speaking",
	t3:"TOEFL Reading",
	t4: "TOEFL Writing",
	s1:"SAT Critial Reading",
	s2:"SAT Analytical Reasoning",
	s3:"SAT Writing",
	a1:"ACT English",
	a2:"ACT Analytical Reasoning",
	a3:"ACT Reading",
	a4:"ACT Reasoning",
	address1: "Address Line 1",
	address2: "Address Line 2",
	city:"City",
	state:"State",
	country:"Country",
	zipcode:"Zip/Pin Code",
	ssn1: "SSN",
	ssn1:"SSN",
	ssn1:"SSN",
	skype:"Skype"
}
var values = {}
var current_field = "";
var inTime = 0;
var email = "";
$(document).ready(function() {
	var $inputs = $('#studentForm :input');
	var outTime = 0
	var duration = 0
    $inputs.each(function () {
    	
    	//console.log($(this).attr('id'))
    	values[$(this).attr('id')] = 0;
        $("#"+$(this).attr('id')).focusin(function(){
        	////console.log($(this).attr('id') + " on focus")
        	inTime = new Date().getTime() / 1000;
        	current_field = $(this).attr('id')
        });

         $("#"+$(this).attr('id')).focusout(function(){
         	outTime = new Date().getTime() / 1000;
         	duration = outTime - inTime;
         	values[$(this).attr('id')] = values[$(this).attr('id')] + duration;
        	////console.log($(this).attr('id') + " on focus out")
        });
    });

    $.post("/meta/sessionexist",{dummy:"dum"},function(emaill){
    	email = emaill;
    });

});
$('form#studentForm').submit(function() {
	$.post("/meta/sessionexist",{dummy:"dum"},function(emaill){
		$.post("/meta/gettimeobj",{email:emaill},function(timeobj){
			var results = JSON.parse(timeobj);
			results["email"] = emaill
			var outTime = new Date().getTime() / 1000;
			//console.log(current_field+"   "+inTime);
		    var duration = outTime - inTime;
		    values[current_field] = values[current_field] + duration;
			var $inputs = $('#studentForm :input');
			
			var total_duration = 0;
			 $inputs.each(function () { 
			 	if(Math.round(values[$(this).attr('id')]) != 0)
			 		results[$(this).attr('id')] = formatDate(Math.round(values[$(this).attr('id')]))
			 	total_duration = total_duration + values[$(this).attr('id')];
			 	results["TotalDuration"] = results["TotalDuration"] - results[$(this).attr('id')];
			 });
			 if(Math.round(values["ssn1"]) != 0 && Math.round(values["ssn2"]) != 0 && Math.round(values["ssn3"]) != 0)
			 	results["SSN"] = results["ssn1"] + results["ssn2"] + results["ssn3"];
			 if(Math.round(values["month"]) != 0 && Math.round(values["year"]) != 0 && Math.round(values["day"]) != 0)
				 results["DOB"] = results["month"] + results["year"] + results["day"];
			 if(Math.round(values["1month"]) != 0 && Math.round(values["1year"]) != 0 && Math.round(values["1day"]) != 0)
			 	results["DOG"] = results["1month"] + results["1year"] + results["1day"]
			 results["TotalDuration"]  = results["TotalDuration"] + formatDate(Math.round(total_duration));
			
			//postToGoogle(results);
			
				
				updateDatabase(results);
			});
});
});
function updateDatabase(results) {
	//console.log(results);
	$.post("/meta/savetimedetails", results, function(data){
			console.log(data);
		});
}

function formatDate(time){
		/*var min = Math.round(time/60);
		var sec = time%60;
		//console.log(min)
		if(min < 1)
			min = "00"
		else if(min < 10 && min > 0) 
			min = "0" + min;
		if(sec < 1 )
			sec = "00"
		else if (sec < 10 && sec > 0)
			sec = "0" + sec;*/
		return time
}
var x = [];
var y = [];
$('#clicker').click(function(e)
{   
    var offset_t = $(this).offset().top - $(window).scrollTop();
    var offset_l = $(this).offset().left - $(window).scrollLeft();

    var left = Math.round( (e.clientX - offset_l) );
    var top = Math.round( (e.clientY - offset_t) );
    /*var x1 = e.layerX;
    var y1 = e.layerY;*/
    x.push(left);
    y.push(top);
    if(email == "") {
    	$.post("/meta/sessionexist",{dummy:"dum"},function(emaill){
    		email = emaill;
    	});
    }
    $.post("meta/saveheatmap",{x:left,y:top,email:email},function(data){
    	console.log(data);
    })
    console.log("X: " + left + " Y: " + top);

});