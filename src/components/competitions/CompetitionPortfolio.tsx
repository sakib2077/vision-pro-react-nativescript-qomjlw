import * as React from "react";
import { CompetitionPortfolio as ICompetitionPortfolio } from "./types";

export function CompetitionPortfolio({ route, navigation }) {
    const { competition, tradeExecuted } = route.params;
    const [portfolio, setPortfolio] = React.useState<ICompetitionPortfolio>({
        competitionId: competition.id,
        virtualBalance: 100000,
        holdings: []
    });

    React.useEffect(() => {
        if (tradeExecuted) {
            const { type, symbol, quantity, price } = tradeExecuted;
            const totalCost = quantity * price;
            
            setPortfolio(prev => {
                const newPortfolio = { ...prev };
                const existingHolding = prev.holdings.find(h => h.symbol === symbol);

                if (type === 'buy') {
                    newPortfolio.virtualBalance -= totalCost;
                    if (existingHolding) {
                        existingHolding.shares += quantity;
                        existingHolding.averagePrice = 
                            ((existingHolding.averagePrice * existingHolding.shares) + totalCost) / 
                            (existingHolding.shares + quantity);
                    } else {
                        newPortfolio.holdings.push({
                            symbol,
                            shares: quantity,
                            averagePrice: price
                        });
                    }
                } else if (type === 'sell' && existingHolding) {
                    newPortfolio.virtualBalance += totalCost;
                    existingHolding.shares -= quantity;
                    if (existingHolding.shares === 0) {
                        newPortfolio.holdings = prev.holdings.filter(h => h.symbol !== symbol);
                    }
                }

                return newPortfolio;
            });
        }
    }, [tradeExecuted]);

    const calculateTotalValue = () => {
        const holdingsValue = portfolio.holdings.reduce((total, holding) => 
            total + (holding.shares * holding.averagePrice), 0);
        return portfolio.virtualBalance + holdingsValue;
    };

    return (
        <scrollView className="bg-black">
            <stackLayout className="p-4">
                <label className="text-2xl font-bold text-white text-center mb-2">
                    {competition.name}
                </label>

                <gridLayout columns="*,*" className="mb-4">
                    <stackLayout col="0" className="bg-gray-800 rounded-lg p-4 m-1">
                        <label className="text-gray-400">Available Balance</label>
                        <label className="text-xl text-green-500 font-bold">
                            ₹{portfolio.virtualBalance.toLocaleString()}
                        </label>
                    </stackLayout>
                    <stackLayout col="1" className="bg-gray-800 rounded-lg p-4 m-1">
                        <label className="text-gray-400">Total Value</label>
                        <label className="text-xl text-green-500 font-bold">
                            ₹{calculateTotalValue().toLocaleString()}
                        </label>
                    </stackLayout>
                </gridLayout>

                <button 
                    className="bg-blue-600 text-white p-4 rounded-lg mb-4"
                    onTap={() => navigation.navigate("CompetitionMarket", { 
                        competition,
                        portfolio 
                    })}
                >
                    Trade Stocks
                </button>

                <label className="text-xl font-bold text-white mb-4">Your Holdings</label>
                
                {portfolio.holdings.length === 0 ? (
                    <label className="text-gray-400 text-center p-4">
                        No stocks in your portfolio yet. Start trading!
                    </label>
                ) : (
                    portfolio.holdings.map((holding, index) => (
                        <gridLayout 
                            key={index}
                            columns="*,auto" 
                            className="bg-gray-800 rounded-lg p-4 mb-2"
                            onTap={() => navigation.navigate("CompetitionMarket", {
                                competition,
                                portfolio,
                                selectedStock: holding.symbol
                            })}
                        >
                            <stackLayout col="0">
                                <label className="text-xl font-bold text-white">
                                    {holding.symbol}
                                </label>
                                <label className="text-gray-400">
                                    {holding.shares} shares @ ₹{holding.averagePrice.toLocaleString()}
                                </label>
                            </stackLayout>
                            <stackLayout col="1" className="text-right">
                                <label className="text-white">
                                    ₹{(holding.shares * holding.averagePrice).toLocaleString()}
                                </label>
                            </stackLayout>
                        </gridLayout>
                    ))
                )}
            </stackLayout>
        </scrollView>
    );
}