`window.alert('Lorem')` alerta na tela
`window.confirm('Lorem')` alerta com botão pra confirmar
`window.prompt('Lorem')` alerta com espaço de digitação
`var apelido = 'tekudo'` salva a informação de que apelido é igual a tekudo
`typeof 6.5` fala qual DataType ele é, tipo: 6.5 = number "oi" = string

`var nome = window.prompt('Qual seu nome?')` o nome será oque você digitar no "qual seu nome"
`window.alert('Bem vindo, ' + nome)`vai aparecer oque a pessoa respondeu no prompt aqui de cima ^^^
`Number.parseInt` forçar numero: `var n1 = Number.parseInt(window.prompt('digite um numero'))`
`Number.parseFloat` forçar numero com , tipo: 5,4
`Number` é o Int e o Float juntos
`String (5))` forçar String     OBS: ele fica aqui: `('bem vindo, ' + String(n1))`
`.toString` forçar String       OBS: ele fica aqui: `('bem vindo, ' + n1.toString)`
`Lorem ${nomeDaVar} Impsum ${nomeDaVar}` é uma soma simplificada   Importante!!: começa e acaba com ` e não ' ou "

`var s = 'JavaScript'`
`s.length` conta quantas caracteres a variavel "s" tem
`document.write('Lorem Impsum')`  escreve na tela msm e não alerta
`document.write(`seu nome em maiusculo é ${nome.toUpperCase()}`)`  deixa oque vai escrever em maiusculo
`${nome.toLowerCase}`  deixa oque vai escrever em minusculo

`n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})` faz a var n1 ficar quem nem o real, tip: R$1.545,80
                                                          `USD`  fica em dolar
                                                          `EUR`  fica em euro
`n1.toFixed(2).replace('.', ',')`  o n1 é a var, o (2) é quantos 0 depois da virgula e o replace é trocar ponto por virgula e vice versa
---------------------------------------------------------

Identificadores das variaveis: var `nome` = tekudaodamassa

Podem começar com letra, $ ou _

Não podem começar com números

É possivel usar letras ou números

É possível usar acentos e símbolos

Não podem conter espaços

Não podem ser palavras reservadas

---------------------------------------------------------

Data Types: var nome = `true`

Number
5 18 -12 0.5 -15.9 3.14 8.0

Boolean
true false

String
"Google" 'JavaScript' `Maria`

---------------------------------------------------------