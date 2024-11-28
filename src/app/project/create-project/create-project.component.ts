import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  project_name: string;
  project_description: string;
  co_planner: string;
  project_budget: string;
}

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss',
})
export class CreateProjectComponent {
  readonly dialogRef = inject(MatDialogRef<CreateProjectComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  private fb = inject(FormBuilder);
  createProjectForm: FormGroup = this.fb.group({
    project_name: ['', Validators.required],
    project_description: ['', Validators.required],
    co_planner: ['', Validators.required],
    project_budget: ['', Validators.required],
  });

  getRequiredError(key: any): any {
    return this.createProjectForm.controls[key].hasError('required');
  }

  getValidationErrors(key: any): any {
    return (
      (this.createProjectForm.controls[key].touched ||
        this.createProjectForm.controls[key].dirty) &&
      this.createProjectForm.controls[key].errors
    );
  }

  getFormControlValue(key: any): any {
    return this.createProjectForm.get(key)?.value;
  }

  close(): void {
    this.dialogRef.close();
  }

  update(): void {
    this.dialogRef.close({
      title: this.getFormControlValue('project_name'),
      description: this.getFormControlValue('project_description'),
      budget: this.getFormControlValue('project_budget'),
      positions: 0,
      collaborators: this.getFormControlValue('co_planner'),
    });
  }
}
