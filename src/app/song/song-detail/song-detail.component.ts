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
import { RegisService } from '../../share/regis.service';

import { Regisdetail } from '../../share/regdetail.model';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit, OnDestroy {
  private sub: any = null;
  private subagc: any = null;
  param: any;
  regislistid: any;
  regisNotMax: boolean;
  regisTitle: String;
  regisDetail: String;
  registeruser: any;
  agency: any;
  Regdetail: Regisdetail;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private registerservice: RegisService
  ) {
    this.param = this.route.snapshot.params.id;
  }

  clear(registerForm): void {
    registerForm = {};
  }


  ngOnInit() {
    this.getagency();
    this.list();
  }

  getagency() {
    this.subagc = this.registerservice.getagency().subscribe(
      agency => {
        console.log(agency);

        this.agency = agency;
      },
      err => {
        console.log(err);
        this.router.navigate(['/home']);
      }
    );
  }

  list() {
    this.isLoading = true;
    this.sub = this.registerservice.getregisbyid(this.param).subscribe(
      regislistid => {
        console.log(regislistid);

        if (regislistid.RegisDetails.length < regislistid.max) {
          this.regisNotMax = true;
        } else {
          this.regisNotMax = false;
        }

        if (regislistid.type !== 2 || regislistid.status !== 1) {
          this.router.navigate(['/song']);
        }

        this.regisTitle = regislistid.title;
        this.regisDetail = regislistid.detail;

        this.registeruser = regislistid.RegisDetails;
      },
      err => {
        console.log(err);
        this.router.navigate(['/song']);
      },
      () => this.isLoading = false
    );
  }

  ngOnDestroy() {
    if (this.sub != null) {
      this.sub.unsubscribe();
    }
    if (this.subagc != null) {
      this.subagc.unsubscribe();
    }
  }
}
