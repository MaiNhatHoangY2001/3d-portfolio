import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '@app/components/header/header.component';
import { LanguageSettingComponent } from '@app/components/language-setting/language-setting.component';
import { AboutMeComponent } from '@app/components/layout/about-me/about-me.component';
import { FooterComponent } from '@app/components/layout/footer/footer.component';
import { LatestWorkComponent } from '@app/components/layout/latest-work/latest-work.component';
import { SkillComponent } from '@app/components/layout/skill/skill.component';
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
    LanguageSettingComponent,
    ToolbarModule,
    AboutMeComponent,
    SkillComponent,
    LatestWorkComponent,
    FooterComponent,
  ],
})
export class HomeComponent {
  listIcon = [
    { alt: 'github', img: 'assets/img/github.png', link: 'https://github.com/MaiNhatHoangY2001' },
    { alt: 'linked', img: 'assets/img/linked.png', link: '#' },
    { alt: 'google', img: 'assets/img/google.png', link: '#' },
    { alt: 'facebook', img: 'assets/img/facebook.png', link: '#' },
  ];
}
