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
$(document).ready(function() {
	var inTime = ""
	var outTime = ""
	var $inputs = $('#studentForm :input');
	var inTime = 0
	var outTime = 0
	var duration = 0
    $inputs.each(function () {
    	current_field = $(this).attr('id')
    	console.log($(this).attr('id'))
    	values[$(this).attr('id')] = 0;
        $("#"+$(this).attr('id')).focusin(function(){
        	//console.log($(this).attr('id') + " on focus")
        	inTime = new Date().getTime() / 1000;
        });

         $("#"+$(this).attr('id')).focusout(function(){
         	outTime = new Date().getTime() / 1000;
         	duration = outTime - inTime;
         	values[$(this).attr('id')] = values[$(this).attr('id')] + duration;
        	//console.log($(this).attr('id') + " on focus out")
        });
    });
});
$('form#studentForm').submit(function() {
	outTime = new Date().getTime() / 1000;
    duration = outTime - inTime;
    values[current_field] = values[current_field] + duration;
	var $inputs = $('#studentForm :input');
	var results = {}
	var total_duration = 0;
	 $inputs.each(function () { 
	 	if(Math.round(values[$(this).attr('id')]) != 0)
	 		results[$(this).attr('id')] = formatDate(Math.round(values[$(this).attr('id')]))
	 	total_duration = total_duration + values[$(this).attr('id')];
	 });
	 results["Total Duration"]  = formatDate(Math.round(total_duration));
	
	//postToGoogle(results);
	$.post("/meta/sessionexist",{dummy:"dum"},function(email){
			results["email"] = email
			updateDatabase(results);
		});
});
function updateDatabase(results) {
	console.log(results);
	$.post("/meta/savetimedetails", results, function(data){
			//console.log(data);
		});
}

function formatDate(time){
		/*var min = Math.round(time/60);
		var sec = time%60;
		console.log(min)
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