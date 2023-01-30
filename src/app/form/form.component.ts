import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { titles } from './titles';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() changeTheme = new EventEmitter();

  titles = titles;
  title = '';

  form = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', [
      Validators.pattern(
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/
      ),
    ]),
    terms: new FormControl('', [Validators.required]),
  });

  onThemeChange(ev: CustomEvent<string[]>) {
    this.changeTheme.emit(ev.detail[0]);
  }

  onCancel() {
    dispatchEvent(new CustomEvent('ldNotificationClear'));
    dispatchEvent(
      new CustomEvent('ldNotificationAdd', {
        detail: {
          content: "This button doesn't really do anything. 👻",
          type: 'warn',
        },
      })
    );
  }
  onSubmit() {
    this.form.markAsDirty();
    if (this.form.invalid) {
      dispatchEvent(new CustomEvent('ldNotificationClear'));
      dispatchEvent(
        new CustomEvent('ldNotificationAdd', {
          detail: {
            content: 'The form is invalid! 😱',
            type: 'alert',
          },
        })
      );
    } else {
      dispatchEvent(new CustomEvent('ldNotificationClear'));
      dispatchEvent(
        new CustomEvent('ldNotificationAdd', {
          detail: {
            content: `
              <div>
                <div>Thanks! We hope you like this sandbox. 🤗</div>
                <div>
                  <a class='font-bold hover:underline' style="color: inherit" href='https://github.com/emdgroup-liquid/liquid/discussions' target='_blank'><b>Reach out</b></a>
                  if you have any questions!
                </div>
              </div>`,
            type: 'info',
            timeout: 0,
          },
        })
      );
    }
  }
}
