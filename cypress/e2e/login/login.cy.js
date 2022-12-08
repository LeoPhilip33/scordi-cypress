const wrongEmailPassword = {
    email: 'test@test.fr',
    password: 'testPassword33_',
    error: 'Identifiant ou mot de passe incorrect'
}

const correctEmailPassword = {
    email: 'cypress@test.fr',
    password: 'Azertyuiop33_'
}

describe('login', () => {
    loginWithWrongEmailPassword();
    login();
})

function loginWithWrongEmailPassword(){
    it('Log in with wrong email address and wrong password', () => {
        cy.visit('http://scordi-front.yohanntonnerre.fr/auth');
        cy.get('input[type="email"]').type(wrongEmailPassword.email);
        cy.get('input[type="password"]').type(wrongEmailPassword.password);
        cy.get('form button').click();
        cy.contains(wrongEmailPassword.error).should('be.visible');
    })
}

function login(){
    it('Log in', () => {
        cy.visit('http://scordi-front.yohanntonnerre.fr/auth');
        cy.get('input[type="email"]').type(correctEmailPassword.email);
        cy.get('input[type="password"]').type(correctEmailPassword.password);
        cy.get('form button').click();
        cy.get('.friend-nav-bar').should('be.visible');
    })
}