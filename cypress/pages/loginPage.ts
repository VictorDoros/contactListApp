import loginSelectors from '../selectors/login.sel'
import loginData from "../fixtures/loginData.cy"
import loginAPI from '../api/logInAPI'

export default class LogInPage {
    private get emailInputField() {
        return loginSelectors.emailField
    }

    private get passwordInputField() {
        return loginSelectors.passwordField
    }

    private get submitButton() {
        return loginSelectors.submitButton
    }

    private get header() {
        return loginSelectors.header
    }

    loadLoginPage() {
        cy.visit('/')
        cy.get(this.header).should('have.text', 'Contact List App')
    }

    logIn(){
        cy.get(this.emailInputField).type(loginData.email)
        cy.get(this.passwordInputField).type(loginData.password)
        cy.get(this.submitButton).click()
        cy.get(this.header).should('have.text', 'Contact List')
    }

    logInUsingAPI(){
        return new loginAPI().apiLogIn()
    }
}