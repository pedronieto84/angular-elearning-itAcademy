import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.sass'],
})
export class AddModuleComponent implements OnInit {
  /* PROPERTIES */
  queryCourse?: string | null;

  miFormulario: FormGroup = this.fb.group({
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
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.queryCourse = data.course;
    });
    this.miFormulario.reset({
      moduleId: '',
      topics: '',
      title: '',
      description: '',
      imageUrl: '',
      route: '',
      courseId: '',
    });
  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
