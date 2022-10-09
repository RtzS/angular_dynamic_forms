import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "dynamic-form-builder",
  template: `
    <form [formGroup]="form" class="form-horizontal">
      <div *ngFor="let field of fields">
        <field-builder [myField]="field" [myForm]="form"></field-builder>
      </div>
      <div class="form-row"></div>
      <div class="form-group row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <button
            type="submit"
            class="btn btn-primary"
            (click)="onSubmit.emit(this.form.value)"
          >
            {{ formBtnLabel }}
          </button>
        </div>
      </div>
    </form>
  `,
})
export class DynamicFormBuilderComponent implements OnInit, OnChanges {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  @Input() formBtnLabel: string; // config also work instead of single btn label
  form: FormGroup;
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    let fieldsCtrls = {};
    for (let field of this.fields) {
      if (field.type != "checkbox") {
        fieldsCtrls[field.name] = new FormControl(field.value || "", [
          Validators.required,
          Validators.pattern(field.pattern),
        ]);
      } else {
        let opts = {};
        for (let opt of field.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[field.name] = new FormGroup(opts);
      }
    }
    this.form = new FormGroup(fieldsCtrls);
  }

  private setValidatorDynamically(field, fieldsControl: any): void {
    switch (true) {
      case field.required:
        fieldsControl.setValidators([Validators.required]);
        break;
      case field.pattern:
        fieldsControl.setValidators([Validators.pattern(field.pattern)]);
        break;
      default:
        break;
    }
  }
}
