import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import EditorJS, { OutputBlockData } from '@editorjs/editorjs';
import Header from '@editorjs/header';

interface IEditorProps {
  handleChange: (value: OutputBlockData[]) => void;
  initialValue: OutputBlockData[];
}

const Editor: React.FC<IEditorProps> = observer(props => {
  const { handleChange, initialValue } = props;

  // Effects
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
      data: {
        blocks: initialValue,
      },
      placeholder: 'Введите текст вашей статьи',
      async onChange() {
        const { blocks } = await editor.save();
        handleChange(blocks);
      },
      tools: {
        header: Header,
      },
    });

    return () => {
      editor.isReady.then(() => editor.destroy());
    };
  }, []);

  // Renders
  return (
    <div id="editorjs" />
  );
});

export default Editor;