describe('Позитивная проверка формы логина и пароля', function () {

    it('Позитивная проверка формы логина и пароля', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('***');
        cy.get('.auth-form > form > [type="password"]').type('***');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
    })
})

describe('Негативная проверка формы логина и пароля', function () {

    it('Невалидный пароль, валидный email', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('***');
        cy.get('.auth-form > form > [type="password"]').type('***');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
    })
})