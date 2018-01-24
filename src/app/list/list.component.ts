import { Component, OnInit } from '@angular/core';

import { RegisService } from '../share/regis.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

regislist: Array<any>;
sub: any;
  constructor(private registerservice: RegisService) { }

  ngOnInit() {
    this.sub = this.registerservice.getregisall().subscribe(
      (regislist) => {
        console.log(regislist);

        this.regislist = regislist;

      }
    );

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
