var triangler = function(input) {

  function sortNumbers(a, b) {
    return a - b;
  }

  input.sort(sortNumbers); //sorts input for lowest to highest

  //define a b and c as side lengths from inputs
  var a = input[0];
  var b = input[1];
  var c = input[2];

  console.log(a);
  console.log(b);
  console.log(c);

  //checks if a triangle cannot be formed
  if((a + b) <= c){
    return "Invalid Input";
  }

  //checks for equilateral
  if((a === b) && (b === c)) {
    return "Equilateral";
  }

  //checks for isosceles
  if((a === b) || (b === c)) {
    return "Isosceles";
  }

  //checks for right triangle
  //isosceles right triangle cannot be made with integer inputs
  if( ((a*a) + (b*b))  === (c*c) ) {
    return "Scalene Right";
  }

  //all remaining triangles will be scalene
  return "Scalene";

};


$(document).ready(function() {

  $("form#triangle_input").submit(function(event) {
    var a = parseInt($("input#a").val());
    var b = parseInt($("input#b").val());
    var c = parseInt($("input#c").val());

    var outcome = triangler([a, b, c]);

    if(outcome === "Equilateral") {
      $("#output").text("an Equilateral triangle");
    }
    else if(outcome === "Isosceles") {
      $("#output").text("an Isosceles triangle");
    }
    else if(outcome === "Scalene") {
      $("#output").text("a Scalene triangle");
    }
    else if(outcome === "Scalene Right") {
      $("#output").text("a Scalene Right triangle");
    }
    else if(outcome === "Invalid Input") {
      $("#output").text("not a valid triangle");
    }

    $("#result").show();
    event.preventDefault();
  });

});
