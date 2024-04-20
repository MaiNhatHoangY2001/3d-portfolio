import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TranslationService } from '../../services/translation.service';

interface Language {
  value: string;
  label: string;
}

const LANGUAGES = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'vi',
    label: 'Vietnam',
  },
];

@Component({
  selector: 'app-language-setting',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './language-setting.component.html',
  styleUrl: './language-setting.component.scss',
})
export class LanguageSettingComponent implements OnInit {
  lang: Language[] | undefined;
  selectedLang: Language | undefined;

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    const currentLanguage = this.translationService.getLanguage();
    const optionLanguage = LANGUAGES.find((lang) => lang.value === currentLanguage);
    this.lang = LANGUAGES;
    this.selectedLang = optionLanguage;
  }

  handleChangeLanguage(event: any): void {
    this.translationService.changeLanguage(event?.value?.value || 'en');
  }
}
