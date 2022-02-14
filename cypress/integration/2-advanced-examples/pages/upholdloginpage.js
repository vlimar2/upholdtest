/// <reference types="cypress" />


export class UpholdLoginPage{

    loadGetinActionForm(){
        expect("Get in on the action").to.exist;
    }

    checkEmailPasswordCountry(email, password, country){
        cy.get(".sc-837deca9-1").check;
        cy.get(".react-select__value-container").check;
    }

    checkPolicyAndterms(){
        cy.get(".sc-e02fa7a5-0").check;
    }

    checkErrorMessage(){
        cy.get(".sc-837deca9-1").type("rafaellimayahoo.com");
    }

    checkErrorMessagedisappears(){
        cy.get(".sc-837deca9-1").type("rafaellima23@yahoo.com.br");
        cy.get(".sc-2afe22f7-10").should('not.exist');
    }

    shouldSeeTransparency(){
        cy.get("button[class='sc-b92f568f-0 gaVKms']")
        .should("be.disabled");    
    }

    GetStartedEnabled(){
        cy.get(".sc-837deca9-1").type("rafaellima23@yahoo.com.br");
        cy.get("div[class='react-select__value-container css-1hwfws3']").type("Portugal{enter}");
        cy.get("div[class='react-select__value-container css-1hwfws3']").type("Porto{enter}");
        cy.get("div[class='sc-e02fa7a5-0 wXwyH']").check;
        cy.get('.sc-7d0c3c76-0 > .sc-b92f568f-0 > .sc-5af3672a-0')
        .should("not.be.disabled")  
    }
}

export const loginPage = new UpholdLoginPage
    