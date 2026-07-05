const pyqs = [

{
year:2024,
subject:"Biology",
question:"Which organelle is known as the powerhouse of the cell?",
options:[
"Nucleus",
"Mitochondria",
"Ribosome",
"Golgi Body"
],
answer:"Mitochondria"
},

{
year:2023,
subject:"Physics",
question:"The SI unit of force is?",
options:[
"Joule",
"Newton",
"Watt",
"Pascal"
],
answer:"Newton"
},

{
year:2022,
subject:"Chemistry",
question:"The atomic number of Carbon is?",
options:[
"4",
"6",
"8",
"12"
],
answer:"6"
}

];

function showPYQ(){

const subject=document.getElementById("subject").value;
const year=Number(document.getElementById("year").value);

let html="";

const result=pyqs.filter(q=>q.subject===subject && q.year===year);

if(result.length===0){

html="<h3>No Questions Available</h3>";

}else{

result.forEach((q,index)=>{

html+=`
<h3>Q${index+1}. ${q.question}</h3>

<p>A. ${q.options[0]}</p>
<p>B. ${q.options[1]}</p>
<p>C. ${q.options[2]}</p>
<p>D. ${q.options[3]}</p>

<p><b>Answer:</b> ${q.answer}</p>

<hr>
`;

});

}

document.getElementById("questions").innerHTML=html;

}