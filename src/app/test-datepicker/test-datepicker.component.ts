import { Component } from '@angular/core'
import { DatePickerExampleComponent } from '../datepicker-example/datepicker-example.component';

@Component({
  selector: 'app-test-datepicker',
  templateUrl: './test-datepicker.component.html',
  styleUrls: ['./test-datepicker.component.scss'],
  standalone: true,
  imports:[DatePickerExampleComponent]
})
export class TestDatepickerComponent {

}
