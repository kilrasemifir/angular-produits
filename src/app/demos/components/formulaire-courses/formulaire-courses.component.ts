import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-courses',
  templateUrl: './formulaire-courses.component.html',
  styleUrls: ['./formulaire-courses.component.css']
})
export class FormulaireCoursesComponent implements OnInit {

  course: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    console.log()
    this.course = this.formBuilder.group({
      titre: ['titre de ma course', Validators.required],
      date: [new Date().toISOString().slice(0, 10), Validators.required],
      articles: this.formBuilder.array([])
    })
  }

  ngOnInit(): void {
  }

  get articles(): FormArray {
    return this.course.get("articles") as FormArray
  }

  public addArticle() {
    this.articles.push(this.formBuilder.group({
      nom: [''],
      prix: [0],
      unite: ['']
    }))
  }

  public removeArticle(index: number){
    this.articles.removeAt(index);
  }

  onSubmit() {
    if (this.course.valid) alert(JSON.stringify(this.course.value))
    else alert("Invalid")
  }

}
