// Front- End Logic

// function check() {
//     // var antibiot = document.querySelector('#amoxi:checked').value;
//     var antibiot500 = document.querySelector('#amoxi500:checked').value;
//     console.log(antibiot500);
// //     var painKiller = document.pharmacy.painKiller.value;
// //     console.log("painKiller")
// //     var AntimalarialDrugs = document.pharmacy.AntimalarialDrugs.value;
// //     console.log("AntimalarialDrugs")
// //     var price = 0;
// //    var ad=0;

// //     if (antibiot == 0) {
// //         price = price + 1000;
// //     };
    
    
// //     if (!painKiller ==true ) {
// //         price += ad;
// //     }else{
// //   price +=400;
// //     }
// //     ;
    
// //     if (AntimalarialDrugs == 0) {
// //         price = price + 2500;
// //     }

// //     console.log("price")
// //     document.getElementById("price").style.visibility = "visible";
// //     document.getElementById("correctNumber").innerHTML = "HERE IS YOUR TOTAL PRICE: " + price ;
// //     console.log("price")

// };

// Business-Logic
var student;
$(document).ready(function(){
    $("button#new").click(function(){
    $(".gikweri").hide();
    $(".container1").show();

    var name =$('#namee').val();
    
    $('#dg').text(name);

    var student =$('#initial').val();
    console.log(student)
    $('#mg').text(student);

    $("#submit").click(function(){
        var kub = parseInt($('#kubitsa').val());
        var withdr = parseInt($('#kubikuza').val());
        
        var sum = kub + parseInt(student);
        $('#mg').text(sum);
        // var sub =parseInt(student)-withdr;
        // $('#mg').text(sub);

       
    });

});

});

