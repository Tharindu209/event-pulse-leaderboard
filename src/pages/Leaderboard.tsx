import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeaderboardTable from '@/components/LeaderboardTable';
import { toast } from "@/components/ui/use-toast";
import { RootState } from '../redux/store';
import { supabase, getLeaderboard } from '@/utils/supabase'; // Update import

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rank');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [leaderboardEntries, setLeaderboardEntries] = useState([]);

  const { firstName, lastName } = useSelector((state: RootState) => state.user);
  const { score, timeTaken } = useSelector((state: RootState) => state.quiz);

  // Fetch leaderboard data from Supabase
  useEffect(() => {
    let subscription: any;

    async function fetchAndSubscribe() {
      // Initial fetch
      const data = await getLeaderboard();
      setLeaderboardEntries(data);

      // Subscribe to real-time changes
      subscription = supabase
        .channel('public:leaderboard')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'leaderboard' },
          async () => {
            const updatedData = await getLeaderboard();
            setLeaderboardEntries(updatedData);
          }
        )
        .subscribe();
    }

    fetchAndSubscribe();

    // Cleanup on unmount
    return () => {
      if (subscription) {
        supabase.removeChannel(subscription);
      }
    };
  }, []);
  
  const calculateRank = (newScore) => {
    let rank = 1;
    for (const entry of leaderboardEntries) {
      if (entry.score > newScore) {
        rank++;
      }
    }
    return rank;
  };


  // Filter and sort the leaderboard data
  const filteredData = leaderboardEntries.filter(entry => 
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
            <Button 
              className="bg-university-800 hover:bg-university-700 mr-4" 
              onClick={() => window.location.href = '/'}
            >
              Goto Home
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Leaderboard;
