function calcularSoma()
{
    const campoA = document.getElementById("valorA").value;
    const campoB = document.getElementById("valorB").value;

    const numeroA = parseFloat(campoA);
    const numeroB = parseFloat(campoB);

const total = numeroA + numeroB;
document.getElementById("resultado").innerText = `Total: ${total}`;
console.log(`Cáulculo efetuado: ${numeroA} + ${numeroB} = ${total}`);
}