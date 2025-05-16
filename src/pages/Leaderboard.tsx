
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeaderboardTable from '@/components/LeaderboardTable';
import { leaderboardData } from '@/data/leaderboard';
import { toast } from "@/components/ui/use-toast";
import { RootState } from '../redux/store';
import { submitQuiz } from '../redux/quizSlice';

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rank');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [leaderboardEntries, setLeaderboardEntries] = useState(leaderboardData);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { firstName, lastName } = useSelector((state: RootState) => state.user);
  const { score, timeTaken, submitted } = useSelector((state: RootState) => state.quiz);
  
  // Check if the user has completed a quiz that needs to be submitted
  useEffect(() => {
    const quizResult = localStorage.getItem('quizResult');
    if (quizResult && !hasSubmitted && firstName && lastName && score > 0 && !submitted) {
      // Here you would actually submit to Supabase
      // For now, we'll just add to the local leaderboard
      const newEntry = {
        id: leaderboardEntries.length + 1,
        rank: calculateRank(score),
        name: `${firstName} ${lastName}`,
        score: score,
        timeTaken: timeTaken || "15:00" // Default if not set
      };
      
      // Add the new entry and sort
      const updatedEntries = [...leaderboardEntries, newEntry].sort((a, b) => b.score - a.score);
      
      // Reassign ranks based on score
      const entriesWithUpdatedRanks = updatedEntries.map((entry, index) => ({
        ...entry,
        rank: index + 1
      }));
      
      setLeaderboardEntries(entriesWithUpdatedRanks);
      setHasSubmitted(true);
      dispatch(submitQuiz()); // Mark as submitted in Redux
      localStorage.removeItem('quizResult'); // Clear it so we don't submit again
      
      toast({
        title: "Score Submitted!",
        description: "Your score has been added to the leaderboard.",
      });
    }
  }, [firstName, lastName, score, hasSubmitted, leaderboardEntries, timeTaken, submitted, dispatch]);
  
  // Calculate rank based on score comparison with existing entries
  const calculateRank = (newScore) => {
    let rank = 1;
    for (const entry of leaderboardEntries) {
      if (entry.score > newScore) {
        rank++;
      }
    }
    return rank;
  };
  
  // Function to simulate submitting to Supabase
  const handleSubmitToSupabase = () => {
    // This is where you would integrate with Supabase
    toast({
      title: "Connecting to Supabase",
      description: "To save scores to a database, please connect your project to Supabase.",
    });
  };

  // Handle taking the quiz again
  const handleTakeQuiz = () => {
    navigate('/register');
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
              onClick={handleTakeQuiz}
              disabled={submitted}
            >
              {submitted ? "Quiz Already Submitted" : "Take the Quiz"}
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleSubmitToSupabase}
            >
              Connect to Supabase
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Leaderboard;
