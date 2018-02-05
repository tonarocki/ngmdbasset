import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ParamMap,
  Router,
  ActivatedRoute,
  RoutesRecognized
} from '@angular/router';
import {
  OnDestroy,
  AfterViewInit
} from '@angular/core/src/metadata/lifecycle_hooks';
import { RegisService } from '../share/regis.service';

import { Regisdetail } from '../share/regdetail.model';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit, OnDestroy {

  private sub: any = null;
  name: any;
  random: any;
  numrandom: any;
  show: boolean;
  loading: boolean;
  showbtn: boolean;

  constructor(private registerservice: RegisService) { }

  randomname() {
    this.show = false;
    this.showbtn = false;
    this.loading = !this.show;
    this.sub = this.registerservice.getDetailall().subscribe(
      name => {
        console.log(name);
        this.numrandom = this.getRandomInt(0, name.length);
        this.name = name[this.numrandom];
        console.log(this.name);
        if (this.name.stdid === '' || this.name.stdid === null) {
          this.randomname();
        }
      },
      err => {
        console.log(err);
        this.randomname();
      }, () => setTimeout(() => {
        this.show = true;
        this.loading = !this.show;
        this.showbtn = true;
      }, 4000),
    );
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
    this.loading = false;
    this.showbtn = true;
  }

  ngOnDestroy() {
  }

}
