function saveAccuracy(){

const chapter=document.getElementById("chapter").value;

const correct=Number(document.getElementById("correct").value);

const incorrect=Number(document.getElementById("incorrect").value);

if(chapter==""){
alert("Enter Chapter");
return;
}

const accuracy=((correct/(correct+incorrect))*100).toFixed(2);

let data=JSON.parse(localStorage.getItem("accuracy"))||[];

data.push({
chapter,
accuracy
});

localStorage.setItem("accuracy",JSON.stringify(data));

showTable();

}

function showTable(){

let data=JSON.parse(localStorage.getItem("accuracy"))||[];

let table="";

let best=0;
let bestName="";

let weak=100;
let weakName="";

data.forEach(item=>{

table+=`
<tr>
<td>${item.chapter}</td>
<td>${item.accuracy}%</td>
</tr>
`;

if(Number(item.accuracy)>best){

best=item.accuracy;
bestName=item.chapter;

}

if(Number(item.accuracy)<weak){

weak=item.accuracy;
weakName=item.chapter;

}

});

document.getElementById("tableData").innerHTML=table;

document.getElementById("bestChapter").innerHTML=
"🏆 Best Chapter : "+bestName+" ("+best+"%)";

document.getElementById("weakChapter").innerHTML=
"📉 Weak Chapter : "+weakName+" ("+weak+"%)";

}

showTable();