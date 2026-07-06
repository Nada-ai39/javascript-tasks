function abrag(day, month) {

    if ((day >= 21 && month == 3) || (day <= 19 && month == 4)) {
        document.write("الحمل");
    }
    else if ((day >= 20 && month == 4) || (day <= 20 && month == 5)) {
        document.write("الثور");
    }
    else if ((day >= 21 && month == 5) || (day <= 20 && month == 6)) {
        document.write("الجوزاء");
    }
    else if ((day >= 21 && month == 6) || (day <= 22 && month == 7)) {
        document.write("السرطان");
    }
    else if ((day >= 23 && month == 7) || (day <= 22 && month == 8)) {
        document.write("الأسد");
    }
    else if ((day >= 23 && month == 8) || (day <= 22 && month == 9)) {
        document.write("العذراء");
    }
    else if ((day >= 23 && month == 9) || (day <= 22 && month == 10)) {
        document.write("الميزان");
    }
    else if ((day >= 23 && month == 10) || (day <= 21 && month == 11)) {
        document.write("العقرب");
    }
    else if ((day >= 22 && month == 11) || (day <= 21 && month == 12)) {
        document.write("القوس");
    }
    else if ((day >= 22 && month == 12) || (day <= 19 && month == 1)) {
        document.write("الجدي");
    }
    else if ((day >= 20 && month == 1) || (day <= 18 && month == 2)) {
        document.write("الدلو");
    }
    else if ((day >= 19 && month == 2) || (day <= 20 && month == 3)) {
        document.write("الحوت");
    }
    else {
        document.write("تاريخ غير صحيح");
    }
}

var day = Number(prompt("What is your birth day?"));
var month = Number(prompt("What is your birth month?"));

abrag(day, month);
