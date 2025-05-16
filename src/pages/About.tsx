import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMemberCard from '@/components/TeamMemberCard';

const About = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-university-800 to-university-900 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                            About CSSA
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                            Computer Science Student Association - University of Kelaniya
                        </p>
                    </div>
                </section>

                {/* About CSSA Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold text-university-800 mb-6">Who We Are</h2>
                                <p className="text-gray-600 mb-4">
                                    The Computer Science Student Association (CSSA) is the premier student body representing computing students at the Faculty of Computing & Technology, University of Kelaniya.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    Founded in 2010, CSSA has been bridging the gap between academic learning and industry expectations by organizing workshops, hackathons, coding competitions, and tech talks that enhance students' practical knowledge.
                                </p>
                                <p className="text-gray-600">
                                    Our association is run by students, for students, with the guidance of faculty advisors who help ensure our activities align with the curriculum and industry trends.
                                </p>
                            </div>

                            <div className="md:w-1/2">
                                <Card className="overflow-hidden border-none shadow-lg card-hover">
                                    <CardContent className="p-0">
                                        <img
                                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                            alt="CSSA members collaborating"
                                            className="w-full h-80 object-cover"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-university-800 mb-12">Our Mission & Vision</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold text-university-800 mb-4">Mission</h3>
                                    <p className="text-gray-600">
                                        To foster a vibrant community of computer science enthusiasts by providing opportunities for skill development,
                                        networking, and innovation. We aim to bridge academic learning with industry practice, preparing our members
                                        for successful careers in technology.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold text-university-800 mb-4">Vision</h3>
                                    <p className="text-gray-600">
                                        To be recognized as the leading student technology association in Sri Lankan universities,
                                        known for nurturing technical excellence, innovation, and leadership among computing students.
                                        We envision creating graduates who are industry-ready and capable of driving technological advancements.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* What We Do Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-university-800 mb-12">What We Do</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-university-800 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-university-800 mb-2">Tech Workshops</h3>
                                    <p className="text-gray-600">
                                        Hands-on workshops on emerging technologies, programming languages, and tools to help students stay updated with industry trends.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-university-800 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-university-800 mb-2">Coding Competitions</h3>
                                    <p className="text-gray-600">
                                        Regular coding challenges and hackathons to test problem-solving skills and encourage competitive programming among students.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-university-800 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-university-800 mb-2">Industry Networking</h3>
                                    <p className="text-gray-600">
                                        Connecting students with industry professionals through tech talks, career fairs, and company visits for internship and job opportunities.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-university-800 mb-12">Our Executive Committee</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <TeamMemberCard
                                name="Amal Perera"
                                position="President"
                                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                            />
                            <TeamMemberCard
                                name="Sameera Silva"
                                position="Vice President"
                                image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                            />
                            <TeamMemberCard
                                name="Nadia Mendis"
                                position="Secretary"
                                image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                            />
                            <TeamMemberCard
                                name="Rohan Jayawardena"
                                position="Treasurer"
                                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                            />
                        </div>
                    </div>
                </section>

                {/* Faculty Section */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <Card className="overflow-hidden border-none shadow-lg card-hover">
                                    <CardContent className="p-0">
                                        <img
                                            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                                            alt="Faculty of Computing & Technology"
                                            className="w-full h-80 object-cover"
                                        />
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold text-university-800 mb-6">Faculty of Computing & Technology</h2>
                                <p className="text-gray-600 mb-4">
                                    The Faculty of Computing & Technology at the University of Kelaniya is dedicated to providing high-quality education in computer science, software engineering, and related fields.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    With state-of-the-art facilities, experienced faculty members, and industry-aligned curriculum, the faculty prepares students for successful careers in the rapidly evolving technology landscape.
                                </p>
                                <p className="text-gray-600 mb-6">
                                    The faculty offers undergraduate and postgraduate programs that emphasize both theoretical knowledge and practical skills, ensuring graduates are well-equipped for the challenges of the tech industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact CTA Section */}
                <section className="py-16 bg-university-800 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-6">Get Involved with CSSA</h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Interested in joining the Computer Science Student Association or collaborating on events? Reach out to us today!
                        </p>
                        <Link to="/contact">
                            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-university-900 font-bold">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;