function calculateSavings(slider,cost){
    var saved = document.getElementById('saved');
    var slideval = document.getElementById('slideval');
    var cost = document.getElementById(cost).value;
    var calc = ((cost / costval)/slider);
    var savedvalue = (calc);
    saved.innerText = Math.floor(parseInt(costval.innerText)/parseInt(slider)) ;
    slideval.innerHTML = slider;
}

function update(costval, slider, cost){
  var display = document.getElementById("costval");
  display.innerHTML =  costval.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
  calculateSavings(slider,cost);
}