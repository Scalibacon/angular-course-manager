# Gerenciador de cursos feito no Angular
Tô usando este projeto pra aprender um pouco mais sobre o funcionamento básico do Angular, como Components, Dependency Injection, Hooks e Interpolaridade.

Para gerar este projeto foi usado o [Angular CLI](https://github.com/angular/angular-cli) na versão 12.1.1.

## Botar o projeto pra rodar

É só baixar e usar `ng serve` pra subir o projeto como dev. O projeto vai subir em `http://localhost:4200/`. 

## Gerar novos components/serviços/etc

Alguns componentes tô fazendo na mão pra ir pegando as manhas, mas alguns usei o CLI `ng g c nome` pra gerar (g) um novo componente (c) já com a pastas, com arquivos e setado no módulo principal. Dá pra usar o CLI pra gerar vários tipos de coisas, como `ng (g)enerate (d)irective|(p)ipe|(s)ervice|(c)lass|(g)uard|(i)nterface|(e)num|(m)odule`. Dá pra usar somente as letras dentro dos parênteses ou a palavra toda.

## Build

Pra gerar o build basta usar `ng build`, que será armazenado na pasta `dist/`.

## Executando testes unitários

Usar `ng test` pra executar os testes via [Karma](https://karma-runner.github.io).

## Executando testes ponta-a-ponta

Usar `ng e2e` vai executar este tipo de teste, mas aí precisa de um módulo externo pra fazer isso.

## Ajuda

Pra mais ajuda com o CLI do Angular é só `ng help` ou ler a [documentação](https://angular.io/cli).