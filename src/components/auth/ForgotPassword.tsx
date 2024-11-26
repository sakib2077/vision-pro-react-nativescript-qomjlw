import * as React from "react";

export function ForgotPassword({ navigation }) {
    const [email, setEmail] = React.useState("");

    const handleResetPassword = () => {
        // Handle password reset logic here
        alert("Password reset link sent to your email");
        navigation.navigate("Login");
    };

    return (
        <scrollView className="bg-black">
            <stackLayout className="p-6">
                <label className="text-4xl font-bold text-white text-center mb-4">
                    Reset Password
                </label>

                <label className="text-gray-400 text-center mb-8">
                    Enter your email address and we'll send you instructions to reset your password.
                </label>

                <stackLayout className="mb-8">
                    <label className="text-white mb-2">Email</label>
                    <textField
                        className="bg-gray-800 text-white p-4 rounded-lg"
                        keyboardType="email"
                        autocorrect={false}
                        autocapitalizationType="none"
                        text={email}
                        hint="Enter your email"
                        onTextChange={(args) => setEmail(args.object.text)}
                    />
                </stackLayout>

                <button
                    className="bg-purple-600 text-white p-4 rounded-lg mb-4"
                    onTap={handleResetPassword}
                >
                    Send Reset Link
                </button>

                <button
                    className="text-purple-400 p-4"
                    onTap={() => navigation.navigate("Login")}
                >
                    Back to Login
                </button>
            </stackLayout>
        </scrollView>
    );
}