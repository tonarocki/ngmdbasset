import { Component, OnInit } from '@angular/core';
import { RegisService } from '../share/regis.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-regevent',
  templateUrl: './regevent.component.html',
  styleUrls: ['./regevent.component.css']
})
export class RegeventComponent implements OnInit , OnDestroy {

  isLoading = false;
  regislist: Array<any>;
  sub: any;
    constructor(private registerservice: RegisService) { }

    ngOnInit() {
      this.isLoading = true;
      this.sub = this.registerservice.getallByType(3).subscribe(
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
