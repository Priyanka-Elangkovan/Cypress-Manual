describe('My first test suite', function() 
{
it('My first test case', function() 
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type("ca");
        cy.get('.product:visible').should('have.length',4);
    })
it('clicking the Top deals hyperlink',function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('[href="#/offers"]').click();
})

//Using the parent child process to get down to use only that element

it('Adding the second product to the cart', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.wait(1000);
        cy.get('.search-keyword').type("ca");
        cy.get('.products').find('.product').should('have.length',4);
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    })

it('adding the tomato to the cart by name', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.wait(2000);
        
        cy.get('.products').find('.product').each(($e1,index, $list)=> {
            const item = $e1.find('.product-name').text()
            if (item.includes('Tomato'))
            {
                cy.wrap($e1).find('button').click()
                cy.get('.brand').then(function(ind1)
                {   
                    cy.log(ind1.text())
                })
            }
        })
        //ind = ind +1;
        //cy.get('.products').find('.product').eq(ind).contains('ADD TO CART').click();
    })

})

