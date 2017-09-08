const user = "artvandelay@aol.com";

class Message {
  constructor(from = user, to = "", subject = "", body = "") {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.body = body;
  }
}

let messages = JSON.parse(localStorage.getItem('messages'));
let messageDraft = new Message();

if(!messages) {
  messages = {
    sent: [
      {to: "spam@urmom.com", subject: "Please help", body: "I gotta give away all these millions to someone"},
      {to: "bill@bank.com", subject: "FORCLOSED", body: "u been forclosed if you wanna not then clik"}
    ],
    inbox: [
      {from: "spam@urmom.com", subject: "Hi I'm Prince Nigeria the prince of Nigeria", body: "and as the prince of Nigeria I gotta give away this money, would you like it?"},
      {from: "bill@bank.com", subject: "4KLOZED", body: "GIMme ur bank accont info or ur 5closed on jerk"}
    ]
  };
}

const MessageStore = {
  getInboxMessages() {
    return messages.inbox.slice();
  },
  getSentMessages() {
    return messages.sent.slice();
  },
  getMessageDraft() {
    return messageDraft;
  },
  sendDraft() {
    messages.sent.push(messageDraft);
    messageDraft = new Message();
    localStorage.setItem('messages', JSON.stringify(messages));
  },
  updateDraftField(field, value) {
    messageDraft[field] = value;
  }
};

module.exports = MessageStore;
