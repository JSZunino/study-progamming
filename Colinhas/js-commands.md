Comandos]---------------------------------------------------------
---------------------------------------------------------

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

`n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})` faz a var n1 ficar quem nem o real, tipo: R$1.545,80
                                                          `USD`  fica em dolar
                                                          `EUR`  fica em euro
`n1.toFixed(2).replace('.', ',')`  o n1 é a var, o (2) é quantos 0 depois da virgula e o replace é trocar ponto por virgula e vice versa

---------------------------------------------------------
Identificadores]---------------------------------------------------------
---------------------------------------------------------

Identificadores das variaveis: var `nome` = tekudaodamassa

Podem começar com letra, $ ou _

Não podem começar com números

É possivel usar letras ou números

É possível usar acentos e símbolos

Não podem conter espaços

Não podem ser palavras reservadas

---------------------------------------------------------
Data Types]---------------------------------------------------------
---------------------------------------------------------

Data Types: var nome = `true`

Number
5 18 -12 0.5 -15.9 3.14 8.0

Boolean
true false

String
"Google" 'JavaScript' `Maria`

---------------------------------------------------------
Operadores]---------------------------------------------------------
---------------------------------------------------------

Ordem: Aritméticos, Relacionais, Lógicos

Aritméticos:                         Exemplos/Salvar Resultado:          Simplificando:   Tem que ser a var + ela msm

5 + 2 = 7   mais                     var n1 = 5 + 2                      var n = 3
5 - 2 = 7   menos                    var n2 = 5 - 2                      n = n + 4      n += 4
5 * 2 = 7   vezes                    var n3 = n1 + n2                    n = n - 5      n -= 5
5 / 2 = 7   dividido                                                     n = n * 4      n *= 4
5 % 2 = 7   resto da divisão
5 ** 2 = 25 potencia 5²                                                  n = n + 1      n++
Ordem:                                                                   n = n - 1      n--

()
**
* / %
+ -

Relacionais:-------------------Resultado sempre será "true" ou "false"  Tipo: Boolean-------------------------------

5 > 2     true           5 é maior que 2? sim, então é true
7 < 4     false          7 é menor que 4? não, então é false
8 >= 8    true           8 é maior ou igual a 8? sim, então é true
9 <= 7    false          9 é menor ou igual a 7? não, então é false
5 == 5    true           5 é igual a 5? sim, então é true
4 != 4    false          4 é diferente de 4? não, então é false

== mesmo valor             5 == '5'
=== mesmo valor e tipo     5 === 5

Lógicos:---------------------------------------------------------

Ordem: !, &&, ||

!  negação     !true = false            resultado é o oposto. EX: true = false, false = true

&& conjunção  true && true = true  
              true && false = false     precisa dos 2 lados true para dar true, senão vai dar false
              false && false = false

|| disjunção  true || true = true
              true || false = true      precisa de pelo menos um true para dar true, so vai dar false se tiver só false
              false || false = false

Ternário:---------------------------------------------------------

teste ? true : false                                              média é uma variavel

média >= 7.0 ? "aprovado" : "reprovado"

---------------------------------------------------------
DOM]---------------------------------------------------------
---------------------------------------------------------

Selecionando:---------------------------------------------------------

a tag que vou selecionar: h1   Qual vou selecionar: o 1 que aparece, se for o segundo eu troco o "0" por "1"         

Tag: window.document.getElementsByTagName('h1')[0]            <h1>

ID: window.document.getElementById('id')                      id="id"

Nome: window.document.getElementByName('name')                name="name"

Classe: window.document.getElementByClassName('class')        class="class"

Seletor: window.document.querySelector('div#ID')              <div id="ID">
                         querySelectorAll()

Eventos:---------------------------------------------------------

Mouse:
                                                    A area geralmente é uma DIV
onmouseenter   Entrou na area
onmousemove    Se mexeu dentro da area
onmousedown    Segurar o mouse dentro da area
onmouseup      Soltar o mouse
onclick        Clickar dentro da area
onmouseout     Saiu da area

Lista de todos os eventos: https://developer.mozilla.org/en-US/docs/Web/Events

Funções:---------------------------------------------------------

function ação(){        onde ta "ação" é meio que o id da function, ou seja você escolhe um nome
                        entre os "()" fica os parametros, porem é opcional por-los, mas se não por tem que ter o () ainda
}                       entre os "{}" fica oque a function vai executar, ou seja, o código/comando

possivel erro: tente colocar o codigo aqui dentro->

 document.addEventListener('DOMContentLoaded', (event) => {
   
           código aqui

        });

---------------------------------------------------------
Condições:---------------------------------------------------------
---------------------------------------------------------


Tipos de condição:---------------------------------------------------------

---------------------------------------------------------
if (condição) {

}
---------------------------------------------------------
if (condição) {

} else {

}
---------------------------------------------------------

Exemplo de uso:

var vel = 25
console.log(`A velocidade do seu carro é ${vel}Km/h`)
if (vel > 60) {
    console.log('Você ultrapassou a velocidade permitida. MULTADO!')
}
console.log('Diriga sempre usando o cinto de segurança!')

Explicação: Se a var "vel" for maior que 60 você será multado

---------------------------------------------------------

var pais = 'Brasil'
console.log(`Vivendo em ${pais}`)
if (pais != 'Brasil') {
    console.log('Você é estrangeiro')
} else {
    console.log('Você é Brasileiro')
}

Explicação: Se for diferente de Brasil você será estrangeiro e se não, você será brasileiro