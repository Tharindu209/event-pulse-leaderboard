
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeaderboardTable from '@/components/LeaderboardTable';
import { leaderboardData } from '@/data/leaderboard';

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rank');
  
  // Filter and sort the leaderboard data
  const filteredData = leaderboardData.filter(entry => 
    entry.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === 'rank') {
      return a.rank - b.rank;
    } else if (sortBy === 'score') {
      return b.score - a.score;
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-university-800 mb-2 text-center">
            Leaderboard
          </h1>
          
          <p className="text-gray-600 mb-8 text-center">
            Top performers in the Crack the Code Challenge
          </p>
          
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
            <div className="md:w-1/2">
              <Input
                placeholder="Search participants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            
            <div className="flex gap-2 items-center">
              <span className="text-sm text-gray-500">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rank">Rank</SelectItem>
                  <SelectItem value="score">Score</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="sm" onClick={() => setSortBy('rank')}>
                Reset
              </Button>
            </div>
          </div>
          
          {filteredData.length > 0 ? (
            <LeaderboardTable entries={filteredData} />
          ) : (
            <div className="text-center py-8 text-gray-500">
              No results found for "{searchTerm}"
            </div>
          )}
          
          <div className="mt-8 text-center">
            <Button className="bg-university-800 hover:bg-university-700" onClick={() => window.location.href = '/questions'}>
              Take the Quiz
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Leaderboard;
