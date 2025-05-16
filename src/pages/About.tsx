
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

                {/* What We Do Section */}
                <section className="py-12 bg-gray-50">
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

                {/* Achievements Section */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-university-800 mb-12">Our Achievements</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Achievement 1 */}
                            <Card className="shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="h-40 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold text-university-800 mb-2">National Hackathon Champions</h3>
                                    <p className="text-gray-600 mb-2">2024</p>
                                    <p className="text-gray-600">
                                        Our team won first place in the National Interuniversity Hackathon, developing an innovative solution for healthcare logistics using AI.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Achievement 2 */}
                            <Card className="shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="h-40 bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold text-university-800 mb-2">Microsoft Imagine Cup Finalists</h3>
                                    <p className="text-gray-600 mb-2">2023</p>
                                    <p className="text-gray-600">
                                        CSSA team reached the regional finals with their project on sustainable urban development using IoT and cloud technologies.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Achievement 3 */}
                            <Card className="shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="h-40 bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold text-university-800 mb-2">Best Tech Community Award</h3>
                                    <p className="text-gray-600 mb-2">2022</p>
                                    <p className="text-gray-600">
                                        Recognized as the most active and impactful tech community among Sri Lankan universities by the National IT Council.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Achievement 4 */}
                            <Card className="shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="h-40 bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                    </svg>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold text-university-800 mb-2">Google Developer Student Club</h3>
                                    <p className="text-gray-600 mb-2">2021-Present</p>
                                    <p className="text-gray-600">
                                        Successfully established and maintained a Google Developer Student Club, organizing over 20 workshops annually.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Achievement 5 */}
                            <Card className="shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="h-40 bg-gradient-to-r from-rose-500 to-pink-600 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                    </svg>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold text-university-800 mb-2">Research Publications</h3>
                                    <p className="text-gray-600 mb-2">2020-Present</p>
                                    <p className="text-gray-600">
                                        CSSA members have published 15+ research papers in international conferences and journals on various computing topics.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Achievement 6 */}
                            <Card className="shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="h-40 bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold text-university-800 mb-2">Industry Partnerships</h3>
                                    <p className="text-gray-600 mb-2">2019-Present</p>
                                    <p className="text-gray-600">
                                        Established strong partnerships with 25+ tech companies, facilitating internships and job placements for our members.
                                    </p>
                                </CardContent>
                            </Card>
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
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
