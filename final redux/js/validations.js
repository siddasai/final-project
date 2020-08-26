var today = new Date();
document.getElementById('time').innerHTML=today.toUTCString();

// function validateloginform(){
//     var username = document.forms["loginform"]["Username"].value;
//     var pass = document.forms["loginform"]["Password"].value;
//     if(username == ""){
//         alert("username is required");
//         return false;
//     }else{
//         if(pass == ""){
//             alert("password is required");
//             return false;
//         }
//     }
//     return true;
// }

// function validateUpdateForm(){
//     var claimNumber = document.forms["updateForm"]["claimNumber"].value;
//     var claimProgram = document.forms["updateForm"]["claimProgram"].value;
//     var claimNumRegex = /^[0-9a-zA-Z]{3}-[0-9a-zA-Z]{3}-[0-9a-zA-Z]{3}$/
//     var claimProgramregex = /^[a-zA-Z]+$/
//     if(claimNumber == ""){
//         alert("claim number required");
//         return false;
//     }
//     if(!(claimNumber.match(claimNumRegex))){
//         alert("claim number is invalid");
//         return false;
//     }
//     if(claimProgram == ""){
//         alert("claim program required");
//         return false;
//     }
//     if(claimProgram.length > 20){
//         alert("claim program is invalid");
//         return false;
//     }
//     if(!(claimProgram.match(claimProgramregex))){
//         alert("claim program is invalid");
//         return false;
//     }
//     return true;
// }