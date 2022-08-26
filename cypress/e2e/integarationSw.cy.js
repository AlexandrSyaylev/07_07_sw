
describe('test suite swagger - user operation', () => {
  const user = require("../fixtures/user.json");

  it('Should create new user', () => {    
    cy.addUser(user[0]);
    cy.getUser(user[0].username);
  })

  it('Should update user info', () => { //only for logged user
    cy.addUser(user[1]);
    cy.getUser(user[1].username);
    cy.login(user[1].username,user[1].password);
    cy.updateUser(user[1].username,user[2]);
  })

  it('Should delete user', () => {  //only for logged user
    cy.addUser(user[3]);
    cy.getUser(user[3].username);
    cy.login(user[3].username,user[3].password);
    cy.deleteUser(user[3].username);
  })

})