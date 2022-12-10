
import { ErrorService } from '../services/error.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-error-data',
  templateUrl: './error-data.component.html',
})
export class GlobalErrorComponent {

  constructor(public errorService: ErrorService) { }
}
