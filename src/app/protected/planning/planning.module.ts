import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlanningComponent } from './planning/planning.component';
import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningWorkdayListComponent } from './planning-workday-list/planning-workday-list.component';
import { PlanningWorkdayItemComponent } from './planning-workday-item/planning-workday-item.component';



@NgModule({
  declarations: [
    PlanningComponent,
    PlanningWorkdayListComponent,
    PlanningWorkdayItemComponent
  ],
  imports: [
    SharedModule,
    PlanningRoutingModule,
  ]
})
export class PlanningModule { }
