interface MessageProps {
  messageBody: string;
  sentTimestamp: Date;
  read: boolean;
  className?: string;
}

const Message = ({
  messageBody,
  sentTimestamp,
  read,
  className,
}: MessageProps) => {
  return (
    <>
      <div className={className}>
        <p>{messageBody}</p>
        <p>{sentTimestamp.toLocaleString("en-GB", { timeZone: "UTC" })}</p>
      </div>
    </>
  );
};

export default Message;
