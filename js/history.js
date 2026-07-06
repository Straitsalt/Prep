function loadHistory() {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const key = `dppHistory_${currentUser.email}`;

const history = JSON.parse(localStorage.getItem(key)) || [];

    let html = "";

    if (data.length === 0) {
        html = "<h3>No DPPs Generated Yet</h3>";
    } else {

        data.forEach(function(item, index) {

            html += `
            <div class="card">
                <h3>DPP ${index + 1}</h3>

                <p><b>Exam:</b> ${item.exam}</p>
                <p><b>Subject:</b> ${item.subject}</p>
                <p><b>Chapter:</b> ${item.chapter}</p>
                <p><b>Topic:</b> ${item.topic}</p>
                <p><b>Difficulty:</b> ${item.difficulty}</p>
                <p><b>Questions:</b> ${item.questions}</p>

                <hr>

            </div>

            <br>
            `;

        });

    }

    document.getElementById("history").innerHTML = html;

}

loadHistory();