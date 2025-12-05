document.getElementById("submitBtn").onclick = function () {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let roll = document.getElementById("roll").value;
    let job = document.getElementById("job").value;

    // Fill green cards
    document.getElementById("card1").innerHTML =
        `<b>Name:</b> ${name}<br><b>Email:</b> ${email}`;

    document.getElementById("card2").innerHTML =
        `<b>Roll No:</b> ${roll}<br><b>Job:</b> ${job}`;

    document.getElementById("card3").innerHTML =
        `<b>All Details:</b><br>
        ${name}<br>
        ${email}<br>
        ${roll}<br>
        ${job}`;
};