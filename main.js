var rigester = document.querySelector(".registerForm")
console.log(rigester)
var coins = ""
rigester.onsubmit = function (e) {
    e.preventDefault();
    var elements = e.target.elements;
    var dollar = elements[1];
    console.log(dollar[0])
    console.log(dollar[0] == true)
    if (dollar[0] == true)
        console.log(elements[0].text * 3.14)
    else
    console.log("wring")

    //     e.preventDefault();
    //     var elements = e.target.elements;
    //     var val=elements[exchange].target.elements[dollar].value
    //     if (val == true)
    //         var coin =val.text * 3.14;
    //     document.querySelector(".result").textContent = (coin)
}