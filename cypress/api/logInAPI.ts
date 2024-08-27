import "cypress-plugin-api"
import testdata from "../fixtures/loginData.cy"

export default class LogInAPI {
    apiLogIn(){
        cy.step("Login using the API").api({
            method: 'POST',
            url: '/users/login',
            body: {
                "email": testdata.email,
                "password": testdata.password
            }
        }).then((response) => {
            expect(response.status).eq(200)
        })  
    }

}