/// <reference types="cypress" />
import {loginPage} from "../2-advanced-examples/pages/upholdloginpage"

const { times } = require("lodash");

describe("Testing Uphold Website", () =>{
    beforeEach(() => {
        cy.visit('https://uphold.com/en/new-acquisition-landing-page-v1')
      })

    it("Load the Get it action form", () =>{
        expect("Get in on the action").to.exist;
    })

    it("Check the place holder for email, password and country", () =>{
        loginPage.checkEmailPasswordCountry();
    })

    it("Privacy Policy and terms of service", () =>{
        loginPage.checkPolicyAndterms();
    })

    it("Should check error message for invalid inputs", () =>{
        loginPage.checkErrorMessage();
        expect("Invalid email").to.exist;
    })

    it("Should check error message disappears entering for valid inputs", () =>{
        loginPage.checkErrorMessagedisappears();
    })

    it("Should see transparency option in Get Started menu", () =>{
        loginPage.shouldSeeTransparency();
    })

    it("Should see Get started enabled after correctly fill inputs", () =>{
        loginPage.GetStartedEnabled();
    })
})