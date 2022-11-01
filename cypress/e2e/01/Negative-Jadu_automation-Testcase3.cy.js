//as a User I'd like to be able to fill in the form
//So that I can request a demonstration

describe("User able to fill on mandatory fields Test", ()=>{
    it("Opens the correct homepage URL and User able to fill part form", ()=>{
        URL =("https://www.jadu.net/xfp/form/204");
        cy.visit (URL);
        setTimeout = 5
        
        //now to verify user is on correct URL    
        cy.url().should("include", "xfp/form/204");
        cy.get("#hs-eu-confirmation-button").click();
        setTimeout = 3 

        cy.get("#q3a3f0360c07a2f193f5d6c3deb4e3eaae30a645e").type("Kiran");   //First Name *Mandatory Field
        cy.get("#qd1739dc6339989544b4f2cb33c5589b732dd64be").type("Valand"); //Last Name *Mandatory Field
        cy.get("#q1849eab7c39f65c5cda6ad7e4d0b1bb6bf9662cd").type("kiranvalandhotmail.com");  // Email *Mandatory Field > missing the @ sign in the email > Error message should display
        cy.get("#q03edae0235e3eb19801864a76eb03461edf03534").type("Home.Office"); // Organisation Name  *Mandatory Field
        cy.xpath("/html/body/main/div/div[1]/div/form/footer/div/div/button").click() // Submit Button >  Install xpath plugin to support / index.js  #see the time & Jadu Test Environment and Instructions documents
        cy.xpath("/html/body/main/div/div[1]/div/form/footer/div/div[1]/button").click() //Submit Button > Confirmation Page
        
         
    })
})