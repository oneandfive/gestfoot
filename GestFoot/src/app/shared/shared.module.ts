import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { MenuLateralComponent } from '../layout/menu-lateral/menu-lateral.component';
import { MenuSuperiorComponent } from '../layout/menu-superior/menu-superior.component';
import { HomeComponent } from '../layout/home/home.component';
import { FooterComponent } from '../layout/footer/footer.component';

@NgModule({
  declarations: [
    MenuLateralComponent,
    MenuSuperiorComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
  ],
  exports: [
    CustomMaterialModule,
    MenuLateralComponent,
    MenuSuperiorComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class SharedModule { }
