import { isPlatformBrowser } from '@angular/common';
import { Component, effect, Inject, PLATFORM_ID, signal } from '@angular/core';

@Component({
  selector: 'app-mode',
  imports: [],
  templateUrl: './mode.component.html',
  styleUrl: './mode.component.scss',
})
export class ModeComponent {
  private theme = signal<'light' | 'dark'>('light');

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.initTheme();
    }

    effect(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.updateIcons(this.theme() === 'dark');
      }
    });
  }

  private initTheme(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const defaultTheme = savedTheme || (prefersDarkMode ? 'dark' : 'light');

    this.theme.set(defaultTheme);
    this.updateThemeClass();
  }

  toggleTheme(): void {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(newTheme);
    localStorage.setItem('theme', newTheme);
    this.updateThemeClass();
  }

  private updateThemeClass(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const isDark =
      this.theme() === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    document.documentElement.classList.toggle('dark', isDark);
  }

  private updateIcons(isDark: boolean): void {
    const darkModeIcon = document.getElementById('darkModeIcon');
    const lightModeIcon = document.getElementById('lightModeIcon');
    if (darkModeIcon && lightModeIcon) {
      darkModeIcon.classList.toggle('hidden', isDark);
      lightModeIcon.classList.toggle('hidden', !isDark);
    }
  }

  get currentTheme() {
    return this.theme();
  }
}
