//as a User I'd like to be able to fill in the form
//So that I can request a demonstration

describe("User able to fill full form and submit Test", ()=>{
    it("Opens the correct homepage URL and User able to fill form", ()=>{
        URL =("https://www.jadu.net/xfp/form/204");
        cy.visit (URL);
        setTimeout = 5
        
        //now to verify user is on correct URL    
        cy.url().should("include", "xfp/form/204");
        cy.get("#hs-eu-confirmation-button").click();
        setTimeout = 3 

        cy.get("#q3a3f0360c07a2f193f5d6c3deb4e3eaae30a645e").type("Kiran");   //First Name *Mandatory Field
        cy.get("#qd1739dc6339989544b4f2cb33c5589b732dd64be").type("Valand"); //Last Name *Mandatory Field
        cy.get("#q1849eab7c39f65c5cda6ad7e4d0b1bb6bf9662cd").type("kiranvaland@hotmail.com"); //Email *Mandatory Field
        cy.get("#q46074f7038380274bd1a01b77e026c98036600e0").type("07738729444"); //Contact Number
        cy.get("#q03edae0235e3eb19801864a76eb03461edf03534").type("Home.Office"); // Organisation Name  *Mandatory Field
        cy.get("#q50349b6cff30a2d2546d383f6107bedcd16e705e").select("UK & Ireland"); // Country of residence
        cy.get("#q1bfa2b510de7dfe05d4da6b84bd768694740c685").select("Jadu CMS"); // Field of interest
        
        cy.get('a[href*="#qc10e3b757b486718defa7935c538283a364cd8ce_map"]').click(); // Map Location
        cy.get("#q3ef4d8d033d5e0e90bee868dc8d0ee3c69695468_dz").click() // Part of Map Location
        
        const selectFile = 'Jadu_test_upload.txt'  // Ensure this file is in the root of the project folder #see the Jadu Test Environment and Instructions Document

        cy.get('input[type=file]').selectFile('Jadu_test_upload.txt', { force: true }); // uploading a test document

        cy.get('[type=checkbox]').check("i_agree_to_receive_communications_from_jadu", { force: true }); //Checkbox agreement "I Agree"
        cy.xpath("/html/body/main/div/div[1]/div/form/footer/div/div/button").click() // Submit Button >  Install xpath plugin to support / index.js  #see the time & Jadu Test Environment and Instructions documents
        cy.xpath("/html/body/main/div/div[1]/div/form/footer/div/div[1]/button").click() //Submit Button > Confirmation Page
                
        
    })
})