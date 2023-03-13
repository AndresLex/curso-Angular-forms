import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  // Un FormControl tiene por defecto 3 parametros de entrada
  // 1-Valor por defecto
  // 2-Validaciones Sincronas, pueden ser varias validaciones dentro de un array
  // 3-Validaciones Asincronas

  nameField = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('#000000');
  dateField = new FormControl('');
  ageField = new FormControl('');
  monthField = new FormControl('');
  passwordField = new FormControl('');
  priceField = new FormControl('');
  weekField = new FormControl('');
  timefield = new FormControl('');
  searchField = new FormControl('');
  descriptionField = new FormControl('');
  // Select de una sola opcion
  categoryField = new FormControl('category-1');
  // Select de multiple opcion
  tagField = new FormControl('tag-1');
  // inputs tipo checkbox
  agreField = new FormControl(false);
  // inputs tipo radio
  // Radiogroup
  genderField = new FormControl('');
  zoneField = new FormControl('');
  // Checkboxgroup
  preferTecField = new FormControl('');
  preferModField = new FormControl('');
  preferCieField = new FormControl('');

  //Ahora los FormGroup: Conjunto de FormControl
  // Dentro de () se agragan todos los campos con un objeto {}
  // Ya no se usan las variables como instancia sino como clave: valor del objeto
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    phone: new FormControl(''),
    color: new FormControl('#000000'),
    date: new FormControl(''),
    age: new FormControl(''),
    month: new FormControl(''),
    password: new FormControl(''),
    price: new FormControl(''),
    week: new FormControl(''),
    time: new FormControl(''),
    search: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    tag: new FormControl(''),
    agre: new FormControl(false),
    gender: new FormControl(''),
    zone: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges
    .subscribe(value => {
      console.log(value);
    })
  }

  get nameForm(){
    return this.form.get('name');
  }

  getNameFormValue() {
    console.log(this.nameForm.value);
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  get isRequerido(){
    return this.nameForm.touched && this.nameForm.hasError('required');
  }

  get isNameFormValid() {
    return this.nameForm.touched && this.nameForm.valid;
  }

  get isNameFormInvalid() {
    return this.nameForm.touched && this.nameForm.invalid;
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

  get emailForm() {
    return this.form.get('email');
  }

  get phoneForm() {
    return this.form.get('phone');
  }
  get colorForm() {
    return this.form.get('color');
  }

  get dateForm() {
    return this.form.get('date');
  }
    age: new FormControl(''),
    month: new FormControl(''),
    password: new FormControl(''),
    price: new FormControl(''),
    week: new FormControl(''),
    time: new FormControl(''),
    search: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    tag: new FormControl(''),
    agre: new FormControl(false),
    gender: new FormControl(''),
    zone: new FormControl(''),

  save(event) {
    console.log(this.form.value);
  }

}
