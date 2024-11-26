import * as React from "react";
import { Competition } from "./types";

interface CompetitionCardProps {
    competition: Competition;
    onTap: () => void;
}

export function CompetitionCard({ competition, onTap }: CompetitionCardProps) {
    return (
        <gridLayout 
            className="bg-gray-800 rounded-lg p-4 mb-4"
            onTap={onTap}
        >
            <stackLayout>
                <gridLayout columns="*,auto">
                    <label col="0" className="text-xl font-bold text-white">{competition.name}</label>
                    <label col="1" className="text-purple-400">
                        {competition.status === 'active' ? '🟢 Live' : '⏳ Starting Soon'}
                    </label>
                </gridLayout>
                
                <gridLayout columns="auto,*,auto" className="mt-2">
                    <stackLayout col="0" className="mr-4">
                        <label className="text-gray-400">Entry Fee</label>
                        <label className="text-white font-bold">₹{competition.entryFee}</label>
                    </stackLayout>
                    <stackLayout col="1">
                        <label className="text-gray-400">Prize Pool</label>
                        <label className="text-green-500 font-bold">₹{competition.prizePool}</label>
                    </stackLayout>
                    <stackLayout col="2">
                        <label className="text-gray-400">Players</label>
                        <label className="text-white font-bold">{competition.players}/{competition.maxPlayers}</label>
                    </stackLayout>
                </gridLayout>

                <label className="text-gray-400 mt-2">{competition.duration} Days Competition</label>
            </stackLayout>
        </gridLayout>
    );
}