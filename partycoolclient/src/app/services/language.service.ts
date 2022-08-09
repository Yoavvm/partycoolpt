import { Injectable } from '@angular/core';
import { AvailableLanguages } from '../types/available-languages';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  selectedLanguage:string = "HEB";
 
  languageConfig: any = {
    HEB: {
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
