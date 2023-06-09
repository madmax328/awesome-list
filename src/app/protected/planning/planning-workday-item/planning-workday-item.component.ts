import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({ selector: 'al-planning-workday-item', templateUrl: './planning-workday-item.component.html', styles: [] })
export class PlanningWorkdayItemComponent implements OnChanges {
removeWorkday(_arg0: string) {
throw new Error('Method not implemented.');
}
	@Input() dueDate: string;
	@Input() doneTasks: number | string;
	@Input() remainingTasks: number | string;

	@Output() workdayRemoved = new EventEmitter<string>();

	ngOnChanges(changes: SimpleChanges) {
		for (const propName in changes) {
		 this.update(propName, changes[propName].currentValue);
		}
	   }
		
	   update(propName: string, propValue: string|number) {
		
		removeWorkday(this.dueDate, String); {
			this.workdayRemoved.emit(this.dueDate);
		   }
		   
		switch (propName) {
		 case 'dueDate': {
		  if ('Lundi' === propValue) { this.dueDate += ' (Aujourd\'hui)'; }
		  break;
		 }
		 case 'doneTasks': {
		  if (0 === propValue) { this.doneTasks = 'Aucune tâche terminé.'; }
		  break;
		 }
		 case 'remainingTasks': {
		  if (0 === propValue) { 
		   this.remainingTasks = 'Journée de travail terminée !';
		  } 
		  break;
		 }
		 default: {
		  break;
		 }
		}
	   }
		
	  }

function removeWorkday(_dueDate: any, _string: any) {
	throw new Error('Function not implemented.');
}
