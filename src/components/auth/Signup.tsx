import * as React from "react";

export function Signup({ navigation }) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleSignup = () => {
        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill in all fields");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        navigation.navigate("Portfolio");
    };

    return (
        <scrollView className="bg-black">
            <stackLayout className="p-6">
                {/* Header */}
                <image
                    src="https://i.imgur.com/XeXqxRn.png"
                    className="h-24 w-24 self-center mb-4"
                    stretch="aspectFit"
                />
                <label className="text-4xl font-bold text-white text-center">
                    Create Account
                </label>
                <label className="text-gray-400 text-center mb-8">
                    Start your trading journey today
                </label>

                {/* Name Field */}
                <stackLayout className="mb-6">
                    <gridLayout columns="auto,*" className="bg-gray-800 rounded-lg p-4">
                        <label col="0" className="fas text-purple-500 text-lg mr-2">&#xf007;</label>
                        <textField
                            col="1"
                            className="text-white"
                            text={name}
                            hint="Enter your full name"
                            placeholderColor="#6b7280"
                            onTextChange={(args) => setName(args.object.text)}
                        />
                    </gridLayout>
                </stackLayout>

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
                <stackLayout className="mb-6">
                    <gridLayout columns="auto,*,auto" className="bg-gray-800 rounded-lg p-4">
                        <label col="0" className="fas text-purple-500 text-lg mr-2">&#xf023;</label>
                        <textField
                            col="1"
                            className="text-white"
                            secure={!showPassword}
                            text={password}
                            hint="Create a password"
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

                {/* Confirm Password Field */}
                <stackLayout className="mb-8">
                    <gridLayout columns="auto,*,auto" className="bg-gray-800 rounded-lg p-4">
                        <label col="0" className="fas text-purple-500 text-lg mr-2">&#xf023;</label>
                        <textField
                            col="1"
                            className="text-white"
                            secure={!showConfirmPassword}
                            text={confirmPassword}
                            hint="Confirm your password"
                            placeholderColor="#6b7280"
                            onTextChange={(args) => setConfirmPassword(args.object.text)}
                        />
                        <label 
                            col="2" 
                            className={`fas text-lg ${showConfirmPassword ? 'text-purple-500' : 'text-gray-500'}`}
                            onTap={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? '&#xf06e;' : '&#xf070;'}
                        </label>
                    </gridLayout>
                </stackLayout>

                {/* Sign Up Button */}
                <button
                    className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 rounded-lg mb-6"
                    onTap={handleSignup}
                >
                    <gridLayout columns="*,auto">
                        <label col="0" className="text-center font-bold">CREATE ACCOUNT</label>
                        <label col="1" className="fas">&#xf054;</label>
                    </gridLayout>
                </button>

                {/* Login Link */}
                <button
                    className="text-purple-400 p-4"
                    onTap={() => navigation.navigate("Login")}
                >
                    <formattedString>
                        <span className="text-gray-400">Already have an account? </span>
                        <span className="text-purple-400 font-bold">Login</span>
                    </formattedString>
                </button>
            </stackLayout>
        </scrollView>
    );
}