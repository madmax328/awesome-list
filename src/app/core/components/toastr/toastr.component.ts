import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/core/services/toastr.service';
import { Observable } from 'rxjs';
import { Toastr } from 'src/app/shared/models/toastr';

@Component({
  selector: 'al-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit{

  toastr$: Observable<Toastr|null>;

  constructor(private toastrService: ToastrService) { }

  closeToastr() {
    this.toastrService.closeToastr();
   }

  ngOnInit() {
    this.toastr$ = this.toastrService.toastr$;
   }
  }
