

var student;
$(document).ready(function(){
    $("button#new").click(function(){
    $(".gikweri").hide();
    $(".container1").show();

    var name =$('#namee').val();
    
    $('#oppo').text(name);

    var student =$('#initial').val();
    console.log(student)
    $('#ange').text(student);

    if ($("button#submt")) {

        $("button#submt").click(function(){
        var deposi = parseInt($('#bety').val());
        var deposit1 = deposi + parseInt(student);
        $('#mo').text(deposit1);
       

    })
    
    }
    
    $("button#ndo").click(function(){
        var deposit2=$('#mo').val();
       
        $('#mo1').text(deposit2)

        var Withdraw = parseInt($('#ruku').val());
        var sum2 = parseInt(student)- Withdraw;
        console.log(sum2)
        $('#mo1').text(sum2);
    
    
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
  document.getElementById("mo").innerHTML="Current Balance: " +  deposit1 + "";
  document.getElementById("mo1").innerHTML="Current Balance: " +  sum2 + "";
  // bussiness logic
