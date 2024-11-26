import * as React from "react";

export function TradeView({ route, navigation }) {
    const [quantity, setQuantity] = React.useState("0");
    const symbol = route.params?.symbol || "AAPL";
    const stockPrice = 175.00;

    return (
        <scrollView className="bg-black">
            <stackLayout className="p-4">
                <label className="text-3xl font-bold text-white text-center mb-4">
                    Trade {symbol}
                </label>
                
                <gridLayout rows="auto" columns="*,*" className="mb-6">
                    <stackLayout col="0" className="text-center">
                        <label className="text-gray-400">Current Price</label>
                        <label className="text-2xl text-white">₹{stockPrice}</label>
                    </stackLayout>
                    <stackLayout col="1" className="text-center">
                        <label className="text-gray-400">Total Cost</label>
                        <label className="text-2xl text-white">
                            ₹{(parseFloat(quantity) * stockPrice).toFixed(2)}
                        </label>
                    </stackLayout>
                </gridLayout>

                <label className="text-white mb-2">Quantity:</label>
                <textField
                    keyboardType="number"
                    text={quantity}
                    onTextChange={(args) => setQuantity(args.object.text)}
                    className="bg-gray-800 text-white p-4 rounded-lg mb-4"
                />

                <gridLayout rows="auto" columns="*,*" className="mb-4">
                    <button 
                        col="0"
                        className="bg-green-600 text-white p-4 m-2 rounded-lg"
                        onTap={() => {
                            // Handle buy action
                            navigation.navigate("Portfolio");
                        }}
                    >
                        Buy
                    </button>
                    <button 
                        col="1"
                        className="bg-red-600 text-white p-4 m-2 rounded-lg"
                        onTap={() => {
                            // Handle sell action
                            navigation.navigate("Portfolio");
                        }}
                    >
                        Sell
                    </button>
                </gridLayout>
            </stackLayout>
        </scrollView>
    );
}