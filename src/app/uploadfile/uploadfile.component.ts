import { Component, ElementRef, ViewChild, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Archivo } from '../model/archivo';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {

  private form: FormGroup;
  private loading = false;

  @Input()
  private propiedades: Archivo;

  @Output()
  private archivo = new EventEmitter<Archivo>();

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    this.createForm();
  }


  private createForm() {
    const formGroup = {};

    formGroup[this.propiedades.id] = new FormControl(this.propiedades.valor || '',
      this.mapValidators(this.propiedades.requerido));
    this.form = new FormGroup(formGroup);
  }

  private mapValidators(requerido) {
    const formValidators = [];

    if (requerido) {
      formValidators.push(Validators.required);
    }

    return formValidators;
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.propiedades.nombre = file.name;
        this.propiedades.valor = reader.result.split(',')[1];
        this.archivo.emit(this.propiedades);
      };
    }
  }

  clearFile() {
    this.form.get('' + this.propiedades.id).setValue(null);
    this.fileInput.nativeElement.value = '';
    this.propiedades.valor = null;
    this.propiedades.nombre = '';
    this.archivo.emit(this.propiedades);
  }

}
