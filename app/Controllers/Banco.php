<?php

    class Banco extends Controller{
        public function index(){
            $banco = new CriarBanco();
            $banco->criar();
            CriarBanco::criar();
        }
    }