import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../notes.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
    message: string = "Are you sure want to delete?"
    confirmButtonText = "Yes"
    cancelButtonText = "Cancel"
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';
    note : any =[];

    constructor(public dialog: MatDialog, public noteService: NotesService, private _snackBar: MatSnackBar,@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<ConfirmationComponent>) {
      if(data){
        this.message = data.message || this.message;
        if (data.buttonText) {
            this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
            this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        }
    }
    }

    ngOnInit(): void {
      this.note = this.data;
    }

    onConfirmClick(note: any){
      let upsert={Id:note}
      this.noteService.delete(upsert).subscribe(data => { });
      this.dialogRef.close(true);
      this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open('Delete successfull!!', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
