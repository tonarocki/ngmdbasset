import { Component, OnInit } from '@angular/core';
import { RegisService } from '../share/regis.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit, OnDestroy {

isLoading = false;
regislist: Array<any>;
sub: any;
  constructor(private registerservice: RegisService) { }

  ngOnInit() {
    this.isLoading = true;
    this.sub = this.registerservice.getallByType(2).subscribe(
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

