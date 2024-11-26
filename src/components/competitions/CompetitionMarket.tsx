import * as React from "react";
import { CompetitionPortfolio } from "./types";

export function CompetitionMarket({ route, navigation }) {
    const { competition, portfolio } = route.params;
    const [selectedStock, setSelectedStock] = React.useState(null);
    const [quantity, setQuantity] = React.useState("0");
    const [searchQuery, setSearchQuery] = React.useState("");

    const stocks = [
        { symbol: "RELIANCE", name: "Reliance Industries", price: 2750.00, change: "+1.8%" },
        { symbol: "TCS", name: "Tata Consultancy Services", price: 3480.00, change: "+0.9%" },
        { symbol: "HDFC", name: "HDFC Bank", price: 1680.00, change: "+1.2%" },
        { symbol: "INFY", name: "Infosys Limited", price: 1420.00, change: "-0.5%" },
        { symbol: "ICICI", name: "ICICI Bank", price: 960.00, change: "+2.1%" },
        { symbol: "WIPRO", name: "Wipro Limited", price: 420.00, change: "-1.1%" },
        { symbol: "BHARTI", name: "Bharti Airtel", price: 890.00, change: "+1.5%" },
        { symbol: "ITC", name: "ITC Limited", price: 440.00, change: "+0.8%" }
    ];

    const filteredStocks = stocks.filter(stock => 
        stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stock.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const calculateTotalCost = () => {
        if (!selectedStock || !quantity) return 0;
        return selectedStock.price * parseInt(quantity);
    };

    const handleTrade = (type: 'buy' | 'sell') => {
        if (!selectedStock) return;
        
        const amount = calculateTotalCost();
        if (type === 'buy' && amount > portfolio.virtualBalance) {
            alert("Insufficient funds!");
            return;
        }

        const holding = portfolio.holdings.find(h => h.symbol === selectedStock.symbol);
        if (type === 'sell' && (!holding || holding.shares < parseInt(quantity))) {
            alert("Insufficient shares!");
            return;
        }

        // Handle trade logic here
        navigation.navigate("CompetitionPortfolio", { 
            competition,
            tradeExecuted: {
                type,
                symbol: selectedStock.symbol,
                quantity: parseInt(quantity),
                price: selectedStock.price
            }
        });
    };

    return (
        <scrollView className="bg-black">
            <stackLayout className="p-4">
                <gridLayout className="bg-gray-800 rounded-lg p-4 mb-4">
                    <stackLayout>
                        <label className="text-gray-400">Available Balance</label>
                        <label className="text-2xl text-green-500 font-bold">
                            ₹{portfolio.virtualBalance.toLocaleString()}
                        </label>
                    </stackLayout>
                </gridLayout>

                {selectedStock ? (
                    <stackLayout className="mb-4">
                        <gridLayout columns="*,auto" className="bg-gray-800 p-4 rounded-lg mb-4">
                            <stackLayout col="0">
                                <label className="text-xl font-bold text-white">{selectedStock.symbol}</label>
                                <label className="text-gray-400">{selectedStock.name}</label>
                            </stackLayout>
                            <stackLayout col="1">
                                <label className="text-white text-right">₹{selectedStock.price}</label>
                                <label className={selectedStock.change.startsWith("+") ? 
                                    "text-green-500 text-right" : "text-red-500 text-right"}>
                                    {selectedStock.change}
                                </label>
                            </stackLayout>
                        </gridLayout>

                        <label className="text-white mb-2">Quantity:</label>
                        <textField
                            keyboardType="number"
                            text={quantity}
                            hint="Enter number of shares"
                            onTextChange={(args) => setQuantity(args.object.text)}
                            className="bg-gray-800 text-white p-4 rounded-lg mb-4"
                        />

                        <gridLayout className="bg-gray-800 p-4 rounded-lg mb-4">
                            <stackLayout>
                                <label className="text-gray-400">Total Cost</label>
                                <label className="text-xl text-white">
                                    ₹{calculateTotalCost().toLocaleString()}
                                </label>
                            </stackLayout>
                        </gridLayout>

                        <gridLayout columns="*,*" className="mb-4">
                            <button 
                                col="0"
                                className="bg-green-600 text-white p-4 m-2 rounded-lg"
                                onTap={() => handleTrade('buy')}
                            >
                                Buy
                            </button>
                            <button 
                                col="1"
                                className="bg-red-600 text-white p-4 m-2 rounded-lg"
                                onTap={() => handleTrade('sell')}
                            >
                                Sell
                            </button>
                        </gridLayout>

                        <button 
                            className="bg-gray-600 text-white p-4 rounded-lg"
                            onTap={() => setSelectedStock(null)}
                        >
                            Back to Market
                        </button>
                    </stackLayout>
                ) : (
                    <stackLayout>
                        <searchBar 
                            hint="Search stocks..." 
                            text={searchQuery}
                            onTextChange={(args) => setSearchQuery(args.object.text)}
                            className="bg-gray-800 text-white mb-4"
                        />

                        <label className="text-xl font-bold text-white mb-4">Market</label>
                        
                        {filteredStocks.map((stock, index) => (
                            <gridLayout 
                                key={index}
                                columns="*,auto,auto" 
                                className="bg-gray-800 rounded-lg p-4 mb-2"
                                onTap={() => setSelectedStock(stock)}
                            >
                                <stackLayout col="0">
                                    <label className="text-xl font-bold text-white">
                                        {stock.symbol}
                                    </label>
                                    <label className="text-gray-400">{stock.name}</label>
                                </stackLayout>
                                <label col="1" className="text-white text-right mr-4">
                                    ₹{stock.price.toLocaleString()}
                                </label>
                                <label 
                                    col="2" 
                                    className={stock.change.startsWith("+") ? 
                                        "text-green-500" : "text-red-500"}
                                >
                                    {stock.change}
                                </label>
                            </gridLayout>
                        ))}
                    </stackLayout>
                )}
            </stackLayout>
        </scrollView>
    );
}