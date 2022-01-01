function display_details(){
  var name = document.getElementById("name_in").value;
  var age = document.getElementById("age_in").value;
  var address = document.getElementById("address_in").value
  var email = document.getElementById("email_in").value
  var phone = document.getElementById("phone_in").value
  var eircode = document.getElementById("eircode_in").value
  var pps = document.getElementById("pps_in").value
 

  if (age >= 50){
    document.getElementById("age_out").innerHTML = "You are eligible to apply for the vaccine";
    document.getElementById("name_out").innerHTML =name;
    document.getElementById("ageTwo_out").innerHTML = age;
    document.getElementById("address_out").innerHTML = address;
    document.getElementById("email_out").innerHTML = email;
    document.getElementById("phone_out").innerHTML = phone;
    document.getElementById("eircode_out").innerHTML = eircode;
    document.getElementById("pps_out").innerHTML = pps;

  }
  else if (age >= 40){
    document.getElementById("age_out").innerHTML = "You will be eligible to apply for the vaccine in June";
    document.getElementById("name_out").innerHTML =name;
    document.getElementById("ageTwo_out").innerHTML = age;
    document.getElementById("address_out").innerHTML = address;
    document.getElementById("email_out").innerHTML = email;
    document.getElementById("phone_out").innerHTML = phone;
    document.getElementById("eircode_out").innerHTML = eircode;
    document.getElementById("pps_out").innerHTML = pps;

  }
  else if (age >= 30){
    document.getElementById("age_out").innerHTML = "You will be eligible to apply for the vaccine in July";
    document.getElementById("name_out").innerHTML =name;
    document.getElementById("ageTwo_out").innerHTML = age;
    document.getElementById("address_out").innerHTML = address;
    document.getElementById("email_out").innerHTML = email;
    document.getElementById("phone_out").innerHTML = phone;
    document.getElementById("eircode_out").innerHTML = eircode;
    document.getElementById("pps_out").innerHTML = pps;

  }
  else if (age >= 20){
    document.getElementById("age_out").innerHTML = "You will be eligible to apply for the vaccine in August";
    document.getElementById("name_out").innerHTML =name;
    document.getElementById("ageTwo_out").innerHTML = age;
    document.getElementById("address_out").innerHTML = address;
    document.getElementById("email_out").innerHTML = email;
    document.getElementById("phone_out").innerHTML = phone;
    document.getElementById("eircode_out").innerHTML = eircode;
    document.getElementById("pps_out").innerHTML = pps;

  }
  else{
    document.getElementById("age_out").innerHTML = "You will be eligible to apply for the vaccine in September or later";
    document.getElementById("name_out").innerHTML = name;
    document.getElementById("ageTwo_out").innerHTML = age;
    document.getElementById("address_out").innerHTML = address;
    document.getElementById("email_out").innerHTML = email;
    document.getElementById("phone_out").innerHTML = phone;
    document.getElementById("eircode_out").innerHTML = eircode;
    document.getElementById("pps_out").innerHTML = pps;

  }
}

function eligible() {
  var ageTwo = document.getElementById("ageTwo_in").value;
  var gender = document.getElementById("gender_in").value;
  var male = "Male";
  var female = "Female";

  if (ageTwo >= 35 && gender == male){
    document.getElementById("vac_out").innerHTML = "AstraZeneca";
  }
  else if (ageTwo >= 35 && gender == female){
    document.getElementById("vac_out").innerHTML = "Pfizer";
  }
  else if (ageTwo >= 20 && ageTwo < 35 && gender == male){
    document.getElementById("vac_out").innerHTML = "Johnson & Johnson";
  }
  else if (ageTwo >= 20 && ageTwo < 35 && gender == female){
    document.getElementById("vac_out").innerHTML = "AstraZeneca";
  }
  else{
    document.getElementById("vac_out").innerHTML = "Johnson & Johnson";
  }

}
 function submit_form(){
   window.location.reload();
   alert("Your form has been submitted");
 }
