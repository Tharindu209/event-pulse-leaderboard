
import { QuestionOption } from "@/components/QuestionCard";

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What does HTTP stand for?",
    options: [
      { id: "a", text: "Hyper Text Transfer Protocol" },
      { id: "b", text: "High Transfer Text Package" },
      { id: "c", text: "Host Tunnel Transfer Protocol" },
      { id: "d", text: "Hyper Transfer Text Package" }
    ],
    correctAnswer: "a"
  },
  {
    id: 2,
    text: "Which programming language is often used for data analysis and machine learning?",
    options: [
      { id: "a", text: "JavaScript" },
      { id: "b", text: "Python" },
      { id: "c", text: "C++" },
      { id: "d", text: "Ruby" }
    ],
    correctAnswer: "b"
  },
  {
    id: 3,
    text: "What is the primary function of a database index?",
    options: [
      { id: "a", text: "To encrypt data" },
      { id: "b", text: "To compress data" },
      { id: "c", text: "To speed up data retrieval" },
      { id: "d", text: "To validate data integrity" }
    ],
    correctAnswer: "c"
  },
  {
    id: 4,
    text: "Which of these is not a JavaScript framework or library?",
    options: [
      { id: "a", text: "React" },
      { id: "b", text: "Angular" },
      { id: "c", text: "Django" },
      { id: "d", text: "Vue" }
    ],
    correctAnswer: "c"
  },
  {
    id: 5,
    text: "What is the time complexity of binary search?",
    options: [
      { id: "a", text: "O(n)" },
      { id: "b", text: "O(n²)" },
      { id: "c", text: "O(log n)" },
      { id: "d", text: "O(n log n)" }
    ],
    correctAnswer: "c"
  }
];
