function validarCPF() {
    /*Vetor para armazenar os dígitos do CPF*/
    var num = new Array(14);

    /*Obtém o valor do CPF do input HTML*/
    var CPF = document.getElementById("CPF").value;

    // Remove pontos e traços, se existirem
    CPF = CPF.replace(/[.-]/g, '');

    // Inicializa variáveis
    var Tamanho = CPF.length;
    var Multiplicador = 10;
    var Soma = 0;

    if (Tamanho !== 11 || !/^\d{11}$/.test(CPF)) 
    {
        document.getElementById("validacao").innerHTML = "Inválido";
        return;
    }

    for (var i = 0; i < 9; i++) 
    {
        num[i] = parseInt(CPF.charAt(i));
        Soma += num[i] * Multiplicador;
        Multiplicador--;
    }

    var Resto = (Soma * 10) % 11;
    num[9] = (Resto === 10) ? 0 : Resto;

    Soma = 0;
    Multiplicador = 11;

    for (var j = 0; j < 10; j++) 
    {
        Soma += num[j] * Multiplicador;
        Multiplicador--;
    }

    Resto = (Soma * 10) % 11;
    num[10] = (Resto === 10) ? 0 : Resto;

    // Verifica se os dígitos finais correspondem aos dígitos originais do CPF
    if (parseInt(CPF.charAt(9)) === num[9] && parseInt(CPF.charAt(10)) === num[10]) 
    {
        document.getElementById("validacao").innerHTML = "Válido";
    } 
    else 
    {
        document.getElementById("validacao").innerHTML = "Inválido";
    }
}