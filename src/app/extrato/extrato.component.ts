import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaServiceService } from '../services/transferencia-service.service';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[] = [];

  constructor(private service: TransferenciaServiceService) { }

  ngOnInit(): void {
    this.service.todas().subscribe((result) => {
      this.transferencias = result;
    });

  }
}
