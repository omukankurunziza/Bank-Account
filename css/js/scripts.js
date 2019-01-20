

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
        var deposit2 = parseInt($('#bety').val());
        var deposit = deposit2 + parseInt(student);
        $('#mo').text(deposit);
       

    })
    
    }
    
    $("button#ndo").click(function(){
        var deposit1=$('#mo').val();
        console.log(deposit1)
        $('#mo1').text(deposit1)

        var deposit24 = parseInt($('#ruku').val());
        var sum2 = parseInt(deposit1)-deposit24;
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
