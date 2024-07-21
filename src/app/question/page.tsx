import { QuestionForm } from "./form";

export default function Page() {
    return (
        <div className="flex flex-col m-12 items-center space-y-4">
            <h1 className="text-4xl font-bold">Question</h1>
            <QuestionForm />
        </div>
    );
}