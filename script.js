function compute()
{
    // get values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //calculate interest
    var interest = principal * years * rate /100; 
    //convert year 
    var year = new Date().getFullYear()+parseInt(years);
    //calculate total amount
    var amount=parseInt(principal)+interest;
    if (principal>0) {
        // check for validation
        document.getElementById("result").innerHTML="<br>If you deposit <mark>"+principal+"</mark>,<br> at an interest rate of <mark>"+rate+"%</mark>.<br> You will receive an amount of <mark>"+amount+"</mark>,<br> in the year <mark>"+year + "</mark>."
    }
    else{
        // alert if invalid values
        alert('Enter a valid principal.')
        document.getElementById('principal').focus()
    }
}
function updateRate() 
{
    // update rate as slider changes
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        