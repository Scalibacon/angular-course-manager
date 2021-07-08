# Gerenciador de cursos feito no Angular
<img align="left" alt="angular" src="https://img.shields.io/badge/-angular-DD0031?logo=angular&logoColor=fff&style=for-the-badge" />
<img align="left" alt="javascript" src="https://img.shields.io/badge/-javascript-F7DF1E?logo=javascript&logoColor=3e3e3e&style=for-the-badge" />
<img align="left" alt="typescript" src="https://img.shields.io/badge/-typescript-3178C6?logo=typescript&logoColor=white&style=for-the-badge" />
<img align="left" alt="html5" src="https://img.shields.io/badge/-html5-E34F26?logo=html5&logoColor=white&style=for-the-badge" />
<img align="left" alt="css3" src="https://img.shields.io/badge/-css3-1572B6?logo=css3&logoColor=white&style=for-the-badge" />
<br><br>
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

## Anotações
 
### Algumas coisas podem estar erradas, já que é meu primeiro contato com o Angular. Vou corrigindo os conceitos conforme forem ficando mais claros.

#### Os componentes e os módulos precisam ser importados no arquivo app.modules.ts para serem usados nos templates.
    @NgModule({ 
      declarations: [ components ],
      imports: [ módulos ],
      ...
    })
<br>

#### É possível criar props novas pra um componente atribuindo o selector @Input pra variável. Tem como intuito passar informações do elemento pai pro elemento filho.
    // No arquivo component.ts
    @Input()
    minhaProp: string = "";
    
    //No componente pai que passará a prop criada pro filho
    <app-meu-component [minhaProp]="valor"><app-meu-component>
<br>

#### [One-way data binding](https://angular.io/guide/binding-syntax) carrega/atualiza a view se baseando em variáveis do component.ts. Para usar este recurso em propriedades de uma tag, a mesma deve ficar entre colchetes e o conteúdo JavaScript deve ser tratado como uma string, ou seja, entre aspas simples ou duplas.
    <img [src]="user.imageUrl" alt="image"/>
Neste caso a propriedade "src" terá o valor do atributo "imageUrl" do objeto "user", que deve estar presente na classe do component que tem esse código HTML inserido em seu template.
<br>


#### [Two-way data binding](https://angular.io/guide/two-way-binding) funciona de maneira similar ao one-way, mas também irá ouvir os eventos da view que alterarão o valor da variável do component.ts vinculada. Até o momento só vi sendo usado em forms, mas futuramente verei aplicações em outros contextos.
    <input [(ngModel)]="user.name"/>
Neste exemplo o ngModel faz parte do módulo FormsModule, que deve ser importado no app.modules.ts pra funcionar. Creio que ele dê um set no value do input com a variável "user.name" (que deve estar no component.ts) e altere essa mesma variável conforme o usuário altere o input na view.
<br>


#### Para exibir o valor de variáveis JavaScript no HTML deve-se colocá-lo entre duas chaves. É possível também utilizar uma if ternário.
    <p>{{ user.description === "" ? "Vazio." : user.description }}</p>
<br>

#### É necessário importar o módulo RouterModule no app.modules.ts pra usar o recurso de roteamento de rotas de uma aplicação SPA. Até o momento só vi a configuração de rotas dentro do próprio app.modules, mas espero ver um jeito mais limpinho de fazer isso. Para configurá-lo devemos passar um array de objetos que representam nossas rotas. Esses objetos contêm o path, que é o caminho/URL da rota, o component que é o component/page que será carregado na rota, além de outros atributos. A rota raiz é representada por '' (no React é '/') e a rota de exceção é representada por '**'.
    // arquivo app.modules.ts
    imports: [
      ...,
      RouterModule.forRoot([
      {
        path: '', component: IndexComponent
      },     
      {
        path: '**', component: Error404Component
      }
    ])
    
    // usar o recurso em um template HTML
    <a [routerLink]="['/rota/desejada', parâmetros]">Redirecionar</a>
<br>

#### Para se usar [hooks](https://angular.io/guide/lifecycle-hooks) nos components eles devem implementar as respectivas interfaces e implementar seus métodos. O OnInit e o OnChanges são parecidos com o useEffect do React, onde o primeiro é executado quando o componente é carregado na tela e o segundo quando uma variável vinculada (@Input) sofre alterações.
    @Component()
    export class MyComponent implements OnInit, OnChanges ... {
      ngOnInit(): void {
        //executado quando for carregado
      }
      
      ngOnChanges(): void {
        //executado quando houver mudanças num @Input (que no caso não existe neste exemplo)
      }
    }
<br>

#### A adição de classes a um elemento HTML pode ser feita de forma dinâmica usando o ngClass. Para isso precisamos passar um objeto com uma chave, que é a classe a ser adicionada ao elemento, e um valor que corresponde a condição que deve ser cumprida pra essa classe ser adicionada.
    <input [ngClass]="{'isInvalid': invalid}"
<br>

#### Para tratar eventos usamos o termo do evento entre parênteses.
    <form (ngSubmit)="onSubmitFunction()">
      <button (click)="onClickFunction()">Botão</button>
    <form>
 <br>
 
 #### No template HTML, para executarmos loops usamos o [*ngFor](https://angular.io/api/common/NgForOf) e para executarmos condicionais usamos o [*ngIf](https://angular.io/api/common/NgIf).
     <div *ngIf="condição; else elseBlock">
        Vai renderizar se a condição for true.
     </div>
     <ng-template #elseBlock>Vai renderizar se a condição for false.</ng-template>
     
     <ul>
       <li *ngFor="let user of listOfUsers">{{ user.name }}</li> //renderiza vários li dentro do ul
     </ul>
<br>     

#### [Variávels de template](https://angular.io/guide/template-reference-variables) são usadas pra referenciar o elemento em questão em outras partes do template, como por exemplo para validar os inputs. Para isso usamos uma # antes do nome da variável a ser criada.
    <input #telefone placeholder="Número de telefone" />
    ...
    <button (click)="fazerChamadaTelefonica(telefone.value)">Ligar</button>
      
