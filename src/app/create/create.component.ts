import { Component, OnInit, Optional, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { NotesService } from '../notes.service';
import { NgModule } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  addform: FormGroup;
  tablelist: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public noteService: NotesService,
    public formbuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.addform = this.formbuilder.group({
      id: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // this.onSubmit();
    this.tablelist = this.data;
    this.addform.controls['id'].setValue(this.data.Id);
    this.addform.controls['title'].setValue(this.data.Title);
    this.addform.controls['description'].setValue(this.data.Description);
  }

  //  openDialog(): void {
  //    this.dialog.open(CreateComponent, {

  //    });
  //  }

  onSubmit() {
    debugger;
    let userInfo = {
      id: this.addform.controls['id'].value,
      title: this.addform.controls['title'].value,
      description: this.addform.controls['description'].value,
    };

    if (this.data == null) {
      this.noteService.register(userInfo).subscribe((data) => {
        if (data !== null) {
          this.dialogRef.close();
        }
      });
    } else {
      this.noteService.update(userInfo).subscribe((data) => {});
    }
    this.dialogRef.close();
  }
  onCancel() {
    this.dialogRef.close();
  }

  openSnackBar() {
    this._snackBar.open('Success!!', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
