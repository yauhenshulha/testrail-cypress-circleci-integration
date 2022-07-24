describe('Testrail', () => {
  const targetUrl = "https://www.google.com"
  const targetEl = "#test15"

  it(`C1 '${targetUrl}' should be loaded`, { tags: "testrail" }, function() {
    cy.visit(targetUrl)
    cy.url().should("contain", targetUrl)
  })

  it(`C2 '${targetUrl}' should contain '${targetEl}' button`, { tags: "testrail" }, function() {
    cy.visit(targetUrl)
    cy.get(targetEl).should("exist")
  })
})
