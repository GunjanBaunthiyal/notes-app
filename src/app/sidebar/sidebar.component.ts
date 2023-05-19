import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReadDialogComponent } from '../read-dialog/read-dialog.component';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  notes:any = [];
  constructor(public dialog: MatDialog, public noteService: NotesService, private _snackBar: MatSnackBar){}


  ngOnInit(): void {
    this.getDataFromTable();
  }

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  readDialog(){
    const dialogRef = this.dialog.open(ReadDialogComponent, {
      //data: data,
      height: 'auto',
      width: '380px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((data) => {
      this.getDataFromTable();
    });
  }

  getDataFromTable() {
    this.noteService.getData().subscribe((data: any) => {
      if (data !== null) {
        this.notes = data['Data'];

      }
    });
  }


}
