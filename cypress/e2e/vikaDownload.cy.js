describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://infourok.ru/scenariy-shkolnogo-spektaklya-alisa-v-strane-chudes-2520494.html')

    let values = []
    cy.get('.WordSection1')
      .find('p')
      .each(($el, $index) => {
        cy.wrap($el)
          .invoke('prop', 'innerText')
          .then(elem => {
            if ($index !== 0)
            values.push(elem.trim())
            cy.writeFile('scenario.txt', `${elem.trim()}\n`,{ flag: 'a+' })
            })
          })
      })
  })
