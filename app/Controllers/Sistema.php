<?php

    class Sistema extends Controller {

        public function index($nomeSistema = '') {
            if(isset($_SESSION['usuario'])) {
                $dados = array(
                    'nomeSistema' => $nomeSistema
                );
                $this->view('tarefas/index', $dados);
            } else {
                $this->view('conta/index');
            }
        }

    }