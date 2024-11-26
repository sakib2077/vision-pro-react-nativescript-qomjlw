import * as React from "react";
import { Image } from "@nativescript/core";

export function Login({ navigation }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const handleLogin = () => {
        if (!email || !password) {
            alert("Please fill in all fields");
            return;
        }
        navigation.navigate("Portfolio");
    };

    return (
        <scrollView className="bg-black">
            <stackLayout className="p-6">
                {/* Logo and Welcome Text */}
                <image
                    src="logo.png"
                    className="h-24 w-24 self-center mb-4"
                    stretch="aspectFit"
                />
                <label className="text-4xl font-bold text-white text-center">
                    Welcome 
                </label>
                <label className="text-gray-400 text-center mb-8">
                    Trade stocks and compete with others
                </label>

                {/* Email Field */}
                <stackLayout className="mb-6">
                    <gridLayout columns="auto,*" className="bg-gray-800 rounded-lg p-4">
                        <label col="0" className="fas text-purple-500 text-lg mr-2">&#xf0e0;</label>
                        <textField
                            col="1"
                            className="text-white"
                            keyboardType="email"
                            autocorrect={false}
                            autocapitalizationType="none"
                            text={email}
                            hint="Enter your email"
                            placeholderColor="#6b7280"
                            onTextChange={(args) => setEmail(args.object.text)}
                        />
                    </gridLayout>
                </stackLayout>

                {/* Password Field */}
                <stackLayout className="mb-8">
                    <gridLayout columns="auto,*,auto" className="bg-gray-800 rounded-lg p-4">
                        <label col="0" className="fas text-purple-500 text-lg mr-2">&#xf023;</label>
                        <textField
                            col="1"
                            className="text-white"
                            secure={!showPassword}
                            text={password}
                            hint="Enter your password"
                            placeholderColor="#6b7280"
                            onTextChange={(args) => setPassword(args.object.text)}
                        />
                        <label 
                            col="2" 
                            className={`fas text-lg ${showPassword ? 'text-purple-500' : 'text-gray-500'}`}
                            onTap={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? '&#xf06e;' : '&#xf070;'}
                        </label>
                    </gridLayout>
                </stackLayout>

                {/* Login Button */}
                <button
                    className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 rounded-lg mb-4"
                    onTap={handleLogin}
                >
                    <gridLayout columns="*,auto">
                        <label col="0" className="text-center font-bold">LOGIN</label>
                        <label col="1" className="fas">&#xf054;</label>
                    </gridLayout>
                </button>

                {/* Social Login Options */}
                <label className="text-gray-400 text-center mb-4">Or continue with</label>
                <gridLayout columns="*,*" className="mb-6">
                    <button col="0" className="bg-gray-800 m-2 p-4 rounded-lg">
                        <label className="fab text-white text-center">&#xf39e;</label>
                    </button>
                    <button col="1" className="bg-gray-800 m-2 p-4 rounded-lg">
                        <label className="fab text-white text-center">&#xf1a0;</label>
                    </button>
                </gridLayout>

                {/* Sign Up Link */}
                <button
                    className="text-purple-400 p-4"
                    onTap={() => navigation.navigate("Signup")}
                >
                    <formattedString>
                        <span className="text-gray-400">Don't have an account? </span>
                        <span className="text-purple-400 font-bold">Sign up</span>
                    </formattedString>
                </button>

                {/* Forgot Password Link */}
                <button
                    className="text-gray-400 p-4"
                    onTap={() => navigation.navigate("ForgotPassword")}
                >
                    Forgot Password?
                </button>
            </stackLayout>
        </scrollView>
    );
}