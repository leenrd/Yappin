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
        class: "rounded-md py-4 min-h-[450px] bg-background ",
      },
    },
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className=" rounded-md">
      <EditorToolBox editor={editor} />
      <div className="prose prose-h1:*:text-foreground prose-h2:*:text-foreground prose-h3:*:text-foreground prose-strong:*:text-foreground min-w-full text-foreground">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
