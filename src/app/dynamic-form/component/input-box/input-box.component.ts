import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

// text,email,tel,textarea,password,
@Component({
  selector: "inputbox",
  templateUrl: "./input-box.component.html",
})
export class InputBoxComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.field.name].valid;
  }
  get isDirty() {
    return this.form.controls[this.field.name].dirty;
  }

  constructor() {}
}
