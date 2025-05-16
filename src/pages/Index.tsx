import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import EventCard from '@/components/EventCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoPlayButton from '@/components/VideoPlayButton';
import YouTubePopup from '@/components/YoutubePopup';

const Index = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);
  const aboutSectionRef = useRef<HTMLElement>(null);

  const handleWhoWeAreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    aboutSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const openVideoPopup = () => {
    setIsVideoOpen(true);
  };

  const closeVideoPopup = () => {
    setIsVideoOpen(false);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-university-800 to-university-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in leading-[1.8]">
            FCT Open Day - Computer Science Degree Program
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in italic text-gray-200" style={{ animationDelay: "0.2s" }}>
              Step Into the Digital Frontier: Your Journey in Tech Starts Here
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>          
                <Button 
                size="lg" 
                className="bg-gold-500 hover:bg-gold-600 text-university-900 font-bold"
                onClick={handleWhoWeAreClick}
              >
                Who We Are
              </Button>
              <Link to="/leaderboard">
                <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10 hover:text-white">
                 Take the Quiz
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
                linkTo="/register"
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
        <section ref={aboutSectionRef} id="about" className="py-16 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-university-800 mb-6">Computer Science Students' Association - CSSA</h2>
                <p className="text-gray-600 mb-4">
                 The Computer Science Students’ Association (CSSA) at the University of Kelaniya is the beating heart of tech innovation on . We unite aspiring coders, developers, and tech enthusiasts through hands-on workshops, competitive hackathons, and industry-led talks with top Sri Lankan IT companies. Our community thrives on collaboration—from open-source projects and AI research groups to annual tech fests like IdeaForge. Whether you’re mastering Python, diving into cybersecurity, or launching a startup, CSSA provides the tools, mentorship, and network to turn ideas into impact. Join us to code, connect, and lead the digital revolution!
                </p>
              
              </div>
              
              <div className="md:w-1/2 relative">
                <Card className="overflow-hidden border-none shadow-lg card-hover">
                  <CardContent className="p-0 relative">
                    <img 
                      src="/cssa_logo_background.png" 
                      alt="Students participating in coding event"
                      className="w-full h-80 object-cover"
                    />
                    <VideoPlayButton onClick={openVideoPopup} />
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
       <YouTubePopup 
        videoId="dQw4w9WgXcQ" 
        isOpen={isVideoOpen} 
        onClose={closeVideoPopup} 
      />
    </div>
  );
};

export default Index;
