// array of characters for no
const listYes = ["Are you sure?","Really sure??","Are you positive?","pookie please...","Just think about!","if you say no, i be very sad","i will be very sad","i will be very very very sad"];

const sizeIncrease = ["300px","400px","500px","600px","700px","800px","900px","1000px"];

// when no is pressed many times loop thru the no list 

let noBtn = document.getElementById("btn-no");
let yesBtn = document.getElementById("btn-yes");
let headingH1 = document.getElementById("head");
let image = document.getElementById("wabbit");

let i = 0
let z = 0
noBtn.addEventListener("click",function() {
    if (i === listYes.length - 1){
        yesBtn.style.width = "100vw"; // Full width of the screen
                yesBtn.style.height = "100vh"; // Full height of the screen
                noBtn.remove();

    };
 i = (i + 1) % listYes.length;
 this.textContent = listYes[i];

 z = (z + 1) % sizeIncrease.length;
    yesBtn.style.width = sizeIncrease[z];
    console.log(sizeIncrease[z]);


});

yesBtn.addEventListener("click", function(){
    headingH1.textContent = "US😉";

    image.src = "./success.jpeg"
    noBtn.disabled = true;
})




// when yes is selected breka for loop, an dhave a seperate doc 



// have the Yes btn graduale increase in size whiles No btn gradulate smaller then disappears by last for loop