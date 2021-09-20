---
title: Avaliação 2
display: home
tag: poo
category: avaliacao
sidebar: false
---

## Campeonato de futebol (Repescagem)

1. Implementar uma estrutura de classes que permita armazenar e manipular dados de jogadores, times e jogos. Essa estrutura será utilizada para montar um protótipo de jogo de simulação estilo "Football Manager", no qual a pessoa que está jogando assume o papel de um técnico, escalando o time e um software simula os jogos entre times. Existem vários jogos derivados do "Football Manager" como o Elifoot, Brasfoot e Championship Manager. Todos com o mesmo estilo. 
    1. Você deve se preocupar APENAS com a implementação orientada a objetos que envolve cada entidade do problema. 
    1. Todo jogador deve ser identificado pelo seu nome, idade e número da camisa. Deve também  ter um calculo de habilidade diferente para cada tipo de jogador. O valor deve ser um interiro de 0 a 100 (Math.min(habilidadeCalculada, 100)). Existem 3 tipos de jogadores: Goleiro, Defensor e  Atacante; e sua habilidade é calculada da seguinte forma:
        - Goleiro: $((habilidade*5) + (((int)(altura*100))*2) + (reflexos*3))/10$
        - Defensor: $((habilidade*5) + (cobertura*3) + (desarme*2) )/10$
        - Atacante: $((habilidade*5) + (velocidade*2) + (tecnica*3) )/10$
    1. Cada jogador deve ter um registro de quantos gols ele marcou na temporada.
    1. No jogo devemos ter times que serão identificados por seus nomes e terão vários jogadores que serão inseridos para a partida.  Cada time deve fazer registro de suas vitórias, derrotas e empates, que iniciam em 0 e aumenta conforme o resultado dos jogos da temporada. A habilidade de um time é dada pela soma das habilidades de todos os jogadores escalados na partida.
    1. As partidas devem ser definidas com a indicação de um Time da Casa, Time Visitante e uma data. Quando um jogador registra que fez um gol, essa informação é passada para o time e o time passa para a partida que deve ajustar o placar. Ao finalizar a partida deve ser registrado nos times a vitória ou derrota ou empate (adicionarVitoria, ...).
    1. Quando uma partida é iniciada deve ser tratado uma situação excepcional de não terem entrado os dois times em campo (não ter indicado os times Time da Casa e Time Visitante na partida). Nesse caso deve ser registrado automaticamente uma vitória para o time que entrou em campo por 3 x 0.
    