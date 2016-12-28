import { Headers } from '@angular/http';
import { environment } from '../config/environment';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
contentHeaders.append('Access-Control-Max-Age', '86400');
contentHeaders.append('Access-Control-Allow-Headers', 'Origin, Authorization, X-Requested-With, Content-Type, Accept');
contentHeaders.append('Access-Control-Request-Headers', 'X-Requested-With, accept, content-type');
contentHeaders.append('Access-Control-Allow-Origin', "*");
