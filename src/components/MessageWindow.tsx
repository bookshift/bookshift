import Message from './Message';

//is this already declared somewhere? couldn't find it
type MessageType = {
  id: string;
  messageBody: string;
  sentTimestamp: Date;
  read: boolean;
  sendingUser: {
    id: string;
    username: string | null;
  };
  receivingUser: {
    id: string;
    username: string | null;
  };
};

type MessageWindowProps = {
  messages: MessageType[] | undefined;
};

const MessageWindow = ({ messages }: MessageWindowProps) => {
  const baseStyle =
    'm-7 rounded-md bg-pink-alt-color border-1 border-tertiary-color justify-self-start max-w-md p-4 border-2 rounded-md';
  const left = baseStyle + ' bg-pink-alt-color';
  const right = baseStyle + ' bg-background-color ml-auto';

  return (
    <div>
      {messages?.map((message) => (
        <Message
          key={message.id}
          messageBody={message.messageBody}
          read={message.read}
          sentTimestamp={message.sentTimestamp}
        />
      ))}
    </div>
  );
};

export default MessageWindow;
