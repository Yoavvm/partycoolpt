import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-book-event-form',
  templateUrl: './book-event-form.component.html',
  styleUrls: ['./book-event-form.component.css']
})
export class BookEventFormComponent implements OnInit {

  constructor() { }

  public selectedLanguage = 'hebrew';
  public langaugeConfig:any = {
    hebrew: {
      fullName: 'שם מלא',
      email: 'אימייל',
      mainCharacter: 'שם החוגג/ת',
      mainCharacterAge: 'גיל החוגג/ת',
      numberOfParticipants: 'מספר משתתפים',
      phoneNumber: 'מספר טלפון',
      companyName: 'שם החברה',
      eventDate: 'תאריך האירוע'
    }
  }

  ngOnInit(): void {
  }

}
