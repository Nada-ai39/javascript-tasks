function totaldays(year) {

    var total=year*365
    return total
}
var age=Number(prompt(`what is your age`))

var totalhours=totaldays(age)

document.write(`your age is ${totalhours} days<br><br>`)

function hours(totalhours) {
    var sum=totalhours*24
    document.write(`your age is ${sum} hours`) 
}
hours(totalhours)

