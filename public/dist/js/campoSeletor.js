// Listar seletores de um campo especifico (Configurações)
function listarSeletoresCadastrados(referencia) {
    $.ajax({
        url: url+'formPreco/listarSeletoresCadastrados',
        type: 'POST',
        data: {referencia: referencia},
        success: function (data){
            var html = '';
            data = data.split('</div>')[1];
            data = JSON.parse(data);
            for (var i = 0; i < data.length; i++) {
                html += '<option value="'+data[i].id+'">'+data[i].nome+'</option>';
            }
            $('#seletores').html(html);
        }
    })
}

// Listar todos os campos cadastrados (Configurações)
function listarCamposCadastrados(referencia) {
    $.ajax({
        url: url+'formPreco/listarCamposCadastrados',
        type: 'POST',
        data: {referencia: referencia},
        success: function (data){
            var html = '';
            data = data.split('</div>')[1]
            data = JSON.parse(data);
            for (var i = 0; i < data.length; i++) {
                html += '<option value="'+data[i].id+'">'+data[i].nome+'</option>';
            }
            $('#campos').html(html);
        }
    })
}

// Listar seletores no painel de criação (Funcionalidade indefinida)
function listarCamposSelecionados(referencia) {
    lista = ['empresaCampos', 'entradasCampos', 'saidasCampos', 'controleCampos']
    lista.forEach((item) => {
        document.getElementById(item).style.display = 'none';
    });
    if(referencia == 'painel'){
        referencia = $('#categoria').val()+'sCampos';
    }
    else{
        referencia += 'Campos';
    }
    document.getElementById(referencia).style.display = 'block';
    
}

// Excluir seletor (Configurações)
function excluir_seletor(seletor){
    $.ajax({
        url: url+'formPreco/exluirGeral/',
        type: 'POST',
        data: {seletor: seletor},
        success: function (data){
            resposta = JSON.parse(data.split("resultadoJson")[1]);
            
            swal.fire(resposta.mensagem, '', resposta.status);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    })
}