/* <h1>Mountains</h1>
<div id="mountains"></div> */
/* <script> */
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  
  function createTable() {
    var col, row, table;
    table = document.createElement('table');
    	const keys = Object.keys(MOUNTAINS[0]);
    	row = table.insertRow(0);
    	r.style.fontWeight = "bold";
        col = row.insertCell(0);
        col.innerHTML = keys[0];
        col = row.insertCell(1);
        col.innerHTML = keys[1];
      	col = row.insertCell(2);
        col.innerHTML = keys[2];

    for (let i=0; i<MOUNTAINS.length; i++) {
      	row = table.insertRow(i+1);
        col = row.insertCell(0);
        col.innerHTML = MOUNTAINS[i].name;
        col = row.insertCell(1);
        col.innerHTML = MOUNTAINS[i].height;
      	col.style.textAlign = "right";
      	col = row.insertCell(2);
        col.innerHTML = MOUNTAINS[i].place;
    }
    document.getElementById("mountains").appendChild(table);
};
  createTable();
// </script>
