import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';



@Component({
  selector: 'app-book-event-form',
  templateUrl: './book-event-form.component.html',
  styleUrls: ['./book-event-form.component.css']
})
export class BookEventFormComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  public currentDate = Date.now();

  ngOnInit(): void {
  }

}
