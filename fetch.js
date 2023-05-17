var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.classList.add("row","m-3");

var column = document.createElement("div");
column.classList = "column";

row.append(column);
container.append(row);

var res=fetch("https://restcountries.com/v3.1/all")
res.then((data)=>data.json()).then((data1)=>foo(data1));

function foo(data1){
    for(var i=0;i<data1.length;i++){
        row.innerHTML +=`
        <div class="col-md-4">
        <div class="card border-primary mb-3 " style="width: 18rem; >
        <img src="${data1[i].flags.svg}" class="card-img-top" alt="country flags">
          <div class="card-body">
          <h5 class="card-title">Capital : ${data1[i].capital}</h5>
          <div class=" card-region"><h5>Region : ${data1[i].region}</h5></div>
          <div class=" card-latlng"><h5>Latlng : ${data1[i].latlng}</h5></div>
          <div class=" card-name"><h5>Name : ${data1[i].name.common}</h5></div> 
          <div class=" card-country code"><h5>Country code : ${data1[i].area}</h5></div>
          <button class = "btn btn-primary">Click for Weather</button>
          </div>
      </div>
      </div>`;
      document.body.append(container);
    }
}