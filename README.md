# TiMultiPicker - IOS
Desenvolvido como alternativa para o [TiDialogs](https://github.com/dbankier/TiDialogs) para Android, pois necessitava utilizar algo parecido no IOS.

Serve para selecionar vários elementos de uma lista.


## Instruções:

Colocar a pasta br.spyker0.multipicker em /app/widgets/

Instanciar o widget:

```js
var multiOptionsPicker = Alloy.createWidget('br.spyker0.multipicker');
```

Abrir o widget passando os parâmetros necessários.

```js
multiOptionsPicker.open({
    title: "Título da tela",
    options: arrayDeOpcoes, //I.E. [1,2,3,4]
    selected: arrayDeOpcoesSelecionadas, //I.E. [1,2]

    okButtonTitle: "Ok", //Botão para confirmar a seleção

    cancelButtonTitle: "Voltar", //Botão para cancelar a seleção

    navigationWindow: navigationWindow, //Navigation window raiz, a window abrirá dentro dela (por hora isso é obrigatório)

    okCallback: callbackOk, //callback de confirmação, recebe um objeto contendo uma propriedade selections, que é a lista de itens selecionados

    cancelCallback: callbackCancela //Callback ao cancelar, não recebe parâmetros e não é obrigatório
});


//Exemplo de callback
function callbackOk(e){
    console.log(e.selections);
}
```

Inspirado em :
1. https://github.com/dbankier/TiDialogs/issues/16
2. https://stackoverflow.com/questions/15145637/titanium-mobile-multiple-select
3. https://developer.apple.com/library/content/samplecode/TableMultiSelect/Introduction/Intro.html