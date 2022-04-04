import { WEB_SITE, MAX_WAIT_TIME_MS } from "../util/constants";

export const testid = (testid, { visible = false, allowDisabled = false } = {}) => {
  return `[testid="${testid}"]${visible ? ':visible' : ''}${allowDisabled ? '' : ':not([disabled])'}`;
};

describe('Ensure expression is evaluated and email sent', () => {
    
    let expression = "7 * 3 ^2 - 99";
    let serverId = "ahf125vr";
    let targetEmail  = `recipient@${serverId}.mailosaur.net`;
    let recievedAfterDate = new Date(Date.now() - 600 * 1000); //search only emails sent last min

    it('Submits the expression and receives a result!', () => {
      cy.visit(WEB_SITE);      
      cy.get(`[test_id="expression_input"`).type(expression);
      cy.get(`[test_id="email_input"`).type(targetEmail);
      cy.wait(200);
      cy.get(`[test_id="expression_submit"`).click();
    })

    it('Receives the solution via email', () => {
      cy.mailosaurGetMessage(serverId, { sentTo: targetEmail}, {timeout: MAX_WAIT_TIME_MS, receivedAfter: recievedAfterDate}).then(email => {
          expect(email.subject).to.contains(expression);
          // Do something with the email body.  passwordResetLink = email.text.links[0].href;
      })
    })

  })