
// fetch('http://localhost:3000/UsersData',rules).then((res) => {
//     console.log(res.json())
// })

// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
    //         'Content-Type': 'application/json'
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }

const table = document.getElementById("table-total-part")

$(document).ready(() => {
    $.getJSON('data.json',(response) => {
        return response.map((value) => {
            // console.log(value)
            const tableItem = `
            <thead>
            <tr class="table-row">
                <tr class="table-row">
                <th scope="row"></th>
                <th scope="row" class="td-data" id="td-1">${value.question1 ? value.question1 : "" }</th>
                <th scope="row" class="td-data">${value.question2 ? value.question2 : ""}</th>
                <th scope="row" class="td-data">${value.question3 ? value.question3 : "" }</th>
                <th scope="row" class="td-data">${value.question4 ? value.question4 : ""}</th>
                <th scope="row" class="td-data">${value.question5 ? value.question5 : ""}</th>
                <th scope="row" class="td-data">${value.question5 ? value.question6 : ""}</th>
                <th scope="row" class="td-data">${value.question5 ? value.question7 : ""}</th>
                <th scope="row" class="td-data">${value.question5 ? value.question8 : ""}</th>
                <th scope="row" class="td-data">${value.question5 ? value.question9 : ""}</th>
                <th scope="row" class="td-data">${value.question5 ? value.question10 : ""}</th>
                <th scope="row" class="td-data">${value.question5 ? value.question11 : ""}</th>
                <th scope="row" class="td-data">${value.question5 ? value.question12 : ""}</th>
                </tr>
            </tr>
            </thead>

            <tbody>
            <tr class="table-row">
                <th scope="row" id="thead">${value.name}</th>

                <td class="td-data"><div class="data-part">${value.ConceptsLearnedInWorkshop}</div></td>

                <td class="td-data"><div class="data-part">${value.eurekaMoments}</div></td>

                
                <td class="td-data"><div class="data-part">${value.contributionOfTeam}</div></td>
                
                <td class="td-data"><div class="data-part">${value.challenges}</div></td>
                
                <td class="td-data"><div class="data-part">${value.ProblemWithTeam}</div></td>
            
                <td class="td-data"><div class="data-part">${value.ProblemWithTeam1 ? value.ProblemWithTeam1 : "" }</div></td>
                
                </tr>
                
            </tbody>`

            table.innerHTML += tableItem
        })
    })
})
 
        const rows = Array.from(document.querySelectorAll('tr'));
        function slideOut(row) {
          row.classList.add('slide-out');
        }
        
        function slideIn(row, index) {
            setTimeout(function() {
                row.classList.remove('slide-out');
          }, (index + 5) * 200);  
        }
        
        rows.forEach(slideOut)
        
        rows.forEach(slideIn);
        
        
        let rules = {
    url:'http://localhost:3000/userdata',
    method: "get",
    // mode : "no-cors",
    // headers : {
    //     "Content-Type" : "application/json",
    //     "Access-Control-Allow-Origin" : "*", 
    //     "Access-Control-Allow-Credentials" : true 
    // },

    // body: JSON.stringify()
}

                // fetch('http://localhost:3000/userdata',rules).then((data) => {
                //         return data.json()
                // }).then((data) => console.log(data))
        
        async function fetchdata() {
            const data = await axios.get('http://localhost:3000/userdata')
            console.log(data,"response")
        }
        fetchdata()