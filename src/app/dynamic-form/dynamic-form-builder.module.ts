import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { FieldBuilderComponent } from './form-builder/form-builder.component';
import { InputBoxComponent } from './component/input-box/input-box.component';
import { FileComponent } from './component/file/file.component';
import { RadioComponent } from './component/radio/radio.component';
import { DropDownComponent } from './component/dropdown/dropdown.component';
import { CheckBoxComponent } from './component/checkbox/checkbox.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    DynamicFormBuilderComponent,
    FieldBuilderComponent,
    InputBoxComponent,
    DropDownComponent,
    CheckBoxComponent,
    FileComponent,
    RadioComponent,
  ],
  exports: [DynamicFormBuilderComponent],
  providers: [],
})
export class DynamicFormBuilderModule {}
