import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Nullable } from '@fundamental-ngx/cdk/utils';
import { ContentDensityDirective } from '@fundamental-ngx/core/content-density';
import { DatePickerComponent } from '@fundamental-ngx/core/date-picker';
import {
    DATE_TIME_FORMATS,
    DatetimeAdapter,
    FD_DATETIME_FORMATS,
    FdDate,
    FdDatetimeAdapter,
    FdDatetimeModule
} from '@fundamental-ngx/core/datetime';
import { FormLabelComponent } from '@fundamental-ngx/core/form';
import { CustomFdDatetimeAdapter } from '../shared/custom-fd-datetime-adapter';
import { GenericTagComponent } from '@fundamental-ngx/core';

@Component({
    selector: 'datepicker-example',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './datepicker-example.component.html',
    providers: [
        {
            provide: DatetimeAdapter,
            useClass: CustomFdDatetimeAdapter
        },
        {
            provide: DATE_TIME_FORMATS,
            useValue: FD_DATETIME_FORMATS
        }
    ],
    standalone: true,
    imports: [FormLabelComponent, DatePickerComponent, FormsModule, ContentDensityDirective, FdDatetimeModule, GenericTagComponent, CommonModule]
})
export class DatePickerExampleComponent {

    errorMessage: boolean | null = null;

    date: Nullable<FdDate> = FdDate.getNow();


    onInput(event: any): void {

        const input = event.target;
        let value = input.value;

        if (value.length > 10) {
            this.errorMessage = true
        } else {
            this.errorMessage = null;
        }

        // Logic to insert '/' after 2 digits and 5 digits
        if (event.inputType !== 'deleteContentBackward') {
            if (value.length === 2 || value.length === 5) {
                input.value = value + '/';
            }
        }

        console.log(value);


    }


}
