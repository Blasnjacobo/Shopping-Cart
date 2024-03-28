import React, { useState, useEffect } from 'react';
import { User } from '../../type/User';
import userContext from './userContext';

interface UserProviderProps {
    children: React.ReactNode;
}

export default function UserProvider({ children }: UserProviderProps): JSX.Element {
    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        const getUser = () => {
            console.log('hola')
            fetch('https://shopping-cart-production-4ea1.up.railway.app/auth/login/success', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                if (response.status === 200) return response.json();
                throw new Error('Authentication has failed!');
            }).then(data => {
                console.log(data)
                setUser(data.user);
                const token = data.token;
                localStorage.setItem('jwtToken', token);
            }).catch(err => {
                console.log(err);
            });
        };
        getUser();
    }, []);

    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    );
}
