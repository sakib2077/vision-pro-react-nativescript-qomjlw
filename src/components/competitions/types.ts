export interface Prize {
    position: string;
    amount: number;
}

export interface Competition {
    id: string;
    name: string;
    entryFee: number;
    prizePool: number;
    players: number;
    maxPlayers: number;
    duration: number;
    status: 'active' | 'upcoming' | 'completed';
    startDate: Date;
    endDate: Date;
    description: string;
    prizes: Prize[];
}

export interface CompetitionPortfolio {
    competitionId: string;
    virtualBalance: number;
    holdings: {
        symbol: string;
        shares: number;
        averagePrice: number;
    }[];
}