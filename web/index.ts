import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'MyName', id: 1 });

const rootDiv = document.getElementById('root') as Element;

const userEdit = new UserEdit(rootDiv, user);

userEdit.render();
