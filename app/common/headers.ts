import { Headers } from '@angular/http';
import { environment } from '../config/environment';

export const contentHeaders = new Headers();
contentHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
//contentHeaders.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
//contentHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
//contentHeaders.append('Access-Control-Request-Headers', 'X-Requested-With, accept, content-type');
//contentHeaders.append('Access-Control-Allow-Origin', "*");
