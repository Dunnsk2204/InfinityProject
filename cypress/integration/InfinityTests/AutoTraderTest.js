describe('Infinity Automation Technical Test', function() {

    beforeEach(function() {
        cy.visit('https://www.autotrader.co.uk/');
    })

    it ('Opens Auto Trader, Searches for a car and verifys that the correct car is shown', function() {

        let carPrice;
        let carTitle;

        cy.iframe('[title="SP Consent Message"]').find('button[title="Accept All"]').click()

        // Given
        cy.get("#postcode").clear()
        cy.get('#postcode').click()
        cy.get("#postcode").type("ST87HH", {force: true})
        cy.get('#distance').select('Within 50 miles', { force: true }).should('have.value', '50')
        cy.get('#make').select('Lamborghini', { force: true }).should('have.value', 'Lamborghini')
        cy.get('#model').select('Aventador', { force: true }).should('have.value', 'Aventador')
        cy.get('#maxPrice').select('250000', { force: true }).should('have.value', '250000')

        // when - (Submit btn clicked) & car chosen
        cy.get('.atds-button--primary').should('be.visible').click({force: true})
        cy.get(".search-page__products").children().first().click();

        // Then
        cy.get('h2[data-testid=advert-price]').then(function($text) {
            carPrice = $text.text()
            expect(carPrice).to.eq('£159,900')
        })

        cy.get('h1[data-testid=advert-title]').should('include.text', 'Lamborghini Aventador')

    })

    it ('Searches for a car with added filters', function() {

        let carPrice;
        let carTitle;

        cy.iframe('[title="SP Consent Message"]').find('button[title="Accept All"]').click()

        // Given
        cy.get("#postcode").clear()
        cy.get('#postcode').click()
        cy.get("#postcode").type("ST87HH", {force: true})
        cy.get('#distance').select('Within 50 miles', { force: true }).should('have.value', '50')
        cy.get('#make').select('Aston Martin', { force: true }).should('have.value', 'Aston Martin')
        cy.get('#model').select('DB11', { force: true }).should('have.value', 'DB11')


        cy.get('.atds-hero__more-options').click()
        cy.get('#aggregatedTrim').select('V12', { force: true }).should('have.value', 'V12')
        cy.get('#minPrice').select('75000', { force: true }).should('have.value', '75000')
        cy.get('#maxPrice').select('250000', { force: true }).should('have.value', '250000')
        cy.get('#minYear').select('2017', { force: true }).should('have.value', '2017')

        cy.get('.atds-button--primary').should('be.visible').click({force: true})
        cy.get(".search-page__products").children().first().click();


        // Then
        cy.get('h2[data-testid=advert-price]').then(function($text) {
            carPrice = $text.text()
            expect(carPrice).to.eq('£75,990')

            const priceReduced = parseInt(carPrice.replace('£', '').replace(',',''))

            cy.wrap(priceReduced).should('be.gte', 75000); // greater than or eq
            cy.wrap(priceReduced).should('be.lte', 250000); // less than or eq


        })

        cy.get('h1[data-testid=advert-title]').should('include.text', 'Aston Martin DB11')

    })

});

