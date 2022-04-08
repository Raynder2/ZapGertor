<div class="conteudo-central">
    <div class="painel">
            <div class="add" onclick="openInfo()">
                Adicionar Tarefa
            </div>
        </div>

        <div class="boards">
            <div class="board">
                <h3>Todo</h3>
                <div class="dropzone">
                    <div class="card" draggable="true">
                        <div class="status green"></div>
                        <div class="content">Videos</div>
                    </div>
                </div>
            </div>
            <div class="board">
                <h3>In Progresso</h3>
                <div class="dropzone">
                    <div class="card" draggable="true">
                        <div class="status blue"></div>
                        <div class="content">Forum</div>
                    </div>
                </div>
            </div>
            <div class="board">
                <h3>Done</h3>
                <div class="dropzone">
                    <div class="card" draggable="true">
                        <div class="status red"></div>
                        <div class="content">Next level</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="informacoes" style="left:100%;">
            <h1 class="titulo">Adicionar Tarefa</h1>

            <form action="post">
                
                <div class="itemForm">
                    <div class="inp">
                        <input type="text" name="nome-tarefa" placeholder="Nome da tarefa">
                    </div>
                </div>

                <div class="itemForm">
                    <div class="label">
                        <label for="">Responsável</label>
                    </div>
                    <div class="inp">
                        <input type="text" name="responsavel">
                    </div>
                </div>

                <div class="itemForm">
                    <div class="label">
                        <label for="">
                            <nobr>Whatsapp Cliente</nobr>
                        </label>
                    </div>
                    <div class="inp">
                        <input type="text" name="whatsapp">
                    </div>
                </div>

                <div class="itemForm">
                    <div class="label">
                        <label for="">
                            <nobr>Previsão</nobr>
                        </label>
                    </div>
                    <div class="inp">
                        <input type="date" name="previsao">
                    </div>
                </div>

                <div class="itemForm">
                    <div class="label">
                        <label for="">
                            <nobr>Descrição</nobr>
                        </label>
                    </div>
                    <div class="inp">
                        <textarea name="descricao" cols="30" rows="5"></textarea>
                    </div>
                </div>

            </form>
        </div>

    </div>
    <style>
            html {
        font-family: 'Courier New', Courier, monospace;
    }


body{
    color: white;
}

.boards{
    display: flex;
    justify-content: left;
}

.board{
    background: #e7e7e7;
    border: 1px solid #FD951F11;
    border-radius: 4px;
    margin: 0 10px;
}

.board h3{
    padding: 16px;
    margin: 0;
    color: #FD951Fcc;
}

.dropzone{
    padding: 16px;
    min-width: 282px;
    min-height: 200px;
}

.card{
    padding: 16px;
    box-shadow: 0 2px 2px -1px #FD951Fcc;
    width: 250px;
    margin: 25px 0;
    border-radius: 4px;
    font-weight: 600;
    font-size: 18px;
    background: #1A1A1C;
}

.status{
    width: 30px;
    height: 8px;
    background: grey;
    margin-bottom: 16px;
    border-radius: 8px;
}

.status.green{
    background: #23d2ac;
}

.status.blue{
    background: #3634ce;
}

.status.red{
    background: #d22a23;
}

.highlight{ /*quando card sobre*/
    background: #FD951F08;
}

.card, .dropzone {
    position: relative;
    transition: 400ms;
}

.is-dragging{
    cursor: move;
    opacity: 0.3;
}

.over{
    background: #4cd13711;
}

.card > img{
    width: 100%;
    position: absolute;
    left: -20px;
    top: -49px;
}
</style>

<style>
    .painel {
        width: 100%;
    }

    .add,
    .informacoes {
        /* text-align: center; */
        background: #141316;
        border: 1px solid #FD951F11;
        color: #ce7b1b;
        font-weight: 900;
    }

    .add {
        width: 200px;
        margin: 10px;
        padding: 10px;
    }

    .informacoes {
        transition: 1s;
        position: fixed;
        font-weight: 900;
        height: 90vh;
        width: 30%;
        top: 7vh;
        right: 0;
    }

    .informacoes>h1.titulo {
        text-align: center;
    }

    .informacoes>form {
        padding: 15px;
    }

    .itemForm>.inp {
        width: 100%;
    }

    .itemForm {
        padding: 5px 0;
        width: 100%;
        display: flex;
    }

    .label {
        width: 160px;
        text-align: center;
    }

    .itemForm>.inp {
        width: 100%;
    }

    .itemForm>.inp>input {
        border-radius: 10px;
        padding: 5px;
        width: 100%;
        font-size: 16pt;
    }

    .itemForm>.label>label {
        float: left;
        top: 25%;
        position: relative;
    }
/* 
    textarea:focus,
    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    } */
    .itemForm>.inp>input,.itemForm>.inp>textarea{
        background: unset;
        color: #fff;
    }
</style>


    <script>
        const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

// Cards 
cards.forEach((card) => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('dragend', dragEnd);
    card.addEventListener('drag', drag);
});


function dragstart(){
    //this = card
    dropzones.forEach((dropzone) => {
        dropzone.classList.add('highlight');
    });

    this.classList.add('is-dragging');
}

function dragEnd(){
    //this = card
    dropzones.forEach((dropzone) => {
        dropzone.classList.remove('highlight');
    });

    this.classList.remove('is-dragging');
}

function drag(){
    // console.log('card drag');
}

// dropzones
dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
});

function dragover(){
    //this = dropzone
    this.classList.add('over');

    const cardBeingDragged = document.querySelector('.is-dragging');

    this.appendChild(cardBeingDragged);
}

function dragenter(){
    //this = dropzone
}

function dragleave(){
    //this = dropzone
    this.classList.remove('over');
}

function drop(){
    console.log('dropzone drop');
}
    </script>

    <script>
        function openInfo() {
        info = document.querySelector('.informacoes')
        console.log(info.style.left)

        if (info.style.left == "100%") {
            info.style.left = "70%";
        }
        else {
            info.style.left = "100%";
        }
    }
    </script>