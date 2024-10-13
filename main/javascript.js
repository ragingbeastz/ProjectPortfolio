// Define a simple JavaScript function
function GetTimeReference() {
    const time = new Date();
    console.log(time.getHours());

    let greeting;

    if (time.getHours() < 12) {
        greeting = "morning";
    }
    else if (time.getHours() < 18) {
        greeting = "afternoon";
    }
    else {
        greeting = "evening";
    }
    
    document.getElementById('greeting').innerText = greeting;  
}

window.onload = GetTimeReference;
