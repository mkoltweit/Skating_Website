var skatingMenu = document.querySelector(".skatingMenu");
var skatingSubMenu = document.getElementById('subMenu')
var MWF = document.querySelectorAll(".MWF");
var TTH = document.querySelectorAll(".TTH");
var Sat = document.querySelectorAll(".Sat");
var availableTimes = document.getElementById("availableTimes");
var seeMore = document.getElementById("seeMore");
var extraText = document.getElementById("extraText");
var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var phone = document.getElementById("phone");

if (seeMore) {
    seeMore.addEventListener("click", function() {
    extraText.classList.add("show");
    seeMore.innerHTML = '';
    });
}

skatingMenu.addEventListener("mouseover", function() {
    skatingSubMenu.style.display = "block";
}, false);

skatingMenu.addEventListener("mouseleave", function() {
    skatingSubMenu.style.display = "none";
}, false);

$(function() {
    $('#slideshow div:gt(0)').hide();

    setInterval(function() {
        $('#slideshow').children(':first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slideshow');
    }, 5000);
});

//display schedule
function addSchedules(daysOfWeek) {
    for(var i=0; i < daysOfWeek.length; i++) {
        var currentDay = daysOfWeek[i];
        currentDay.addEventListener("click", function() {
            if (currentDay.className == "MWF") {
                availableTimes.innerHTML = `
                <table class="scheduleTable">
                    <thead>
                    <tr>
                        <th>Time</th>
                        <th>Event</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>5:00AM - 6:00AM</td>
                        <td>Freestyle</td>
                    </tr>
                    <tr>
                        <td>6:00AM - 7:00AM</td>
                        <td>Freestyle</td>
                    </tr>
                    <tr>
                        <td>9:30AM - 11:30AM</td>
                        <td>Public Skate</td>
                    </tr>
                    <tr>
                        <td>1:00PM - 3:00PM</td>
                        <td>Public Skate</td>
                    </tr>
                    <tr>
                        <td>3:00PM - 4:00PM</td>
                        <td>Freestyle</td>
                    </tr>
                    <tr>
                        <td>4:00PM - 5:00PM</td>
                        <td>Freestyle</td>
                    </tr>
                    <tbody>
                </table>
            `;
            }
            else if (currentDay.className == "TTH") {
                availableTimes.innerHTML = `
                <table class="scheduleTable">
                    <thead>
                    <tr>
                        <th>Time</th>
                        <th>Event</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>5:00AM - 6:00AM</td>
                        <td>Stick Time</td>
                    </tr>
                    <tr>
                        <td>6:00AM - 7:00AM</td>
                        <td>Stick Time</td>
                    </tr>
                    <tr>
                        <td>9:30AM - 11:30AM</td>
                        <td>Public Skate</td>
                    </tr>
                    <tr>
                        <td>1:00PM - 3:00PM</td>
                        <td>Public Skate</td>
                    </tr>
                    <tr>
                        <td>3:00PM - 4:00PM</td>
                        <td>Stick Time</td>
                    </tr>
                    <tr>
                        <td>4:00PM - 5:00PM</td>
                        <td>Stick Time</td>
                    </tr>
                    <tbody>
                </table>
            `;
            }
            else if (currentDay.className == "Sat") {
                availableTimes.innerHTML = `             
            <table class="scheduleTable">
                    <thead>
                    <tr>
                        <th>Time</th>
                        <th>Event</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>5:00AM - 6:00AM</td>
                        <td>Freestyle</td>
                    </tr>
                    <tr>
                        <td>6:00AM - 7:00AM</td>
                        <td>Freestyle</td>
                    </tr>
                    <tr>
                        <td>7:00AM - 8:00AM</td>
                        <td>Freestyle</td>
                    </tr>
                    <tr>
                        <td>8:00AM - 9:00AM</td>
                        <td>Freestyle</td>
                    </tr>
                    <tr>
                        <td>9:30AM - 11:30AM</td>
                        <td>Public Skate</td>
                    </tr>
                    <tr>
                        <td>1:00PM - 3:00PM</td>
                        <td>Public Skate</td>
                    </tr>
                    <tr>
                        <td>3:00PM - 4:00PM</td>
                        <td>Stick Time</td>
                    </tr>
                    <tr>
                        <td>4:00PM - 5:00PM</td>
                        <td>Stick Time</td>
                    </tr>
                    <tr>
                        <td>7:00PM - 9:30PM</td>
                        <td>Public Skate</td>
                    </tr>
                    <tbody>
                </table>
            `;
            }
            
        }, false)
        
        
    }
}
/* contact form */
var sendMessage = document.getElementById('sendMessage');
if (sendMessage) {
    sendMessage.addEventListener('click', function(e) {
        e.preventDefault();
        var isValidMsg;
        isValidMsg = document.getElementById("isValidMsg");
        isValidMsg.innerHTML = "";
        try {
        if(fullName.value == "") throw "Name field is empty";
        if(!email.value.includes("@") && !email.value.includes(".")) throw "Please enter a valid email";
        if(phone.value.length < 7 || phone.value.length > 10) throw "Please enter valid phone number";
        //   if(getInput < 12) throw "is too low";
        }
        catch(error) {
        isValidMsg.innerHTML = `${error}`;
        }
        
    } );
}
addSchedules(MWF);
addSchedules(TTH);
addSchedules(Sat);