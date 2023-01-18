import React, {useState} from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(username, password)

        const response = await fetch(
            "http://localhost:5555/users/login",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password})
            }
        )

        const jsonResponse = await response.json();

        if (response.ok) {
            window.localStorage.setItem("token", jsonResponse.token);
        } else {
            console.log("Something went wrong");
            console.log(jsonResponse);
        }

    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    Username:
                    <input
                        value={username}
                        type={"text"}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    Password:
                    <input
                        value={password}
                        type={"password"}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;