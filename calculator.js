let a = '';
let b = '';
let sign = '';
let finish = false;

const digits = ['00', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operations = ['+', '-', '*', '/'];
//screen
const out = document.querySelector('.calcscreen p');

// функция очистки 
function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //нажата не кнопка
    if (!event.target.classList.contains("btn")) return;
    //нажата кнопка clearAll ac
    if (event.target.classList.contains("ac")) return;
    out.textContent = '';
    //получаю нажатую кнопку
    const key = event.target.textContent;
    //
    if (digits.includes(key)) {
        if (b==='' && sign==='') {
            a += key;
            console.log(a, b, sign);
            out.textContent = a;
        } else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textConent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
    };
    //усли нажата знаки операторов
    if (operations.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    // нажата =
    if (key === "=") {
        if (b==='') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "*":
                a = a * b;
                break;
            case "/":
                if (b==="0") {
                    out.textContent ='Error';
                    a='';
                    b='';
                    sign='';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
};




/* buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
          display.value = eval(display.value); //плахая практика-вред безопасности
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id == "de") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id;
        }
    });
}); */