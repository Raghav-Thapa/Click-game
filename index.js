let count = 0;
let time = null;
let user = {}
let allUsers = []
let htmlvar;


document.getElementById("start").disabled = true

const writeName = () => {
 let name = prompt("Enter Your Name: ")
 if(name !== "" && name !== null){
 document.getElementById("name").disabled = true;
 document.getElementById("start").disabled = false;
 document.getElementById("name").innerHTML = "Hello "+ name;
 user.name = name;
 
 }
}


const start = () => {
    if(count === 0){
        document.getElementById("start").innerHTML = "Click more ! ";
        setTimeout(display, 5000);
    }
        count++;
        document.getElementById("score").innerHTML = count;
        user.count = count;
}

const display = () => {
    allUsers.push(user)
    resetGame()
    htmlvar = "";
    allUsers.map(tableData)
    document.getElementById("displayTable").innerHTML = htmlvar
}

const tableData = (userDetails, index) => {
    htmlvar += "<tr>"
    htmlvar +="<td>"+(index+1)+"</td>"
    htmlvar +="<td>"+(userDetails.name)+"</td>"
    htmlvar +="<td>"+(userDetails.count)+"</td>"
    "</tr>"

}

const resetGame = () => {
    user = {}
    count = 0;
    name = null;
    document.getElementById("score").innerHTML = count;
    document.getElementById("start").innerHTML = "Start Game";
    document.getElementById("name").innerHTML = "Enter Name";
    document.getElementById("name").disabled = false;
    document.getElementById("start").disabled = true;
}



// let end = () => {
//     document.getElementById("start").disabled = true
//     result();
// }

 

// let playAgain = () => {
//     count = 0;
//     let username = prompt("Enter Your Name: ")
//     if(username !== ""){
//     document.getElementById("name").disabled = true;
//     document.getElementById("start").disabled = false;
//     document.getElementById("name").innerHTML = "Hello "+ username;
    
//     }

// }


