describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Slide Scrolling', function () {
  it('Checks if slide scrolling works', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Italy');
  });
});

describe('Titles and descs', function () {
  it('Checks slides titles and desc are correct' , function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('contain', 'Italy').and('contain', 'Rome')
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom').and('contain', 'London')
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'France').and('contain', 'Paris')
  });
});

describe('Responsive Gallery Test', function () {
  const devices = [
    { name: 'Desktop', width: 1200, height: 800 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Mobile', width: 375, height: 667 }
  ];

  devices.forEach(device => {
    it(`Displays gallery correctly on ${device.name}`, function () {
      cy.viewport(device.width, device.height);
      cy.visit('http://localhost:3000');

      // Step 2: Verify if gallery layout adjusts to screen size
      cy.get('.swiper-wrapper').should('be.visible');

      // Step 3: Verify if navigation buttons are available and clickable
      cy.get('.swiper-button-prev').should('be.visible').click();
      cy.get('.swiper-button-next').should('be.visible').click();
    });
  });
});