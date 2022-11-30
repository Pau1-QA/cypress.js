describe('Позитивная проверка токена тренера', function () {

    it('Валидный токен тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get('#id_trainer_form').type('***');
        cy.get('.submit_authorization').click();
        cy.contains('Покемоны');
    })
})

describe('Негативная проверка токена тренера', function () {

    it('Невалидный токен тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get('#id_trainer_form').type('***');
        cy.get('.submit_authorization').click();
        cy.contains('Покемоны');
    })
})

describe('Фильтр покемонов в покеболах', function () {

    it('Покемоны в покеболах', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get('#id_trainer_form').type('***');
        cy.get('.submit_authorization').click();
        cy.contains('Покемоны');
        cy.get('.checkbox_figure').click();
        cy.get('#menuToggle').click();
    })
})