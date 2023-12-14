function useLightTheme(){
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTheme() {
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)

const el = document.querySelector("#sub-text")
const text = "Desenvolvedor Front End"
const interval = 80;

function showText(el, text, interval) {

    const char = text.split("").reverse();

    const typer = setInterval(() => {
        if(!char.length) {
            return clearInterval(typer)
        }

        const next = char.pop();

        el.innerHTML += next;

    }, interval);

}

showText(el, text, interval)