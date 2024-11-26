import * as React from "react";

export function StockList({ navigation }) {
    const stocks = [
        { symbol: "AAPL", name: "Apple Inc.", price: "₹175.00", change: "+2.3%" },
        { symbol: "TSLA", name: "Tesla, Inc.", price: "₹320.00", change: "-1.2%" },
        { symbol: "MSFT", name: "Microsoft Corp.", price: "₹310.00", change: "+1.8%" },
        { symbol: "GOOGL", name: "Alphabet Inc.", price: "₹140.00", change: "+0.9%" },
        { symbol: "AMZN", name: "Amazon.com", price: "₹130.00", change: "+1.5%" },
    ];

    return (
        <scrollView className="bg-black">
            <stackLayout className="p-4">
                <searchBar 
                    hint="Search stocks..." 
                    className="bg-gray-800 text-white mb-4"
                />
                
                {stocks.map((stock, index) => (
                    <gridLayout 
                        key={index}
                        columns="*,auto,auto" 
                        className="bg-gray-800 rounded-lg p-4 mb-2"
                        onTap={() => navigation.navigate("Trade", { symbol: stock.symbol })}
                    >
                        <stackLayout col="0">
                            <label className="text-xl font-bold text-white">{stock.symbol}</label>
                            <label className="text-gray-400">{stock.name}</label>
                        </stackLayout>
                        <label col="1" className="text-white text-right mr-4">{stock.price}</label>
                        <label 
                            col="2" 
                            className={stock.change.startsWith("+") ? "text-green-500" : "text-red-500"}
                        >
                            {stock.change}
                        </label>
                    </gridLayout>
                ))}
            </stackLayout>
        </scrollView>
    );
}