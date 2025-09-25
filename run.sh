#!/bin/bash

network_name='sa-interface';

echo "Inicializando sistema de email Spring-Angular"

if [ "$(docker network inspect $network_name)" == "[]" ]; then
    echo "Interface $network_name não encontrada. Criando uma nova para inicialização do sistema.";
    docker network create $network_name && \
    echo "Interface criada" || \
    (echo "Falha ao criar interface."; exit 1);
fi;

docker compose -f ./compose.yml up -d --build;

echo "inicializado";