//.ts representa a classe que controla a view (template)
//para que o angular entenda que determinada classe corresponde a um componente, precisa-se importar
//o módulo Component, para utilizar a função contida neste módulo e assim decorar a classe do componente
import { Component } from '@angular/core'

//os pacotes utilizados para importar recursos para a aplicação ficam dentro de 'node_modules'

//como decorator, a função permite encaminhar metadados para a classe
//os metadados são passados como json
@Component({
    //indica qual será o rótulo para a instância deste componente, dentro dos templates de outros componentes da aplicação
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    //outra forma de definir um template: inline
    //template: '<p>Esse é o componente Topo </p>' //sem quebrar linha
    //template: `<p>
                //Esse é o componente Topo 
                //</p>` //pode quebrar linha
    //styles: [' .exemplo {color:red}' ]
    styleUrls: ['./topo.component.css']
})
export class TopoComponent{
    //criar um atributo
    public titulo:string = 'Aprendendo Inglês'


}