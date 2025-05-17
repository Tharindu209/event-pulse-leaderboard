
import React, { useState, useEffect } from "react";
import { 
  Accordion,
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MessageCircle, BookOpen } from "lucide-react";

// Define the types for our FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

// Pre-defined FAQ questions
const predefinedFAQs: FAQItem[] = [
  {
    "question": "What degrees do you offer?",
    "answer": "We offer a Bachelor of Science Honours in Computer Science (4 years), with optional specialization pathways in Artificial Intelligence, Data Science, Cyber Security, and Scientific Computing."
  },
  {
    "question": "What programming languages will I learn?",
    "answer": "Students are introduced to Python, Java, C, and JavaScript. These are used across courses like structured programming, object-oriented programming, and web development."
  },
  {
    "question": "Is there a final year project in the degree?",
    "answer": "Yes, every student completes an individual research project in the final year, guided by a supervisor. Projects can range from AI models to software applications or research papers."
  },
  {
    "question": "Do you teach Artificial Intelligence and Data Science?",
    "answer": "Yes, there are dedicated modules such as Machine Learning, Natural Language Processing, and Big Data Analytics. You can also choose the AI or Data Science pathway in Year 3 and 4."
  },
  {
    "question": "Is industry experience included in the course?",
    "answer": "Yes, in the 4th year, all students participate in a 6-month internship to gain real-world IT experience in the industry."
  },
  {
    "question": "What kind of computer labs or facilities are available?",
    "answer": "The faculty has labs for networking, cyber security, virtual reality, and AI. Students also access cloud-based tools and simulators for hands-on learning."
  }
];

const FAQ: React.FC = () => {
  const [savedMessages, setSavedMessages] = useState<FAQItem[]>([]);

  useEffect(() => {
    // Retrieve saved messages from localStorage
    const savedChatMessages = localStorage.getItem('savedChatMessages');
    if (savedChatMessages) {
      const parsedMessages = JSON.parse(savedChatMessages);
      setSavedMessages(parsedMessages);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-university-800 mb-2">Frequently Asked Questions</h1>
            <p className="text-gray-600">
              Find answers to common questions about our degrees and courses
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1">
            <Card>
              <CardHeader className="bg-university-800 text-white">
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2" />
                  Common Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {predefinedFAQs.map((faq, index) => (
                    <AccordionItem key={`faq-${index}`} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-700">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {savedMessages.length > 0 && (
              <Card>
                <CardHeader className="bg-university-700 text-white">
                  <CardTitle className="flex items-center">
                    <MessageCircle className="mr-2" />
                    Your Previous Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {savedMessages.map((message, index) => (
                      <AccordionItem key={`saved-${index}`} value={`saved-${index}`}>
                        <AccordionTrigger className="text-left">
                          {message.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">{message.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;