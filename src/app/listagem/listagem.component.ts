import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Foto } from '../foto/foto';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = 'Caelumpic';
  listaFotos: Foto[] = [];

  constructor(private fotoService: FotoService){
    fotoService.listar()
                .subscribe(
                fotosApi => this.listaFotos = fotosApi
                ,erro => console.log(erro)
              )
  }

  ngOnInit() {
  }

  excluir(fotoApagada: Foto){

    this.fotoService.deletar(fotoApagada)
        .subscribe(
          resposta => {
            console.log(resposta, `Apagou ${fotoApagada.titulo}`)

            this.listaFotos = this.listaFotos.filter((foto) => {

              if (foto != fotoApagada) {
                return foto
              }
            })
          }
          ,erro => console.log(erro)
        )
    }
}
