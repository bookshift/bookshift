import getMessages from '@/data-access/messages/get-user-messages';
import MessageWindow from './MessageWindow';

type windowIds = {
  sendersId: string;
  receiversId: string;
};

export async function ServerMessageWindow({
  sendersId,
  receiversId,
}: windowIds) {
  const messages = await getMessages(sendersId, receiversId);

  return <MessageWindow messages={messages} />;
}
