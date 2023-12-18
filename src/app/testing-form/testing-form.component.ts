import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MOMENT_DATETIME_FORMATS, MomentDatetimeAdapter, MomentDatetimeModule } from '@fundamental-ngx/moment-adapter';
import { DatetimeAdapter, DATE_TIME_FORMATS, DatePickerModule } from '@fundamental-ngx/core';
import { EuropeanDateFormatDirective } from '../shared/european-date-format.directive';


const CUSTOM_MOMENT_DATE_FORMATS = {
  ...MOMENT_DATETIME_FORMATS,
  parseInput: 'DD/MM/YYYY',
  displayDateInput: 'DD/MM/YYYY',
  displayDate: 'DD/MM/YYYY',
};


@Component({
  selector: 'app-testing-form',
  templateUrl: './testing-form.component.html',
  styleUrls: ['./testing-form.component.scss'],
  standalone: true,
  imports: [DatePickerModule, MomentDatetimeModule, ReactiveFormsModule, EuropeanDateFormatDirective],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    {
      provide: DatetimeAdapter,
      useClass: MomentDatetimeAdapter
    },
    {
      provide: DATE_TIME_FORMATS,
      useValue: CUSTOM_MOMENT_DATE_FORMATS
    }
  ],
})
export class TestingFormComponent implements OnInit {
  dateForm: any;

  ngOnInit() {
    this.dateForm = new FormGroup({
      date: new FormControl(null),
      datetext: new FormControl(null)
    });

    this.dateForm.get('datetext').valueChanges.subscribe((value: any) => {
      console.log('datetext value changed:', value);
    });
    this.dateForm.get('date').valueChanges.subscribe((value: any) => {
      console.log('date value changed:', value);
    });
  }


}
