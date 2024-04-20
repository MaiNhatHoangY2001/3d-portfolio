import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {}

  initLanguage(): void {
    this.translate.addLangs(['en', 'vi']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.getLanguage());
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
  }

  getLanguage(): string {
    const browserLang = this.translate.getBrowserLang() || '';
    return browserLang.match(/en|vi/) ? browserLang : 'en';
  }
}
