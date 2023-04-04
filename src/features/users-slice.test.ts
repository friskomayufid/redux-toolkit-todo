import { addUser, createUser, usersReducer } from './users-slice';

describe('usersSlice', () => {
  const initialState = {
    entities: [
      createUser({ realName: 'Estes', alterEgo: 'Gogogo' }),
      createUser({ realName: 'Mathilda', alterEgo: 'Gogogo' }),
    ],
  };

  it(`should add a user when the ${addUser}`, () => {
    const user = createUser({ realName: 'Johnson', alterEgo: 'Geming' });
    const action = addUser(user);
    const newState = usersReducer(initialState, action);

    expect(newState.entities).toEqual([user, ...initialState.entities]);
  });
});
