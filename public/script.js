const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

enterButton.addEventListener('click', (event) => {
  
 
  getresults(input.value);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  console.log(heightRef)
  const resp = await fetch(`http://localhost:3000/api/${heightRef}`);
  const data = await resp.json();
  console.log('data from back', data);

  console.log(data)
  renderPlayers(data);
}
function renderPlayers(players) {
  tbody.innerHTML="";
  for(let  i=0;i<players.length;i+=2){
    console.log(players[i])
    const row = document.createElement("tr");
    row.innerHTML = renderRow(players[i],players[i+1],(i/2)+1);
    tbody.appendChild(row);
  }
    
  }
function renderRow(player1,player2,pos) {
  const template = `
  <tr>
  <td>${pos}</td> 
  <td>${player1.last_name}</td> 
  <td>${player2.last_name}</td>
  </tr>`;
  return template;
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
