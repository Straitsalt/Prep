const chapters = {

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

function loadChapters(){

const subject=document.getElementById("subject").value;

const chapter=document.getElementById("chapter");

chapter.innerHTML="";

chapters[subject].forEach(item=>{

chapter.innerHTML+=`
<option>${item}</option>
`;

});

}

function generateDPP(){

alert("Next step: Gemini AI will generate the DPP.");

}