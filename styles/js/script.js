$("#resultado").prop("readonly", true);

function verificarAno(ano){
    return ((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0);
}