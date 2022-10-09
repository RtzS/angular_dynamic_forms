import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "file",
  templateUrl: "./file.component.html",
  styleUrls: ["./file.component.css"],
})
export class FileComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.field.name].valid;
  }
  get isDirty() {
    return this.form.controls[this.field.name].dirty;
  }

  constructor() {}

  ngOnChange() {
    console.log(this.field.value);
  }

  public toggleHover(evt): void {}
}
