import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import * as dynamicFormConfig from "./../assets/formData.json";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public form: FormGroup;
  public isParentForm = true;
  public isShowFormData: boolean;
  public showChildForm: boolean;
  public firstFormBtnLabel = (dynamicFormConfig as any).default.submitBtnLabel;
  public secondFormBtnLabel = (dynamicFormConfig as any).default.saveBtnLabel;
  public parentField: any[] = (dynamicFormConfig as any).default.parentField;
  private childFormField: any[] = [];
  private rawFormFields: any = (dynamicFormConfig as any).default;

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.childFormField)),
    });
  }

  public handleFirstFormAct(event: any): void {
    this.showChildForm = false;
    this.isShowFormData = false;
    for (let key in this.rawFormFields) {
      if (key === event.select_type) {
        this.childFormField = this.rawFormFields[key];
      }
    }
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.childFormField)),
    });
    this.showChildForm = event.select_type ? true : false;
  }

  public handleChildFormAct(): void {
    this.isShowFormData = true;
  }

  public onUpload(e): void {
    console.log(e);
  }
}
