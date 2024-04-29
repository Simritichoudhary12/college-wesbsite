var navlinks = get.documentById("nav-Links")
function toggleContactInfo(event) {
    event.preventDefault(); // Prevents the default behavior of the anchor tag
    var contactInfo = document.getElementById("contactInfo");
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
    } else {
        contactInfo.style.display = "none";
    }
}

function toggleCourseDetails(course) {
    var courseDetails = document.querySelector(`.${course}`);
    if (courseDetails.style.display === "none" || courseDetails.style.display === "") {
        courseDetails.style.display = "block";
    } else {
        courseDetails.style.display = "none";
    }
}


function showMenu(){

    navlinks.style.right   ="0"; 
}

function hideMenu(){
    navlinks.style.right = "-200px"
}