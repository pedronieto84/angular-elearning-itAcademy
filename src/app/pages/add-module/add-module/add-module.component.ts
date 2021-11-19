import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.sass'],
})
export class AddModuleComponent implements OnInit {
  /* PROPERTIES */
  queryCourse?: string | null;

  myForm: FormGroup = this.fb.group({
    moduleId: [, [Validators.required, Validators.min(0)]],
    topics: [, [Validators.required, Validators.minLength(3)]],
    title: [, [Validators.required, Validators.minLength(3)]],
    description: [, [Validators.required, Validators.minLength(3)]],
    imageUrl: [, [Validators.required, Validators.minLength(3)]],
    route: [, [Validators.required, Validators.minLength(3)]],
    courseId: [, [Validators.required, Validators.min(0)]],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.queryCourse = data.course;
    });
  }

  isValid(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.dataService
      .addModule(this.myForm.value)
      .subscribe((resp) => console.log(resp));
  }
}
