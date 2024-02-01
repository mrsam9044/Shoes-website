import React, { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] =useState('');
    return (
        <form>
            <label for="email">email</label>
            <input value= {email} type="email" placeholder="samgupta1577@gmail.com" id="email" name="email" />
            <label for="password">password</label>
            <input value= {password} placeholder="**********" id="password" name="password" />
            <button>Log IN</button>
        </form>
    )
}
