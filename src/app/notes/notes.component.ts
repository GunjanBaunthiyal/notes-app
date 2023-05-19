import { Component, OnInit, Inject } from '@angular/core';
import { CreateComponent } from '../create/create.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../notes.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  notes: any = [];
  public cancelClicked: boolean = false;
  public popoverTitle: string = 'Confirm Close';
  public popoverMessage: string = 'Are you sure you want to delete it?';

  constructor(public dialog: MatDialog, public noteService: NotesService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getDataFromTable();
  }

  
  goToCreateNote() {
    const dialogRef = this.dialog.open(CreateComponent, {
      //data: data,
      height: 'auto',
      width: '380px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((data) => {
      this.getDataFromTable();
    });
  }

  openSnackBar() {
    this._snackBar.open('Note added successfully', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  
  getDataFromTable() {
    this.noteService.getData().subscribe((data: any) => {
      if (data !== null) {
        this.notes = data['Data'];

      }
    });
  }

  goToEditNote(note: any) {
    //this.noteService.update(noteid).subscribe((data) => {
      const dialogRef = this.dialog.open(CreateComponent, {
        data:note,
        height: 'auto',
        width: '280px',
        autoFocus: false,
      });
      dialogRef.afterClosed().subscribe((data) => {
        //this.notes = data['Data'];
        this.getDataFromTable();
        this.cancel();
      });
   // });
    
  }

  deleteNote(note: any) {
    debugger
    const dialogRef = this.dialog.open(ConfirmationComponent,{
      data:note
      });
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        // if (confirmed) {
        //     this.deleteProduct(id);
        // } 
        this.getDataFromTable();
        this.cancel();
    });
  }
  cancel(){
    this.dialog.closeAll();
  }

  

}
