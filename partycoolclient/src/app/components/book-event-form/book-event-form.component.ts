import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';



@Component({
  selector: 'app-book-event-form',
  templateUrl: './book-event-form.component.html',
  styleUrls: ['./book-event-form.component.css']
})
export class BookEventFormComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  public languageShort = this.languageService.languageConfig[this.languageService.selectedLanguage];

  public formatDate = (): string => {
    let year: string = new Date().getFullYear().toString();
    let month: number | string = new Date().getMonth() + 1;
    let day: number | string = new Date().getDate();

    month >= 10 ? month.toString() : month = "0" + month.toString();
    day >= 10 ? day.toString() : day = "0" + day.toString();

    return year + "-" + month + "-" + day;
  }

  ngOnInit(): void {
  }

}
