import * as React from "react";

export function Wallet({ navigation }) {
    const [amount, setAmount] = React.useState("");
    const predefinedAmounts = [100, 500, 1000, 2000, 5000];

    const handleAddMoney = (selectedAmount: number) => {
        // In a real app, this would integrate with a payment gateway
        alert(`Payment gateway would open here to add ₹${selectedAmount}`);
    };

    return (
        <scrollView className="bg-black">
            <stackLayout className="p-4">
                <gridLayout className="bg-gray-800 rounded-lg p-4 mb-4">
                    <stackLayout>
                        <label className="text-gray-400">Wallet Balance</label>
                        <label className="text-2xl text-green-500 font-bold">₹1,000</label>
                    </stackLayout>
                </gridLayout>

                <label className="text-xl font-bold text-white mb-4">Quick Add Money</label>
                
                <gridLayout columns="*,*" rows="auto,auto,auto" className="mb-4">
                    {predefinedAmounts.map((amt, index) => (
                        <button 
                            key={index}
                            row={Math.floor(index / 2)}
                            col={index % 2}
                            className="bg-gray-800 text-white p-4 m-1 rounded-lg"
                            onTap={() => handleAddMoney(amt)}
                        >
                            ₹{amt}
                        </button>
                    ))}
                </gridLayout>

                <label className="text-xl font-bold text-white mb-4">Custom Amount</label>
                
                <gridLayout columns="*,auto" className="mb-4">
                    <textField
                        col="0"
                        keyboardType="number"
                        text={amount}
                        hint="Enter amount"
                        onTextChange={(args) => setAmount(args.object.text)}
                        className="bg-gray-800 text-white p-4 rounded-lg mr-2"
                    />
                    <button 
                        col="1"
                        className="bg-green-600 text-white p-4 rounded-lg"
                        onTap={() => handleAddMoney(parseInt(amount))}
                    >
                        Add
                    </button>
                </gridLayout>

                <stackLayout className="bg-gray-800 rounded-lg p-4 mt-4">
                    <label className="text-white font-bold mb-2">Recent Transactions</label>
                    <label className="text-gray-400">No recent transactions</label>
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}