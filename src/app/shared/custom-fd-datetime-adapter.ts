import { Injectable } from '@angular/core';
import { FdDatetimeAdapter, FdDate } from '@fundamental-ngx/core/datetime';


@Injectable()
export class CustomFdDatetimeAdapter extends FdDatetimeAdapter {
    override format(date: FdDate): string {
        const jsDate = date.toDate();
        const day = jsDate.getDate().toString().padStart(2, '0');
        const month = (jsDate.getMonth() + 1).toString().padStart(2, '0');
        const year = jsDate.getFullYear();
        return `${day}/${month}/${year}`;
    }
    
}
