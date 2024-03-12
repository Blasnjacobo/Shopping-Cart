import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../type/User';

const UserContext = createContext<User | undefined>(undefined);

export const useUser = () => useContext(UserContext);

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        const getUser = () => {
            fetch('http://localhost:5000/auth/login/success', {
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
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};
