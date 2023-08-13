function calculate() {
    const n1 = parseFloat(document.getElementById("n1").value);
    const p1 = parseFloat(document.getElementById("p1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const p2 = parseFloat(document.getElementById("p2").value);
     // Verificar si hay datos ingresados

     const p3 = p1 + p2 - 100;
     const n3 = ((3.0 - n1 * (p1 / 100) - n2 * (p2 / 100)) / (p3 / 100));
     
     const resultMessage = document.getElementById("result-message");
     const finalGrade = document.getElementById("final-grade");
     const resultDiv = document.getElementById("result");
     resultDiv.classList.add("show"); // Agregar la clase show para mostrar con animación
     
     resultMessage.textContent = `Necesitas obtener ${Math.abs(n3.toFixed(2))} en el tercer corte para completar el ${Math.abs(p3.toFixed(2))}% del total.`;
    resultDiv.classList.remove("hidden");
    resultDiv.classList.add("show");
}

function closeResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("show");
    setTimeout(() => {
        resultDiv.classList.add("hidden");
    }, 500);
}

document.addEventListener("keydown", handleEnterKey);

function handleEnterKey(event) {
    if (event.key === "Enter") {
        const currentIndex = parseInt(document.activeElement.dataset.index);
        if (currentIndex >= 1 && currentIndex <= 4) {
            const nextIndex = (currentIndex % 4) + 1;
            const nextInput = document.querySelector(`input[data-index="${nextIndex}"]`);
            nextInput.focus();
        } else if (currentIndex === 4) {
            calculate(); // Activa el cálculo al presionar Enter en el último campo
        }
    }
}

// Función para mostrar mensaje emergente
function showMessage(message) {
    const messageBox = document.getElementById("message-box");
    const messageContent = document.getElementById("message-content");
    messageContent.textContent = message;

    messageBox.classList.remove("hidden");
    messageBox.classList.add("show");
}

// Función para cerrar mensaje emergente
function closeMessage() {
    const messageBox = document.getElementById("message-box");
    messageBox.classList.remove("show");
    setTimeout(() => {
        messageBox.classList.add("hidden");
    }, 300);
}

// Agregar evento de clic en el cuerpo del documento para cerrar el mensaje emergente
document.addEventListener("click", (event) => {
    const messageBox = document.getElementById("message-box");
    const closeMessageButton = document.getElementById("close-message");
    
    // Si se hace clic en el botón de cerrar o fuera del mensaje emergente, cerrarlo
    if (event.target === messageBox || event.target === closeMessageButton) {
        closeMessage();
    }
});


const closeMessageBox = document.getElementById("close-message");
closeMessageBox.addEventListener("click", closeMessage);
