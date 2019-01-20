

var student;
$(document).ready(function(){
    $("button#new").click(function(){
    $(".bank").hide();
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

// Front end logic
function Account(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  
  Account.prototype.deposit = function(amount) {
    if (this._isPositive(amount)) {
      this.balance += amount;
      console.info(`Deposit: ${this.name} new balance is ${this.balance}`);
      return true;
    }
    return false;
  }
  Account.prototype.withdraw = function(amount) {
    if (this._isAllowed(amount)) {
      this.balance -= amount;
      console.info(`Withdraw: ${this.name} new balance is ${this.balance}`);
      return true;
    }
    return false;
  }
  // bussiness logic
  