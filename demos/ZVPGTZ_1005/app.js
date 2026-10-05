document.addEventListener("DOMContentLoaded", () => {
    isEmpty('nev','Név');
    isEmpty('lakcim', 'Lakcím');
    isEmpty('kor', 'Kor');
    isEmpty('anyja', 'Anyja');
    isEmpty('kar', 'Kar');
    isEmpty('szak', 'Szak');
    isEmpty('diak', 'Diák');

});

function isEmpty(id, name) {
    let input = document.querySelector(`#${id}`).value;
    let label = document.getElementById(id + "Label");

    label.innerText = name;

    if (input.trim() === "") {
        console.log("Üres");
        label.innerText = `${name}*`;
    } else {
        console.log("Nem üres");
        label.innerText = `${name}`;
    }
}

function isValid(id, min, max) {
    const element = document.getElementById(id).value;
    let input = document.querySelector(`#${id}`).value;

    if (element >= min && element < max ) {
       element         
    }
}

