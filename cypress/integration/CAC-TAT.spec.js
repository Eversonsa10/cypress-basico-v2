/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(()=> {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatorios', function() {
       cy.get('#firstName').type('Everson')
       cy.get('#lastName').type('Araujo')
       cy.get('#email').type('everson@email.com')
       cy.get('#open-text-area').type('Testee')
       cy.get('.button[type="submit"]').click()

       cy.get('.success').should('be.visible')
    })

    it('preenche o campo com email invalido obrigatorios', function() {
        const textoLongo = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like'
        cy.get('#firstName').type('Everson')
        cy.get('#lastName').type('Araujo')
        cy.get('#email').type('everson@email,com')
        cy.get('#open-text-area').type(textoLongo,{delay: 0})
        cy.get('.button[type="submit"]').click()
 
        cy.get('.error').should('be.visible')
     })

     it('preenche o campo  telefone com valor nao numerico', ()=> {
        cy.get('#phone').type('cddj').should('have.value','')
     })

     it('Deve validar campo de telefone nao informado quando se torna obrigatorio', function() {
        const textoLongo = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like'
        cy.get('#firstName').type('Everson')
        cy.get('#lastName').type('Araujo')
        cy.get('#email').type('everson@email.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type(textoLongo,{delay: 0})
        cy.get('.button[type="submit"]').click()
 
        cy.get('.error').should('be.visible')
     })

     it('Seleciona o produto Youtube', ()=> {
        cy.get('#product').select('YouTube').should('have.value','youtube')
     })

     it('Seleciona o produto Youtube pelo indice', ()=> {
        cy.get('#product').select(4).should('have.value','youtube')
     })

     
     it('Marca o tipo Radio', ()=> {
        cy.get('input[type="radio"][value="feedback"]')
          .check()
          .should('have.value','feedback')
     })

     it('Abrir navegador', ()=> {
      cy.get('#privacy a')
        .should('have.attr','target', '_blank')
     })

     it.only('Abrir navegador outra aba', ()=> {
      cy.get('#privacy a')
        .invoke('removeAttr', 'target')
        .click()

        cy.contains('Talking About Testing').should('be.visible')
   })

  })
