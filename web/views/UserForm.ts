import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      this.model.set({ name: input.value });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onHeaderHover(): void {
    console.log('H1 was hovered');
  }

  onButtonClick(): void {
    console.log('Click click');
  }

  template(): string {
    return `
      <div>
        <h1> User Form </h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-name">Change Name</button>
        <button class="set-age">Set random age</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }
}
