<header>
    <div class="menu-header">
        <div class="logo">
            <img height="55px" src="logo.png" alt="">
        </div>
        <div class="nome-empresa">
            <span>LOBE CONSULTORIA</span>
        </div>
    </div>
</header>

<div class="menu-lateral">
    <nav>
        <ul>
            <li><img src="home.png"></li>
            <li><img src="home.png"></li>
            <li><img src="home.png"></li>
            <li><img src="home.png"></li>
        </ul>
    </nav>
</div>

<div class="conteudo-central">
    <!--estoque de produtos-->

    <nav class="opcoes-edicao">
        <ul>
            <li class="ativo">Campos</li>
            <li class="">Aliquotas</li>
            <li class="">Regras</li>
        </ul>
    </nav>

    <div class="caixa-de-pesquisa">
        <input type="text" placeholder="Pesquisar"> <button>CADASTRAR</button>
    </div>

    <!-- tabela -->
    <div class="tabela">
        <table border="1" cellpadding="4">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Familia</th>
                    <th>Tipo</th>
                    <th>Visivel</th>
                    <th>Editável</th>
                    <th>Açõoes</th>
                </tr>
            </thead>
            <tbody>
                <?php for ($i = 0; $i < 10; $i++) {
                ?>
                    <tr>
                        <td>Raynder Cardoso de Carvalho 1999</td>
                        <td>Cardoso Carvalho Silva Santos Sousa</td>
                        <td>2</td>
                        <td>sim</td>
                        <td>nao</td>
                        <td>apagar</td>
                    </tr>

                <?php
                } ?>
            </tbody>
        </table>
    </div>

    <div class="divPagination">
        <ul class="pagination">
            <li><a href="#">«</a></li>
            <li><a href="#">1</a></li>
            <li><a class="active" href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
            <li><a href="#">7</a></li>
            <li><a href="#">»</a></li>
        </ul>
    </div>


</div>