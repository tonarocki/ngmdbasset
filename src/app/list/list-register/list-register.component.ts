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
  selector: 'app-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.css']
})
export class ListRegisterComponent implements OnInit, OnDestroy {
  private sub: any = null;
  private subagc: any = null;
  param: any;
  regisNotMax: boolean;
  regislistid: any;
  regisTitle: String;
  regisDetail: String;
  registeruser: any;
  agency: any;
  Regdetail: Regisdetail;


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

  register(formValue): void {
    const stdid = formValue.stdid;
    const prefix = formValue.prefix;
    const fname = formValue.fname;
    const lname = formValue.lname;
    const email = formValue.email;
    const tel = formValue.tel;
    const agencyid = formValue.agc;
    this.registerservice
      .register(stdid, prefix, fname, lname, email, tel, agencyid, this.param)
      .subscribe(
        regdetail => {
          console.log(regdetail);
          this.Regdetail = regdetail;
          if (this.Regdetail.id) {
            alert('บันทึกข้อมูล คุณ ' + this.Regdetail.fname + ' เรียบร้อยแล้ว ' );
            this.list();
          }
        },
        error => {
          console.log(error);
        }
      );
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
    this.sub = this.registerservice.getregisbyid(this.param).subscribe(
      regislistid => {
        console.log(regislistid);

        if (regislistid.RegisDetails.length < regislistid.max) {
          this.regisNotMax = true;
        } else {
          this.regisNotMax = false;
        }

        if (regislistid.type === 2 || regislistid.status !== 1) {
          this.router.navigate(['/list']);
        }

        this.regisTitle = regislistid.title;
        this.regisDetail = regislistid.detail;

        this.registeruser = regislistid.RegisDetails;
      },
      err => {
        console.log(err);
        this.router.navigate(['/home']);
      }
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
