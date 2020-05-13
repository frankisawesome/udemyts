import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'MyName', id: 1 });

const rootDiv = document.getElementById('root') as Element;

const userForm = new UserForm(rootDiv, user);

userForm.render();
