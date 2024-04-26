import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToolbarModule } from 'primeng/toolbar';
import { ThemeService } from '../../services/theme.service';
import { LanguageSettingComponent } from '../language-setting/language-setting.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LanguageSettingComponent, ToolbarModule, InputSwitchModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  checked = false;
  selectedTheme = 'dark';

  constructor(private themService: ThemeService) {}

  ngOnInit(): void {
    this.themService.setTheme(this.selectedTheme);
  }

  onThemeChange(theme: string): void {
    this.selectedTheme = theme;
    this.themService.setTheme(theme);
  }
}
