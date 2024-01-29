const botonEncriptar = document.getElementById("botonEncriptar");
const mensagemFinal = document.getElementById("mensagemFinal");
const botonDescriptar = document.getElementById("botonDescriptar");
const homem = document.getElementById("homem");
const rightInfo = document.getElementById("rightInfo");
const botonCopiar = document.getElementById("botonCopiar");
const right = document.getElementById("right");

let remplazar = [
    ["e", "enter"],
		["050", "'-"],
		["91", "+."],
		["56", "?="],
		["96", "*¡"],
		["526", "¿_"],
		["36", "&#"],
		["ü", "050"],
		["w", "6ü9"],
		["a", "2w1"],
		["á", "5w1"],
		["x", "á5a"],
		["z", "á0x"],
		["h", "w1z"],
		["o", "6xw"],
		["ó", "7xw"],
		["l", "3oz"],
		["d", "x5z"],
		["i", "z7h"],
		["í", "z8h"],
		["j", "9dh"],
		["b", "j2d"],
		["é", "3ow"],
		["e", "6éo"],
		["g", "w3á"],
		["m", "b2d"],
		["c", "3d3"],
		["s", "o8j"],
		["k", "1x7"],
		["r", "3dü"],
		["v", "xsm"],
		["f", "dlr"],
		["y", "b5i"],
		["ú", "y1k"],
		["u", "yúw"],
		["n", "ójw"],
		["ñ", "x6b"],
		["t", "c3k"],
		["p", "yíd"],
		["q", "z0f"],
]

const remplace = (novoValor) =>{
	mensagemFinal.innerHTML = novoValor;
	homem.classList.add("oculto")
	textarea.value="";
	rightInfo.style.display = "none";
	botonCopiar.style.display = "block";
	right.classList.add("ajustar");
	mensagemFinal.classList.add("ajustar");
}

const reset = () =>{
	mensagemFinal.innerHTML = "";
	homem.classList.remove("oculto");
	rightInfo.style.display = "block";
	botonCopiar.style.display = "none";
     right.classList.remove("ajustar");
      mensagemFinal.classList.remove("ajustar");
	  textarea.focus();

}

botonEncriptar.addEventListener("click", ()=> {
    const texto = textarea.value.toLowerCase();
	if(texto != ""){
    function encriptar(newText){
        for(let i = 0; i < remplazar.length; i++){
            if(newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1])

            };
        };
        return newText;
    };
	}else{
		alert("Digite o texto para criptografar")
	}

	remplace(encriptar(texto));

});

botonDescriptar.addEventListener("click",() =>{
	const texto = textarea.value.toLowerCase();
	if(texto != ""){
	function desecriptar(newText) {
		for (let i = 38 ; i >= 0; i--){
			if(newText.includes(remplazar[i][1])) {
				newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
			};

		};
		return newText
	};
}else{
	alert("Digite o texto para descriptografar")
}
	const textoDesncriptado = desecriptar(texto);
	remplace(desecriptar(texto))
})
botonCopiar.addEventListener("click", ()=>{
	let texto = mensagemFinal;
	texto.select();
	document.execCommand('copy')
	alert("Texto Copiado");
	reset();

})
