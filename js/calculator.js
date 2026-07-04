function calculateScore(){

const correct=Number(document.getElementById("correct").value);

const incorrect=Number(document.getElementById("incorrect").value);

const score=(correct*4)-(incorrect);

const accuracy=(correct/(correct+incorrect))*100;

document.getElementById("result").innerHTML=`

<h2>Score : ${score}</h2>

<h2>Accuracy : ${accuracy.toFixed(2)}%</h2>

`;

}.