import { Component } from '@angular/core';
import { TransferenciaServiceService } from './services/transferencia-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaServiceService) {
  }
}
