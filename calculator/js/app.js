var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/**
 * all button event
 * @param   {objects}  item  object of clicked elements
 * @param   {object}   btn   particular element
 * @return  {int}            display output on screen
 */
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        switch (btntext) {
            case '×':
                btntext = '*';
                break;
            case '÷':
                btntext = '/';
                break;
            case 'mod':
                btntext = '%';
                break;
        }
        screen.value += btntext;
    });
}


/**
 * factoriyal 
 *
 * @return  {int}  return the factorial
 */
function fact() {
    var i, num, f;
    if (screen.value == 0) {
        f = 0;
    } else {
        f = 1;
    }
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;

    screen.value = f;
}


// e value
function e() {
    if (screen.value == 0) {
        screen.value = Math.E;
    } else {
        screen.value = screen.value * Math.E;
    }
}


/** Trigno Functions */
function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function cot() {
    screen.value = Math.cot(screen.value);
}


/**
 * handle all type of memory opeartions 
 *
 * @param   {string}  opration  take which opeartion to perform
 *
 * @return  {int}            return result of an expersion
 */
function memory(opration) {
    var memory = document.getElementById("memory");
    screen.value = eval(screen.value);

    if (isNaN(screen.value) != false && opration != 'r') {
        screen.value = "Error";
    } else {
        switch (opration) {
            case '+':
                screen.value = parseInt(memory.value) + parseInt(screen.value);
                break;
            case '-':
                screen.value = parseInt(memory.value) - parseInt(screen.value);
                break;
            case 'c':
                screen.value = 0;
                break;
            case 'r':
                screen.value = memory.value;
                // alert(screen.value);
                break;
        }
        memory.value = screen.value;
    }

}

/**
 * convert normal number to expontaiol
 *
 * @return  {exponation}  returned exponation number
 */
function fe() {
    var num = parseInt(screen.value);
    screen.value = num.toExponential();

}

/**
 * change trignometry function to inverse trigno function
 */
function change() {

    var state = document.getElementById('snd');
    var btn_2nd = document.getElementById("ndd");
        
    switch (state.value) {
        case '0':
            document.getElementById('dd1').style.display = "none";
            document.getElementById('dd2').style.display = "";
            state.value = "1";
            btn_2nd.innerHTML = "1<sup>st</sup>";
            btn_2nd.classList.add("back");
            break;

        case '1':
            document.getElementById('dd1').style.display = "";
            document.getElementById('dd2').style.display = "none";
            btn_2nd.innerHTML = "2<sup>nd</sup>";
            state.value = "0";
            btn_2nd.classList.remove("back");
            break;
    }
}


function backspc()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
}


function pow() {
    screen.value = Math.pow(screen.value, 2);
}



function sqrt() {
    screen.value = Math.sqrt(screen.value, 1 / 2);
}

function exp() {

    screen.value = Math.exp(screen.value);

}

function pi() {
    if (screen.value == 0) {
        screen.value = 3.14;
    } else {
        screen.value = screen.value * Math.PI;
    }
}

function log() {
    screen.value = Math.log10(screen.value);
}

function ln() {
    screen.value = Math.log(screen.value);
}


function divide() {
    screen.value = 1 / screen.value;
}

function powx() {
    screen.value = 10 ** screen.value;
}
