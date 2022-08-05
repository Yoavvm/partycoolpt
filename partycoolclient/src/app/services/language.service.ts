import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  selectedLanguage: string = 'heb';

  languageConfig: any = {
    heb: {
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


}
