
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EventCard from '@/components/EventCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-university-800 to-university-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              University Event 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Join "Crack the Code" - Our Annual Quiz Challenge
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Link to="/questions">
                <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-university-900 font-bold">
                  Start Quiz
                </Button>
              </Link>
              <Link to="/leaderboard">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  View Leaderboard
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Info Cards Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-university-800 mb-12">Event Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <EventCard
                title="Coding Challenge"
                description="Test your programming knowledge with our challenging quiz"
                date="June 15, 2025"
                time="10:00 AM - 2:00 PM"
                linkTo="/questions"
                buttonText="Start Challenge"
              />
              
              <EventCard
                title="Algorithmic Thinking"
                description="Solve complex algorithmic problems against the clock"
                date="June 16, 2025"
                time="1:00 PM - 5:00 PM"
                linkTo="/questions"
                buttonText="Join Event"
              />
              
              <EventCard
                title="Tech Trivia"
                description="Fun tech trivia with prizes for top performers"
                date="June 17, 2025"
                time="6:00 PM - 8:00 PM"
                linkTo="/questions"
                buttonText="Enter Trivia"
              />
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-university-800 mb-6">About the Event</h2>
                <p className="text-gray-600 mb-4">
                  The "Crack the Code" challenge is our university's premier coding and computer science event. Participants will test their knowledge across various domains including programming languages, algorithms, data structures, and computer science theory.
                </p>
                <p className="text-gray-600 mb-4">
                  Whether you're a beginner or an advanced coder, there's something for everyone. Compete against fellow students, earn points, and climb up our leaderboard to win exciting prizes!
                </p>
                <p className="text-gray-600">
                  The quiz consists of multiple-choice questions with varying difficulty levels. You'll have a limited time to answer each question, so think fast!
                </p>
              </div>
              
              <div className="md:w-1/2">
                <Card className="overflow-hidden border-none shadow-lg card-hover">
                  <CardContent className="p-0">
                    <img 
                      src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Students participating in coding event"
                      className="w-full h-80 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-university-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to test your knowledge?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join hundreds of students in this exciting challenge and see if you can reach the top of our leaderboard!
            </p>
            <Link to="/questions">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-university-900 font-bold">
                Start the Quiz Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
