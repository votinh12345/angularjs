// Imports
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { contentHeaders } from '../common/headers';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'login.component.html'
})
// Component class implementing OnInit
export class LoginComponent implements OnInit{
    
    model: any = {};
    loading = false;
    returnUrl: string;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    
    login(event, username, password) {
        event.preventDefault();
        this.loading = true;
        var  body = JSON.stringify({ username, password });
        console.log(body);
    }
}
