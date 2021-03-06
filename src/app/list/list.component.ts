import { Component, OnInit } from '@angular/core';

import { RegisService } from '../share/regis.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
isLoading = false;
regislist: Array<any>;
sub: any;
  constructor(private registerservice: RegisService) { }

  ngOnInit() {
    this.isLoading = true;
    this.sub = this.registerservice.getallByType(1).subscribe(
      (regislist) => {
        console.log(regislist);

        this.regislist = regislist;

     }, (err) => console.log(err),
      () => this.isLoading = false
    );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
