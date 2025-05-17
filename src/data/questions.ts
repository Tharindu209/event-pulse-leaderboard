
import { QuestionOption } from "@/components/QuestionCard";

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
  correctAnswer: string;
}

export const questions: Question[] = 
[
  {
    id: 1,
    text: "What does FCT stand for at the University of Kelaniya?",
    options: [
      { id: "a", text: "Faculty of Communication Technology" },
      { id: "b", text: "Faculty of Computing and Technology" },
      { id: "c", text: "Faculty of Creative Thinking" },
      { id: "d", text: "Faculty of Commercial Training" }
    ],
    correctAnswer: "b"
  },
  {
    id: 2,
    text: "Which degree can you study in Computer Science at FCT?",
    options: [
      { id: "a", text: "BSc Honours in Computer Science" },
      { id: "b", text: "BCom in Computer Studies" },
      { id: "c", text: "BEng in IT" },
      { id: "d", text: "BA in Programming" }
    ],
    correctAnswer: "a"
  },
  {
    id: 3,
    text: "How many years does it take to complete the Computer Science degree?",
    options: [
      { id: "a", text: "2 years" },
      { id: "b", text: "3 years" },
      { id: "c", text: "4 years" },
      { id: "d", text: "5 years" }
    ],
    correctAnswer: "c"
  },
  {
    id: 4,
    text: "What is the main language used for teaching and exams in the CS degree?",
    options: [
      { id: "a", text: "Sinhala" },
      { id: "b", text: "Tamil" },
      { id: "c", text: "English" },
      { id: "d", text: "French" }
    ],
    correctAnswer: "c"
  },
  {
    id: 5,
    text: "What is a common subject in the first year of Computer Science?",
    options: [
      { id: "a", text: "Medicine" },
      { id: "b", text: "Web Fundamentals" },
      { id: "c", text: "Agriculture" },
      { id: "d", text: "History" }
    ],
    correctAnswer: "b"
  },
  {
    id: 6,
    text: "Which of these is a programming language you may learn?",
    options: [
      { id: "a", text: "Excel" },
      { id: "b", text: "PowerBI" },
      { id: "c", text: "C/JAVA" },
      { id: "d", text: "Laravel" }
    ],
    correctAnswer: "c"
  },
  {
    id: 7,
    text: "What is the name of the special project students do in their final year?",
    options: [
      { id: "a", text: "Painting" },
      { id: "b", text: "Research Project" },
      { id: "c", text: "Driving Test" },
      { id: "d", text: "Singing Exam" }
    ],
    correctAnswer: "b"
  },
  {
    id: 8,
    text: "What does AI stand for in Computer Science?",
    options: [
      { id: "a", text: "Automatic Input" },
      { id: "b", text: "Artificial Intelligence" },
      { id: "c", text: "Android Interface" },
      { id: "d", text: "Advanced Internet" }
    ],
    correctAnswer: "b"
  },
  {
    id: 9,
    text: "What is a computer network used for?",
    options: [
      { id: "a", text: "Cooking" },
      { id: "b", text: "Making music" },
      { id: "c", text: "Connecting computers" },
      { id: "d", text: "Sleeping" }
    ],
    correctAnswer: "c"
  },
  {
    id: 10,
    text: "What is an example of a Cyber Security topic?",
    options: [
      { id: "a", text: "Gardening" },
      { id: "b", text: "Hacking prevention" },
      { id: "c", text: "Acting on stage" },
      { id: "d", text: "Playing football" }
    ],
    correctAnswer: "b"
  },
  {
    id: 11,
    text: "Where is the new building complex for FCT located?",
    options: [
      { id: "a", text: "Colombo" },
      { id: "b", text: "Bulugaha Juncion, Kelaniya" },
      { id: "c", text: "Kandy" },
      { id: "d", text: "Kurunegala" }
    ],
    correctAnswer: "b"
  },
  {
    id: 12,
    text: "What is the goal of FCT?",
    options: [
      { id: "a", text: "To make films" },
      { id: "b", text: "To teach farming" },
      { id: "c", text: "To build computer and tech skills for the future" },
      { id: "d", text: "To teach singing" }
    ],
    correctAnswer: "c"
  }
]
