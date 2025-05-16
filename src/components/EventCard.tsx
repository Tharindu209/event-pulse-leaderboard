
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  linkTo: string;
  buttonText: string;
}

const EventCard = ({ title, description, date, time, linkTo, buttonText }: EventCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-2" />
          <span>{time}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={linkTo} className="w-full">
          <Button className="w-full bg-university-800 hover:bg-university-700">
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
