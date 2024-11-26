import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";

export function Portfolio({ navigation }) {
    const portfolioValue = "₹125,430.50";
    const dailyChange = "+₹2,341.25";
    const walletBalance = "₹1,000";
    
    return (
        <scrollView className="bg-black h-full">
            <stackLayout className="p-4">
                <label className="text-4xl font-bold text-white text-center p-4">
                    Portfolio Value
                </label>
                <label className="text-5xl font-bold text-green-500 text-center">
                    {portfolioValue}
                </label>
                <label className="text-2xl text-green-400 text-center mb-6">
                    {dailyChange} (1.9%)
                </label>

                <gridLayout rows="auto" columns="*,*" className="mb-4">
                    <button 
                        col="0"
                        className="bg-purple-600 text-white p-4 m-2 rounded-lg"
                        onTap={() => navigation.navigate("Competitions")}
                    >
                        Competition
                    </button>
                    <button 
                        col="1"
                        className="bg-yellow-600 text-white p-4 m-2 rounded-lg"
                        onTap={() => navigation.navigate("Wallet")}
                    >
                        Add Money
                    </button>
                </gridLayout>

                <gridLayout className="bg-gray-800 rounded-lg p-4 mb-4">
                    <stackLayout>
                        <label className="text-gray-400">Wallet Balance</label>
                        <label className="text-xl text-green-500 font-bold">{walletBalance}</label>
                    </stackLayout>
                </gridLayout>

                <label className="text-2xl font-bold text-white mb-4">Your Competitions</label>
                
                {[
                    { symbol: "RELIANCE", shares: 50, value: "₹8,750.00", change: "+2.3%" },
                    { symbol: "TCS", shares: 20, value: "₹6,400.00", change: "-1.2%" },
                    { symbol: "HDFC", shares: 30, value: "₹9,300.00", change: "+1.8%" },
                ].map((stock, index) => (
                    <gridLayout 
                        key={index}
                        columns="*,auto,auto" 
                        className="bg-gray-800 rounded-lg p-4 mb-2"
                    >
                        <stackLayout col="0">
                            <label className="text-xl font-bold text-white">{stock.symbol}</label>
                            <label className="text-gray-400">{stock.shares} shares</label>
                        </stackLayout>
                        <label col="1" className="text-white text-right mr-4">{stock.value}</label>
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