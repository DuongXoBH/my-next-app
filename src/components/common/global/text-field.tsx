import { ICreateMailForm } from "@/components/page/mail/inbox/create-mail";
import { Editor } from "@tinymce/tinymce-react";
import { UseFormSetValue } from "react-hook-form";

export default function TinyEditorComponent({
  setContent,
  placeholder,
}: {
  setContent: UseFormSetValue<ICreateMailForm>;
  placeholder?: string;
}) {
  const handleEditorChange = (content: string) => {
    setContent("content",content);
  };

  return (
    <div>
      <Editor
        apiKey="8bt36y85i70z9dj45k7uax4q5rq7rcwdcyjgz3ztxcfct0es"
        scriptLoading={{ async: true, defer: true }}
        init={{
          height: 300,
          menubar: false,
          placeholder: placeholder ? placeholder : "Write something...",
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "code",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat| image ",
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
}
