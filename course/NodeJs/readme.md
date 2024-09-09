# Clean Code no NodeJs

Implementação prática de clean code no NodeJs.

## Princípios de SOLID

O SOLID é um conjunto de outros cinco principios:

- **SRP (Simple Responsability Principle)**: cada classe/entidade da aplicação deve ser responsável por uma única ação. Para saber se esse princípio está sendo ferido, basta se perguntar o que uma classe/entidade faz, caso a resposta contenha "e" (faz A e B) o principío está sendo ferido.
- **OCP (Open-Closed Principle)**: uma entidade deve permitir ao longo do fluxo da aplicação, adicionar comportamentos, mas não modificar comportamentos já existentes. Para saber se esse princípio está sendo ferido, quando existem trechos de código que possuem condicionais que será necessário adicionar novas condições no futuro.
- **LSP (Liskov Substitution Principle)**: deve ser possível substituir uma dependência de uma classe por outra, desde que elas possuam o mesmo formato.
- **ISP (Interface Segregation Principle)**: instrui a separar as interfaces.
- **DIP (Dependency Inversion Principle)**: as dependências devem ser recebidas como parametros ou injeção.

## Princípios de DDD

O DDD (Domain Driven Design ou Design Dirigido a Domínio) é uma prática para desenhar como será o software. O **domínio** é o problema que está sendo resolvido, o seu contexto. Dentro do domínio, geralmente, existem vários **sub-domínios**, que são etapas/processos que acontecem dentro dessa problemática a ser resolvida.
