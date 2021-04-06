import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePicturePipe } from './profilePicture/profilePicture.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ProfilePicturePipe
    ],
    exports: [
        ProfilePicturePipe
    ]
})
export class PipesModule { }
