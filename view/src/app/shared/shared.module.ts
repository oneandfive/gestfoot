import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { MatAutocompleteModule,
         MatButtonModule,
         MatButtonToggleModule,
         MatCardModule,
         MatCheckboxModule,
         MatChipsModule,
         MatDatepickerModule,
         MatDialogModule,
         MatExpansionModule,
         MatGridListModule,
         MatIconModule,
         MatInputModule,
         MatListModule,
         MatMenuModule,
         MatNativeDateModule,
         MatPaginatorModule,
         MatProgressBarModule,
         MatProgressSpinnerModule,
         MatRadioModule,
         MatRippleModule,
         MatSelectModule,
         MatSidenavModule,
         MatSliderModule,
         MatSlideToggleModule,
         MatSnackBarModule,
         MatSortModule,
         MatTableModule,
         MatTabsModule,
         MatToolbarModule,
         MatTooltipModule,
         MatStepperModule } from '@angular/material';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    TranslateModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule
  ],
  exports: [
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    TranslateModule,
    ContentHeaderComponent,
    BreadcrumbComponent
  ],
  declarations: [
    ContentHeaderComponent,
    BreadcrumbComponent,
  ]
})
export class SharedModule { }
