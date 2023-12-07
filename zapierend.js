
import fetch from "node-fetch";
/*
// Query 1: return a list of boards

let query = '{ boards (limit:5) {name id} }';

 fetch ("https://api.monday.com/v2", {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI4MjUxNTA2OSwiYWFpIjoxMSwidWlkIjo0MDI5MzI0MiwiaWFkIjoiMjAyMy0wOS0xOFQxMjo0OTo1MS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MTE2MDQsInJnbiI6InVzZTEifQ.ASCJR972S_J1joh-CVgYDyEN3RWHS1NIiq_stKSlq1U',
    },
    body: JSON.stringify({
        'query' : query
    })
})
  .then(res => res.json())
  .then(res => {
    console.log(JSON.stringify(res));
})
*/

// Query 2: return items and column data for a single board
/*
let query2 = '{boards(limit:1) { name id description items { name column_values{title id type text } } } }';

fetch ("https://api.monday.com/v2", {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI4MjUxNTA2OSwiYWFpIjoxMSwidWlkIjo0MDI5MzI0MiwiaWFkIjoiMjAyMy0wOS0xOFQxMjo0OTo1MS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MTE2MDQsInJnbiI6InVzZTEifQ.ASCJR972S_J1joh-CVgYDyEN3RWHS1NIiq_stKSlq1U'
    },
    body: JSON.stringify({
        'query' : query2
    })
})
.then(res => res.json())
.then(res => {
  console.log(JSON.stringify(res));
})
*/

/*
// Query 3: Create a new item on a board

let query3 = 'mutation{ create_item (board_id:148203423, item_name:\"WHAT IS UP MY FRIENDS!\") { id } }';

fetch ("https://api.monday.com/v2", {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI4MjUxNTA2OSwiYWFpIjoxMSwidWlkIjo0MDI5MzI0MiwiaWFkIjoiMjAyMy0wOS0xOFQxMjo0OTo1MS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MTE2MDQsInJnbiI6InVzZTEifQ.ASCJR972S_J1joh-CVgYDyEN3RWHS1NIiq_stKSlq1U'
    },
    body: JSON.stringify({
        'query' : query3
    })
})
.then(res => res.json())
.then(res => {
  console.log(JSON.stringify(res));
})

*/
/*
// Query 4: Create a new item, using variables

let query4 = 'mutation ($myItemName: String!) { create_item (board_id:148203423, item_name:$myItemName) { id } }';
let vars = {"myItemName" : "Hello, world!"};

fetch ("https://api.monday.com/v2", {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI4MjUxNTA2OSwiYWFpIjoxMSwidWlkIjo0MDI5MzI0MiwiaWFkIjoiMjAyMy0wOS0xOFQxMjo0OTo1MS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MTE2MDQsInJnbiI6InVzZTEifQ.ASCJR972S_J1joh-CVgYDyEN3RWHS1NIiq_stKSlq1U'
    },
    body: JSON.stringify({
        'query' : query4,
        'variables' : JSON.stringify(vars)
    })
})
.then(res => res.json())
.then(res => {
  console.log(JSON.stringify(res));
})
*/

/*

// Query 5: Create a new item and populate column values
let query5 = 'mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:541328696, item_name:$myItemName, column_values:$columnVals) { id } }';
let vars1 = {
  "myItemName" : "Hello, world!",
  "columnVals" : JSON.stringify({
    "status" : {"label" : "Done"},
    "date4" : {"date" : "2020-08-27"}
  })
};

fetch ("https://api.monday.com/v2", {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI4MjUxNTA2OSwiYWFpIjoxMSwidWlkIjo0MDI5MzI0MiwiaWFkIjoiMjAyMy0wOS0xOFQxMjo0OTo1MS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MTE2MDQsInJnbiI6InVzZTEifQ.ASCJR972S_J1joh-CVgYDyEN3RWHS1NIiq_stKSlq1U'
    },
    body: JSON.stringify({
        'query' : query5,
        'variables' : JSON.stringify(vars1)
    })
})
.then(res => res.json())
.then(res => {
  console.log(JSON.stringify(res));
})
*/
