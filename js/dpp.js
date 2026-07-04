const chapters = {
const topics = {

"Human Physiology":[
"Breathing and Exchange of Gases",
"Body Fluids and Circulation",
"Excretory Products",
"Locomotion",
"Neural Control",
"Chemical Coordination"
],

"Kinematics":[
"Motion in One Dimension",
"Motion in Two Dimensions",
"Relative Motion"
],

"Atomic Structure":[
"Bohr Model",
"Quantum Numbers",
"Electronic Configuration"
]

};

Biology: [
"Cell: Structure and Function",
"Biomolecules",
"Human Physiology",
"Plant Physiology",
"Genetics and Evolution",
"Biotechnology",
"Ecology"
],

Physics: [
"Kinematics",
"Laws of Motion",
"Work, Energy and Power",
"Gravitation",
"Current Electricity",
"Electrostatics",
"Modern Physics"
],

Chemistry: [
"Atomic Structure",
"Chemical Bonding",
"Thermodynamics",
"Equilibrium",
"Organic Chemistry"
],

Mathematics: [
"Relations and Functions",
"Limits",
"Differentiation",
"Integration",
"Probability"
]

};

function loadChapters()
function loadTopics(){

const chapter=document.getElementById("chapter").value;

const topic=document.getElementById("topic");

topic.innerHTML="";

if(!topics[chapter]){

topic.innerHTML="<option>Entire Chapter</option>";

return;

}

topics[chapter].forEach(item=>{

chapter.innerHTML += `<option>${item}</option>`;

});

}{

const subject=document.getElementById("subject").value;

const chapter=document.getElementById("chapter");

chapter.innerHTML="";

chapters[subject].forEach(item=>{

chapter.innerHTML+=`
<option>${item}</option>
`;
chapter.onchange = loadTopics;
loadTopics();
});

}

function generateDPP(){

alert("Next step: Gemini AI will generate the DPP.");

}