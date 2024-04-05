# calculocpf
codigo em javascript que usa getelementbyid em um form do html, calcula o valor de um cpf para ver sua veracidade, e retorna em um span em tempo real.
//codigo em html
<form action="" method="get" id="formulario_sorteio" name="formulario_sorteio">
                            <h3>Participe do sorteio!</h3>
                            <label for="Nome_sorteio"></label>
                            <input type="text" placeholder="Nome" id="Nome_sorteio" name="Nome_sorteio" class="form-control" required>
                            <br>

                            <label for="Sobrenome_sorteio"></label>
                            <input type="text" placeholder="Sobrenome" id="Sobrenome_sorteio" name="Sobrenome_sorteio"
                                class="form-control" required> <br>

                            <label for="CPF"></label>
                            <input type="text" placeholder="Insira o seu CPF" id="CPF" name="CPF" class="form-control"
                                onblur="validarCPF()"><span id="validacao" class="form-control">...</span>

                            <label for="Email"></label>
                            <input type="email" placeholder="Informe o seu Email para contato" id="Email" name="Email"
                                class="form-control" required> <br>

                            <input type="button" id="Enviar" name="Enviar" value="Enviar" class="btn btn-primary mb-3"
                                onclick="Enviar_Sorteio()">
                            <input type="button" id="Ganhador" name="Ganhador" value="Ganhador"
                                class="btn btn-primary mb-3" onclick="Ganhador_Sorteio()">
                        </form>
                        <div id="Resultado">

                        </div>
//codigo em java
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
