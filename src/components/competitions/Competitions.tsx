import * as React from "react";
import { CompetitionCard } from "./CompetitionCard";
import { Competition } from "./types";

export function Competitions({ navigation }) {
    const competitions: Competition[] = [
        {
            id: "1",
            name: "Daily Trading Sprint",
            entryFee: 50,
            prizePool: 5000,
            players: 42,
            maxPlayers: 50,
            duration: 1,
            status: 'active',
            startDate: new Date(),
            endDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
            description: "Quick 24-hour trading challenge! Test your day trading skills.",
            prizes: [
                { position: "1st", amount: 2500 },
                { position: "2nd", amount: 1500 },
                { position: "3rd", amount: 1000 }
            ]
        },
        {
            id: "2",
            name: "Weekly Pro Challenge",
            entryFee: 100,
            prizePool: 10000,
            players: 85,
            maxPlayers: 100,
            duration: 7,
            status: 'active',
            startDate: new Date(),
            endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            description: "Seven days of strategic trading. Show your market expertise!",
            prizes: [
                { position: "1st", amount: 5000 },
                { position: "2nd", amount: 3000 },
                { position: "3rd", amount: 2000 }
            ]
        },
        {
            id: "3",
            name: "Monthly Masters",
            entryFee: 500,
            prizePool: 50000,
            players: 156,
            maxPlayers: 200,
            duration: 30,
            status: 'active',
            startDate: new Date(),
            endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            description: "The ultimate monthly trading competition. Build your portfolio and compete for massive prizes!",
            prizes: [
                { position: "1st", amount: 25000 },
                { position: "2nd", amount: 15000 },
                { position: "3rd", amount: 10000 }
            ]
        },
        {
            id: "4",
            name: "Tomorrow's Daily Sprint",
            entryFee: 50,
            prizePool: 5000,
            players: 12,
            maxPlayers: 50,
            duration: 1,
            status: 'upcoming',
            startDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
            endDate: new Date(Date.now() + 48 * 60 * 60 * 1000),
            description: "Join tomorrow's 24-hour trading challenge!",
            prizes: [
                { position: "1st", amount: 2500 },
                { position: "2nd", amount: 1500 },
                { position: "3rd", amount: 1000 }
            ]
        }
    ];

    return (
        <scrollView className="bg-black">
            <stackLayout className="p-4">
                <label className="text-2xl font-bold text-white mb-4">Active Competitions</label>
                {competitions
                    .filter(comp => comp.status === 'active')
                    .map(competition => (
                        <CompetitionCard
                            key={competition.id}
                            competition={competition}
                            onTap={() => navigation.navigate("CompetitionDetails", { competition })}
                        />
                    ))
                }

                <label className="text-2xl font-bold text-white mb-4 mt-4">Upcoming Competitions</label>
                {competitions
                    .filter(comp => comp.status === 'upcoming')
                    .map(competition => (
                        <CompetitionCard
                            key={competition.id}
                            competition={competition}
                            onTap={() => navigation.navigate("CompetitionDetails", { competition })}
                        />
                    ))
                }
            </stackLayout>
        </scrollView>
    );
}