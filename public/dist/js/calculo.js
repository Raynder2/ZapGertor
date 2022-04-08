var variantes = new Object();
var tabelas = new Object();
var tabelaValores = new Object();

function atualizar() {
    // Entradas
    preco_do_produto = doc.querySelector('#precodoproduto');
    redutor = doc.querySelector('#redutor');
    repasse = doc.querySelector('#repasse');
    desconto = doc.querySelector('#desconto');
    despesas = doc.querySelector('#despesas');
    pis_cofins_importacao = doc.querySelector('#pis-cofins-importacao');
    pis_cofins_credito = doc.querySelector('#pis-cofins-credito');
    ipi = doc.querySelector('#ipi');
    ii = doc.querySelector('#ii');
    frete = doc.querySelector('#frete');
    credito_icms = doc.querySelector('#credito-icms');
    difal_entrada = doc.querySelector('#difal-entrada');
    icms_st = doc.querySelector('#icms-st');
    preco_da_compra = doc.querySelector('#preco-da-compra');
    preco_de_custo = doc.querySelector('#preco-de-custo');
    operacao = doc.querySelector('#operacao');


    // Saidas
    icms_saida = doc.querySelector('#icms-saida');
    difal_fecp_saida = doc.querySelector('#difal-fecp-saida');
    icms_st_efetivo = doc.querySelector('#icms-st-efetivo');
    impostos_federais = doc.querySelector('#impostos-federais');
    desconto_concedido = doc.querySelector('#desconto-concedido');
    pis_cofins_debito = doc.querySelector('#pis-cofins-debito');
    ipi_saida = doc.querySelector('#ipi_saida');
    taxa = doc.querySelector('#taxa');
    comissao = doc.querySelector('#comissao');
    frete_saida = doc.querySelector('#frete_saida');
    custo_fixo = doc.querySelector('#custo-fixo');
    margem_calculada = doc.querySelector('#margem-calculada');
    preco_venda_informado = doc.querySelector('#preco-venda-informado');
    lucro_projetado = doc.querySelector('#lucro-projetado');
    carga_tributaria = doc.querySelector('#carga-tributaria');
    operacao = doc.querySelector('#operacao');

    // Controle / Variantes
    regime = document.querySelector('#regime');
    preco_de_venda = document.querySelector('#preco-de-venda');
    fornecedor = document.querySelector('#fornecedor');
    tipo_fornecedor = document.querySelector('#tipo-fornecedor');
    cliente = document.querySelector('#cliente');
    tipo_cliente = document.querySelector('#tipo-cliente');
    tipo_produto = document.querySelector('#tipo-produto');
    ncm = document.querySelector('#ncm');
    origem = document.querySelector('#origem');
    lista_do_produto = document.querySelector('#lista-do-produto');

    // Calculos
    preco_do_produto_v = parseFloat(preco_do_produto.value.replaceAll(".", "").replaceAll(",", "."));
    redutor_v = parseFloat(redutor.value.replace("%", "").replaceAll(".", "").replaceAll(",", "."));
    repasse_v = parseFloat(repasse.value.replace("%", "").replaceAll(".", "").replaceAll(",", "."))
    desconto_v = parseFloat(desconto.value.replace("%", "").replaceAll(".", "").replaceAll(",", "."))
    despesas_v = parseFloat(despesas.value.replaceAll(".", "").replaceAll(",", "."))
    pis_cofins_importacao_v = parseFloat(pis_cofins_importacao.value.replace("%", "").replaceAll(".", "").replaceAll(",", "."))
    pis_cofins_credito_v = parseFloat(pis_cofins_credito.value.replace("%", "").replaceAll(".", "").replaceAll(",", "."))
    ipi_v = parseFloat(ipi.value.replace("%", "").replaceAll(".", "").replaceAll(",", "."))
    ii_v = parseFloat(ii.value.replace("%", "").replaceAll(".", "").replaceAll(",", "."))
    frete_v = parseFloat(frete.value.replace("%", "").replaceAll(".", "").replaceAll(",", "."))
    credito_icms_v = parseFloat(credito_icms.value.replace("%", "").replaceAll(".", "").replaceAll(",", "."))
    difal_entrada_v = parseFloat(difal_entrada.value.replace("%", "").replaceAll(".", "").replaceAll(",", "."))
    icms_st_v = parseFloat(icms_st.value.replace("%", "").replaceAll(".", "").replaceAll(",", "."))
    preco_da_compra_v = parseFloat(preco_da_compra.value.replaceAll(".", "").replaceAll(",", "."))
    preco_de_custo_v = parseFloat(preco_de_custo.value.replaceAll(".", "").replaceAll(",", "."))

    function tipoCalculo(base, valor, calculo) {
        if (valor != 0) {
            if (calculo == 1) {
                decremento = decremento + valor
                return base - valor
            }
            else if (calculo == 2) {
                incremento += valor
                return base + valor
            }
        }
        else {
            return base
        }
    }

    decremento = 0
    incremento = 0

    temp = tipoCalculo(preco_do_produto_v, preco_do_produto_v * (redutor_v / 100), 1)
    temp = tipoCalculo(temp, temp * (repasse_v / 100), 1)
    temp = tipoCalculo(temp, temp * (desconto_v / 100), 1)

    temp = tipoCalculo(temp, temp * (pis_cofins_importacao_v / 100), 2)
    temp = tipoCalculo(temp, temp * (pis_cofins_credito_v / 100), 2)
    temp = tipoCalculo(temp, temp * (ipi_v / 100), 2)
    temp = tipoCalculo(temp, temp * (ii_v / 100), 2)
    temp = tipoCalculo(temp, frete_v, 2)
    temp = tipoCalculo(temp, temp * (credito_icms_v / 100), 1)
    temp = tipoCalculo(temp, temp * (difal_entrada_v / 100), 2)
    temp = tipoCalculo(temp, temp * (icms_st_v / 100), 2)


    preco_de_custo.value = temp.toFixed(2);
    // Atribuir mascara de real
    preco_de_custo.value = preco_de_custo.value.toString().replace(".", ",");


    // criarGraficoColunas(preco_de_custo.value, incremento, decremento)

    // adicionar style hover a elemento
    // document.querySelector('//*[@id="columnchart_values"]/div/div[1]/div/svg/g[2]/g[1]/g[2]/rect[3]').addEventListener('mouseover', function(){
    //     alert('teste')
    // })
}

function lerVariantes() {
    var variantes = new Object();
    document.getElementById("variantes").querySelectorAll(".varianteCampo").forEach(function (variante) {
        nome = variante.name.replaceAll("-", "_")
        variantes[nome] = variante
    })
}

function lerTabelaAtual(tabela) {
    tabelas = new Object()
    tabela.querySelectorAll(".campoTabela").forEach(function (campo) {
        nome = campo.name.replaceAll("-", "_")
        tabelas[nome] = campo
    })
}

function converterValores(tabela) {
    tabelaValores = new Object()
    tabela.querySelectorAll(".campoTabela").forEach(function (campo) {
        campoAux = campo.value.replaceAll('%', '')
        nome = campo.name.replaceAll("-", "_")
        efeito = 0

        if(campo.getAttribute('efeito') == 'subtrai'){
            efeito = 1
        }
        else if(campo.getAttribute('efeito') == 'soma'){
            efeito = 2
        }


        if (campo.value.includes('%')) {
            tabelaValores[nome] = [parseFloat(campoAux.replaceAll(".", "").replaceAll(",", ".")), '%',efeito]
        }
        else {
            tabelaValores[nome] = [parseFloat(campoAux.replaceAll(".", "").replaceAll(",", ".")), '$',efeito]
        }
    })
}

function mostrarValores() {
    for (var i in tabelaValores) {
    }
}

function calcularCusto() {
    cont = 0
    preco = tabelaValores['precodoproduto'][0]

    for (var i in tabelaValores) {
        if(tabelaValores[i][0] > 0 && i != 'precodoproduto' && i != 'preco_de_custo'){
            if (tabelaValores[i][1] == '%') {
                preco = tipoCalculo(preco, preco * (tabelaValores[i][0] / 100), tabelaValores[i][2])
            }
            if (tabelaValores[i][1] == '$') {
                preco = tipoCalculo(preco, tabelaValores[i][0], tabelaValores[i][2])
            }
        }
        cont++
    }
    tabelas['preco_de_custo'].value = preco.toFixed(2);
    // Atribuir mascara de real
    tabelas['preco_de_custo'].value = tabelas['preco_de_custo'].value.toString().replace(".", ",");
}

function tipoCalculo(base, valor, calculo) {
    console.log(base, valor, calculo)
    if (valor != 0) {
        if (calculo == 1) {
            decremento = decremento + valor
            return base - valor
        }
        else if (calculo == 2) {
            incremento += valor
            return base + valor
        }
    }
    else {
        return base
    }
}

$('.table-responsive.campos').change((tabela)=>{
    tabela = tabela.currentTarget
    lerTabelaAtual(tabela)
    converterValores(tabela)

    calcularCusto()
})