import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { CreateComponent } from './create/create.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReadDialogComponent } from './read-dialog/read-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    CreateComponent,
    ConfirmationComponent,
    SidebarComponent,
    ReadDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FontAwesomeModule,
  ],
  providers: [],
  exports: [MatDialogModule, CreateComponent],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA]
})
export class AppModule { }
