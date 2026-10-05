const form = document.getElementById("diakForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let helyes = true;

    document.querySelectorAll("input").forEach(function (input) {
        input.classList.remove("hibas");
    });

    document.querySelectorAll(".hiba").forEach(function (hiba) {
        hiba.innerText = "";
    });

    const nev = document.getElementById("nev");

    if (nev.value.trim() === "") {
        hiba("nev", "A név megadása kötelező!");
        helyes = false;
    }

    const lakcim = document.getElementById("lakcim");

    if (lakcim.value.trim() === "") {
        hiba("lakcim", "A lakcím megadása kötelező!");
        helyes = false;
    }

    const kor = document.getElementById("kor");

    if (kor.value.trim() === "") {
        hiba("kor", "A kor megadása kötelező!");
        helyes = false;

    } else if (!/^\d+$/.test(kor.value)) {
        hiba("kor", "A kor csak szám lehet!");
        helyes = false;

    } else if (Number(kor.value) <= 18 || Number(kor.value) >= 100) {
        hiba("kor", "A kor 18-nál nagyobb és 100-nál kisebb kell legyen!");
        helyes = false;
    }

    const anyja = document.getElementById("anyja");

    if (anyja.value.trim() === "") {
        hiba("anyja", "Az anyja nevének megadása kötelező!");
        helyes = false;
    }

    const egyetem = document.getElementById("egyetem");

    if (egyetem.value.trim() === "") {
        hiba("egyetem", "Az egyetem nevének megadása kötelező!");
        helyes = false;
    }

    const kar = document.getElementById("kar");

    if (kar.value.trim() === "") {
        hiba("kar", "A kar nevének megadása kötelező!");
        helyes = false;
    }

    const szak = document.getElementById("szak");

    if (szak.value.trim() === "") {
        hiba("szak", "A szak nevének megadása kötelező!");
        helyes = false;
    }

    const diak = document.getElementById("diak");

    if (diak.value.trim() === "") {
        hiba("diak", "A diákigazolvány szám megadása kötelező!");
        helyes = false;

    } else if (!/^\d{11}$/.test(diak.value)) {
        hiba(
            "diak",
            "A diákigazolvány szám pontosan 11 számjegyből kell álljon!"
        );
        helyes = false;
    }

    const adatkezeles = document.getElementById("adatkezeles");

    if (!adatkezeles.checked) {
        document.getElementById("adatkezelesHiba").innerText =
            "Az adatkezelési szabályzat elfogadása kötelező!";

        helyes = false;
    }

    if (helyes) {
        alert("Az űrlap sikeresen elküldve!");
        form.submit();
    }
});

function hiba(id, uzenet) {
    const input = document.getElementById(id);
    const hibaElem = document.getElementById(id + "Hiba");

    input.classList.add("hibas");
    hibaElem.innerText = uzenet;
}
