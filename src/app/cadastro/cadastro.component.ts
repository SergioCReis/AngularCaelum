import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { Router, ActivatedRoute } from '@angular/router';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  foto: Foto = new Foto();

  constructor(private fotoService: FotoService
              ,private roteador: Router
              ,private rotaAtivada: ActivatedRoute) { }

  salvar(){

    if (this.foto._id) {
        this.fotoService.atualizar(this.foto)
        .subscribe(resposta => console.log(resposta)
        )

    } else {
      this.fotoService.cadastrar(this.foto)
          .subscribe(
            (resposta) => {
              console.log(resposta);
              this.roteador.navigate(['']);
            }
            , erro => console.log(erro)
          )
    }
    console.log(this.foto);
  }

  ngOnInit() {

    console.log(this.rotaAtivada)

    this.rotaAtivada.params.subscribe(paramsRota => {
      console.log(paramsRota.fotoId);
    })

    let fotoId = this.rotaAtivada.snapshot.params.fotoId;

    if (fotoId) {
      this.fotoService
          .buscar(fotoId)
          .subscribe(
            fotoApi => {
              this.foto = fotoApi;
            }
          )
    }
  }

}
