import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'liquid-sandbox-angular-tailwind';
  currentTheme = 'ocean';
  successMessages = [
    'Nice! 👍',
    'Aaaweeesome! 🙌',
    'Rock on! 🤘',
    'How cool is that?! 😎',
    'Rad! 🤓',
    'Supersonic! ⚡️',
    'Magic! ✨',
    'Groovy baby! 🕺',
    'Lovely! 🥰',
    'Smooth! 💆‍♀️',
    'Mind-blowing! 🤯️',
    'Excellent! 👌️',
    'Delicious! 🤤️',
    'Outa space! 👽',
  ];

  onChangeTheme(theme: string) {
    console.info('theme', theme);
    this.currentTheme = theme;
    setTimeout(() => {
      dispatchEvent(new CustomEvent('ldNotificationClear'));
      dispatchEvent(
        new CustomEvent('ldNotificationAdd', {
          detail: {
            content: this.successMessages[0],
            type: 'info',
            timeout: 2000,
          },
        })
      );
      this.successMessages = [
        ...this.successMessages.slice(1),
        this.successMessages[0],
      ];
    }, 500);
  }
}
