import DatePickerDemo from "@/components/DatePickerDemo";
import TextareaDemoForm from "@/components/TextAreaDemoForm";

export default function Home() {
  return (
    <div className="p-8 flex flex-col gap-2">
      <TextareaDemoForm />
      <DatePickerDemo />
    </div>
  );
}
