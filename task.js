let randomNum = Math.floor(Math.random() * 100) + 1;
let num = document.querySelector("#num");
let send = document.querySelector("#send");
let text = document.createElement("p");
document.body.appendChild(text);
send.addEventListener("click", () => {
    if (num.value > randomNum)
        text.textContent = "הכנסת מספר גדול יותר מהמספר המוגרל";
    else if (num.value < randomNum)
        text.textContent = "הכנסת מספר קטן יותר מהמספר המוגרל";
    else {
        num.remove();
        send.remove();
        text.remove();
        let h2 = document.createElement("h2");
        h2.textContent = "🎉🎊 ניצחון!!! ";
        document.body.appendChild(h2);
    }
})