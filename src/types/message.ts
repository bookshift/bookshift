export interface Message {
  sendingUserId: string;
  receivingUserId: string;
  messageBody: string;
  read: boolean;
}
