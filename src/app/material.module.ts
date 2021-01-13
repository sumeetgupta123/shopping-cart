import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  imports: [
    MatButtonModule,
    MatRadioModule,
    MatButtonToggleModule,
    CommonModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSlideToggleModule, 
  ],
  exports: [
    MatButtonModule,
    MatRadioModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSlideToggleModule,  
  ]
})
export class MaterialModule { }
