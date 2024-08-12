# Clean Code no JavaScript

Implementação prática de clean code no JavaScript.

## Nomenclatura de variáveis

- Ser descritivo em nomes de variáveis;
- Evite diminuitivos;
- Não tenha medo de criar nomes compridos
- Evite nomes genéricos

### Booleanos

- Sempre escrever como se fossem uma pergunta de sim ou não;
  - is, does, has

## Causa vs Efeito

- Nomear variaveis de acordo com o efeito e não da causa;

## Código em inglês

- Código precisa ser em inglês;
- As ferramentas do código, bibliotecas são em inglês;
- Torna o código acessível;

## Regras em condicionais

- Evite o uso de negações, sempre que possível, utilizando variaveis adicionais caso seja necessário;
- Early return, mas tomar cuidado com encadeamentos de ifs ou early retuns dentro de ifs com muito código, nesses casos é favorável optar pela utilização do else;
- Evite condicionais aninhadas, optando por early returns ou unificar os ifs de forma que o código se mantenha legível;

## Parâmetros e desestruturação

- Sempre que possível, receber e enviar parâmetros nomeados;
- Opte por receber objetos ao invés de parâmetros;
  - Até mesmo quando tiver apenas um parâmetro, pois isso mais para frente pode se desdobrar em mais;
  - As mesmas regras podem ser atribuidas para resposta de funções;

## Números mágicos

- Cálculos ou valores que determinamos no código;
