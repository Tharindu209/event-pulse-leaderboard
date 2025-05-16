
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export interface QuestionOption {
  id: string;
  text: string;
}

export interface QuestionProps {
  id: number;
  questionText: string;
  options: QuestionOption[];
  onAnswerSubmit: (questionId: number, selectedOption: string) => void;
  onNextQuestion: () => void;
}

const QuestionCard = ({ id, questionText, options, onAnswerSubmit, onNextQuestion }: QuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswerSubmit(id, selectedOption);
      onNextQuestion();
      setSelectedOption(""); // Reset selection for next question
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto animate-fade-in">
      <CardHeader>
        <CardTitle className="text-university-800">Question {id}</CardTitle>
        <CardDescription className="text-lg mt-2">{questionText}</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedOption} onValueChange={handleOptionChange} className="space-y-4">
          {options.map((option) => (
            <div key={option.id} className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-50">
              <RadioGroupItem value={option.id} id={option.id} />
              <Label htmlFor={option.id} className="flex-grow cursor-pointer text-base">{option.text}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button 
          onClick={handleSubmit} 
          disabled={!selectedOption}
          className="bg-university-800 hover:bg-university-700"
        >
          Next Question
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
