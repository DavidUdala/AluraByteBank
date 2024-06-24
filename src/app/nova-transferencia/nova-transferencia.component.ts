import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferenciaServiceService } from '../services/transferencia-service.service';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {


  @Output() aoTransferir = new EventEmitter<any>();

  _valor: number;
  _destino: number;

  constructor(private service: TransferenciaServiceService, private router: Router) {
    this._valor = 0;
    this._destino = 0;
  }

  ngOnInit(): void {
  }
  transferir() {
    console.log('Solicitado nova transferencia ' + this._valor, this._destino);

    const valorEmitir: Transferencia = { valor: this._valor, destino: this._destino };

    this.service.adicionar(valorEmitir)
      .subscribe({
        next: result => {
          console.log(result);
          this.limparCampos();
          this.router.navigateByUrl('extrato');
        },
        error: error => {
          console.log(error);
        }
      });

  }
  limparCampos() {
    this._valor = 0;
    this._destino = 0;
  }
}
