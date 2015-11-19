// function calctip () {
//   var dollars = document.getElementById("money").value.replace('$', "");
//   var tip = dollars * .2 ;
//   var fixed = tip.toFixed(2);
//   var content = document.getElementById("total").innerHTML ="You should tip $" + fixed;
// };

var button = document.getElementById('paper');
button.addEventListener('click', function calctip ()
  { var dollars = document.getElementById('money').value.replace('$',"");
  var tip = dollars * .2;
  var fixed = tip.toFixed(2);
  var content = document.getElementById('total').innerHTML = "You should tip $" + fixed;
});
