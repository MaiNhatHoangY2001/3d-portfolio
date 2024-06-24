import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '@app/components/header/header.component';
import { LanguageSettingComponent } from '@app/components/language-setting/language-setting.component';
import { TimeLineComponent } from '@app/components/time-line/time-line.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    HeaderComponent,
    TranslateModule,
    NgFor,
    ButtonModule,
    TimeLineComponent,
    LanguageSettingComponent,
    ToolbarModule,
  ],
})
export class HomeComponent {}
