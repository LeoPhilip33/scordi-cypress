const correctEmailPassword = {
    email: 'cypress@test.fr',
    password: 'Azertyuiop33_',
    userName: "cypress",
    date: '2022-10-10'
}

const wrongEmailPassword = {
    email: 'cypress@aze.fr',
    password: 'Az',
    password2: 'Azertyuiop33_',
    userName: "cypress",
    date: '2022-10-10',
    messageError1: 'Le mot de passe doit contenir au mini huit caractères, des majuscules, minuscules et un chiffre.'
}

const S_INSCRIRE = 'S\'inscrire';
const HA_TE_REVOILA = 'Ha, te revoilà !';

describe('register', () => {
    checkErors();
    register();
})

function checkErors() {
    it('check Errors', () => {
        cy.visit('http://scordi-front.yohanntonnerre.fr/auth/register');
        cy.contains(S_INSCRIRE).click();
        cy.contains(HA_TE_REVOILA).should('not.exist');
        cy.get('input[type="email"]').type(wrongEmailPassword.email);
        cy.get('input[placeholder="UserName"]').type(wrongEmailPassword.userName)
        cy.get('input[type="password"]').type(wrongEmailPassword.password);
        cy.get('input[type="date"]').type(wrongEmailPassword.date);
        cy.get('.checkmark').click();
        cy.contains(S_INSCRIRE).click();
        cy.contains(wrongEmailPassword.messageError1).should('be.visible')
        cy.get('input[type="password"]').type(wrongEmailPassword.password);
    })

}

function register(){
    it('Register account', () => {
        cy.visit('http://scordi-front.yohanntonnerre.fr/auth/register');
        cy.get('input[type="email"]').type(correctEmailPassword.email);
        cy.get('input[placeholder="UserName"]').type(correctEmailPassword.userName)
        cy.get('input[type="password"]').type(correctEmailPassword.password);
        cy.get('input[type="date"]').type(correctEmailPassword.date);
        cy.get('.checkmark').click();
        cy.contains(S_INSCRIRE).click();
        cy.contains(HA_TE_REVOILA).should('be.visible');
    })
}