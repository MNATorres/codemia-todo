

elementos = document.getElementById("elements");

input = document.getElementById("escribaAqui");
input.addEventListener("keyup", function(e) {
		
    textoNuevo = input.value;
    
    if (e.which == 13 && textoNuevo != "") {
        
        input.value = "";
        
        br = document.createElement("br");
        
        nuevoInput = document.createElement("input");
        
        nuevoInput.setAttribute("type", "checkbox");
        
        nuevoInput.setAttribute("value", textoNuevo);
        
        elementos.appendChild(br);
        
        elementos.appendChild(nuevoInput);
        
        elementos.innerHTML += textoNuevo;
    }
});

