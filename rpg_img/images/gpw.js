const pBox = document.getElementById("pw");
const len = 12;
 const UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LC = "abcdefghijklmopqrstuvwxyz";
const num = "012345679";
const SC = "~!@#$%^()*<>?][{}/-+|_+";
const AC = UC+LC+SC+num;

function createPassword() {
 let password = "";
 password+= UC[Math.floor(Math.random() * UC.length)];
 password+= LC[Math.floor(Math.random() * LC.length)];
 password+= num[Math.floor(Math.random() * num.length)];
 password+= SC[Math.floor(Math.random() * SC.length)];
while(len>password.length){
    password+= AC[Math.floor(Math.random() * AC.length)];
}
pBox.value = password;
}
function copyPassword(){
    pBox.select();
    document.execCommand("copy");
    
}

