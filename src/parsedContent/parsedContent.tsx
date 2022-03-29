import ReactMarkdown from 'react-markdown';

export const ParsedContent = ({ content }: { content: string }): JSX.Element => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
};
