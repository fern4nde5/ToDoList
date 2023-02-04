import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-add-itens',
  templateUrl: './to-do-add-itens.component.html',
  styleUrls: ['./to-do-add-itens.component.scss']
})
export class ToDoAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = "";
  constructor() {}

  ngOnInit(): void { 
  }

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();
    
    if (this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }
}
