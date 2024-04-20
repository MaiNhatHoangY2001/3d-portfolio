import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { LanguageSettingComponent } from '../../components/language-setting/language-setting.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule, NgFor, LanguageSettingComponent, ButtonModule, ToolbarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
