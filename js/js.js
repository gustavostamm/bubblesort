function randomNumbers() {
    var x = document.getElementById("combobox").value;
    var array = [];
    for (var i = 0; i < x; i++) {
        array[i] = (Math.ceil(Math.random() * 10000));

    }
    insertData(array); 
}

function insertData(number) {
    var x = document.getElementById("random");
    x.innerHTML = number;
}

function arrayTest(){
    var x = document.getElementById("random").value.split(',');
    for(var i = 0; i < x.length; i++){
        x[i] = parseInt(x[i], 10);
    }
    return x;
}

function bubbleSort() {
    var numbers = arrayTest();
    console.log(numbers);
    var ti = performance.now();
    
    do {
        var x = false;
        for (var i = 0; i <= numbers.length; i++) {
            if (numbers[i] > numbers[i + 1]) {
                var temp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = temp;
                x = true;
              
            }
        }
    } while (x == true);

    var tf = performance.now();

    document.getElementById("timer").innerHTML = (tf - ti) / 1000 + " seconds to sort de numbers!";
    var final = document.getElementById("random2");
    final.innerHTML = numbers;
}