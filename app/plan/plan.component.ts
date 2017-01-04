import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { PagerService } from '../_services/index'
import { environment } from '../config/environment';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'plan.component.html'
})
// Component class
export class PlanComponent implements OnInit {

    constructor(private http: Http, private pagerService: PagerService) { }

    path = 'app/path.component.html';
    
    private allItems: any[];
    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];
    
    ngOnInit() {
        this.http.get(environment.url + 'api/plan')
            .map((response: Response) => response.json())
            .subscribe(data => {
                
                // set items to json response
                this.allItems = data;

                // initialize to page 1
                this.setPage(1);
            });
    }
    
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}
