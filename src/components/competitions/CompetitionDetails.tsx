import * as React from "react";
import { format } from "date-fns";

export function CompetitionDetails({ route, navigation }) {
    const { competition } = route.params;
    const walletBalance = 1000; // In a real app, this would come from a global state or context

    const handleJoinCompetition = () => {
        if (walletBalance < competition.entryFee) {
            navigation.navigate("Wallet");
            return;
        }

        navigation.navigate("CompetitionPortfolio", { competition });
    };

    return (
        <scrollView className="bg-black">
            <stackLayout className="p-4">
                <label className="text-3xl font-bold text-white text-center mb-2">
                    {competition.name}
                </label>
                
                <label className="text-gray-400 text-center mb-6">
                    {competition.description}
                </label>

                <gridLayout columns="*,*" className="bg-gray-800 rounded-lg p-4 mb-4">
                    <stackLayout col="0">
                        <label className="text-gray-400">Start Date</label>
                        <label className="text-white">
                            {format(competition.startDate, 'MMM dd, yyyy')}
                        </label>
                    </stackLayout>
                    <stackLayout col="1">
                        <label className="text-gray-400">End Date</label>
                        <label className="text-white">
                            {format(competition.endDate, 'MMM dd, yyyy')}
                        </label>
                    </stackLayout>
                </gridLayout>

                <gridLayout columns="auto,*,auto" className="bg-gray-800 rounded-lg p-4 mb-4">
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
                        <label className="text-white font-bold">
                            {competition.players}/{competition.maxPlayers}
                        </label>
                    </stackLayout>
                </gridLayout>

                <gridLayout className="bg-gray-800 rounded-lg p-4 mb-4">
                    <stackLayout>
                        <label className="text-gray-400">Starting Balance</label>
                        <label className="text-2xl text-green-500 font-bold">₹1,00,000</label>
                        <label className="text-gray-400 mt-2">
                            Each participant starts with ₹1,00,000 in virtual currency to build their portfolio
                        </label>
                    </stackLayout>
                </gridLayout>

                <gridLayout className="bg-gray-800 rounded-lg p-4 mb-4">
                    <stackLayout>
                        <label className="text-gray-400">Your Wallet Balance</label>
                        <label className="text-xl text-green-500 font-bold">₹{walletBalance}</label>
                        {walletBalance < competition.entryFee && (
                            <label className="text-red-500 mt-2">
                                Add ₹{competition.entryFee - walletBalance} more to join this competition
                            </label>
                        )}
                    </stackLayout>
                </gridLayout>

                <label className="text-xl font-bold text-white mb-4">Prize Distribution</label>
                {competition.prizes.map((prize, index) => (
                    <gridLayout 
                        key={index}
                        columns="*,auto" 
                        className="bg-gray-800 rounded-lg p-4 mb-2"
                    >
                        <label col="0" className="text-white">{prize.position}</label>
                        <label col="1" className="text-green-500">₹{prize.amount}</label>
                    </gridLayout>
                ))}

                <button 
                    className={`${walletBalance >= competition.entryFee ? 
                        'bg-purple-600' : 'bg-purple-800'} text-white p-4 rounded-lg mt-4`}
                    onTap={handleJoinCompetition}
                >
                    {walletBalance >= competition.entryFee ? 
                        'Join Competition' : 'Add Money to Join'}
                </button>
            </stackLayout>
        </scrollView>
    );
}