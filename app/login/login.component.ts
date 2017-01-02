// Imports
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { URLSearchParams, Http, Headers } from '@angular/http';

import { contentHeaders } from '../common/headers';
import { environment } from '../config/environment';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'login.component.html'
})
// Component class implementing OnInit
export class LoginComponent implements OnInit {
    
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public http: Http) { }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login(event, username, password) {
        event.preventDefault();
        this.loading = true;
        let data = JSON.stringify({username, password});
        var body = 'dataPost=' + data;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post(environment.url + 'api/staff/login', body, {headers : contentHeaders})
            .subscribe(
                response => {
                    localStorage.setItem('token', response.json().data.access_token);
                    this.router.navigate(['plan']);
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                }
            );
    }
}
