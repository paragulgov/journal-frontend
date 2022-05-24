import React, { useEffect } from 'react';
import EditorJS, { OutputBlockData } from '@editorjs/editorjs';
import Header from '@editorjs/header';

interface IArticleContentProps {
  blocks: OutputBlockData[];
}

const ArticleContent: React.FC<IArticleContentProps> = ({ blocks }) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
      data: {
        blocks: blocks,
      },
      tools: {
        header: Header,
      },
      readOnly: true,
    });

    return () => {
      editor.isReady.then(() => editor.destroy());
    };
  }, []);

  return <div id="editorjs" />;
};

export default ArticleContent;
