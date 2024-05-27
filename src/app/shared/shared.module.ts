import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    DialogComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [DialogComponent, ButtonComponent]
})
export class SharedModule { }
