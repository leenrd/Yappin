import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorToolBox from "./editor-toolbox";

const Editor = ({
  content,
  onChange,
}: {
  content: string;
  onChange: (richtext: string) => void;
}) => {
  const editor = useEditor({
    autofocus: true,
    extensions: [StarterKit.configure()],
    editorProps: {
      attributes: {
        class: "rounded-md min-h-[450px] bg-background p-4",
      },
    },
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });
  return (
    <div className="bg-secondary rounded-md">
      <EditorToolBox editor={editor} />
      <div className="prose prose-sm">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
