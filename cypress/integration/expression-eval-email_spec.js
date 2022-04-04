import { WEB_SITE } from "../util/constants";


export const testid = (testid, { visible = false, allowDisabled = false } = {}) => {
  return `[testid="${testid}"]${visible ? ':visible' : ''}${allowDisabled ? '' : ':not([disabled])'}`;
};


describe('My First Test', () => {
    it('Does not do much!', () => {
      cy.visit(WEB_SITE);      
      cy.get(`[test_id="expression_input"`).type("2+3");
      cy.get(`[test_id="email_input"`).type("ubo_rules@yahoo.com");
      cy.wait(200);
      cy.get(`[test_id="expression_submit"`).click();
    })
  })