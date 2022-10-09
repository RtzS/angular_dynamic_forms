import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "field-builder",
  templateUrl: "./form-builder.component.html",
})
export class FieldBuilderComponent implements OnInit {
  @Input() set myField(f: any) {
    this.field = f;
  }
  @Input() set myForm(f: any) {
    this.form = f;
  }
  public field: any;
  public form: any;

  get isValid() {
    return this.form.controls[this.field.name].valid;
  }
  get isDirty() {
    return (
      this.form.controls[this.field.name].dirty &&
      this.form.controls[this.field.name].value
    );
  }

  constructor() {}

  ngOnInit() {}
}
