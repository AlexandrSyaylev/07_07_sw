Cypress.Commands.add('addUser', (userCr) => {
    cy.request({
      method : 'POST', 
      url : '/v2/user', 
      body: {
        userCr
      }
    }).then( ({status}) => {
      expect(status).to.eq(200)       
    })
})

Cypress.Commands.add('getUser', (userCr) => {
    cy.request({
      method : 'GET', 
      url : `/v2/user/${userCr}`, 
    }).then( (resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body.username).to.eq(`${userCr}`)      
    })
})

Cypress.Commands.add('login', (username,userpass) => {
    cy.request({
      method : 'GET', 
      url : `/v2/user/login?username=${username}&password=${userpass}`
    })
    .then( (resp) => {
      expect(resp.status).to.eq(200);             
    })
})

Cypress.Commands.add('logout', () => {
    cy.request({
      method : 'GET', 
      url : '/v2/user/logout'   
    }).then( ({status}) => {
      expect(status.body).to.eq('successful operation')       
    })
})

Cypress.Commands.add('updateUser', (userCr, newobj) => {
    cy.request({
      method : 'PUT', 
      url : `/v2/user/${userCr}`, 
      body: {newobj}
    }).then( ({status}) => {
      expect(status).to.eq(200)       
    })
})

Cypress.Commands.add('deleteUser', (userCr) => {
    cy.request({
      method : 'DELETE', 
      url : `/v2/user/${userCr}`
    })
    .then( ({status}) => {
      expect(status).to.eq(404)       
    })
})