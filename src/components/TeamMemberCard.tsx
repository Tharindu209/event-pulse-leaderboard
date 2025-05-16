
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberCardProps {
    name: string;
    position: string;
    image: string;
}

const TeamMemberCard = ({ name, position, image }: TeamMemberCardProps) => {
    return (
        <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center">
                    <h3 className="font-bold text-lg text-university-800">{name}</h3>
                    <p className="text-gray-600">{position}</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default TeamMemberCard;
