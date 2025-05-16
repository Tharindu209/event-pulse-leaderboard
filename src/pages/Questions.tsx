
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuestionCard from '@/components/QuestionCard';
import QuizTimer from '@/components/QuizTimer';
import { questions } from '@/data/questions';
import { toast } from "@/components/ui/use-toast";

interface Answer {
  questionId: number;
  selectedOption: string;
}

const QUIZ_TIME = 15 * 60; // 15 minutes in seconds

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  // Calculate score when quiz is completed
  useEffect(() => {
    if (quizCompleted) {
      let totalScore = 0;
      answers.forEach((answer) => {
        const question = questions.find(q => q.id === answer.questionId);
        if (question && question.correctAnswer === answer.selectedOption) {
          totalScore += 100; // 100 points per correct answer
        }
      });
      setScore(totalScore);
      
      toast({
        title: "Quiz Completed!",
        description: `You scored ${totalScore} points. View your position on the leaderboard.`,
        duration: 5000,
      });
    }
  }, [quizCompleted, answers]);

  const handleAnswerSubmit = (questionId: number, selectedOption: string) => {
    setAnswers(prev => [...prev, { questionId, selectedOption }]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Quiz completed
      setQuizCompleted(true);
    }
  };

  const handleTimeUp = () => {
    setQuizCompleted(true);
    toast({
      title: "Time's Up!",
      description: "Your quiz time has expired.",
      variant: "destructive",
    });
  };

  const handleViewLeaderboard = () => {
    navigate('/leaderboard');
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizCompleted(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!quizCompleted ? (
            <>
              <h1 className="text-3xl font-bold text-university-800 mb-8 text-center">
                Crack the Code Challenge
              </h1>
              <QuizTimer totalSeconds={QUIZ_TIME} onTimeUp={handleTimeUp} />
              
              <div className="my-8">
                <QuestionCard
                  id={questions[currentQuestionIndex].id}
                  questionText={questions[currentQuestionIndex].text}
                  options={questions[currentQuestionIndex].options}
                  onAnswerSubmit={handleAnswerSubmit}
                  onNextQuestion={handleNextQuestion}
                />
              </div>
              
              <div className="mt-4 text-center text-gray-500">
                Question {currentQuestionIndex + 1} of {questions.length}
              </div>
            </>
          ) : (
            <div className="max-w-md mx-auto text-center bg-white p-8 rounded-lg shadow-md animate-fade-in">
              <h1 className="text-3xl font-bold text-university-800 mb-4">Quiz Completed!</h1>
              <p className="text-2xl font-semibold mb-6">
                Your Score: <span className="text-university-700">{score}</span>
              </p>
              
              <p className="mb-8 text-gray-600">
                You answered {answers.length} out of {questions.length} questions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleViewLeaderboard} 
                  className="bg-university-800 hover:bg-university-700"
                >
                  View Leaderboard
                </Button>
                <Button 
                  onClick={handleRestartQuiz} 
                  variant="outline"
                >
                  Restart Quiz
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Questions;
