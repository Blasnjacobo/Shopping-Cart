import React, { useState, useEffect } from 'react';
import { User } from '../../type/User';
import userContext from './userContext';

interface UserProviderProps {
    children: React.ReactNode;
}

export default function UserProvider({ children }: UserProviderProps): JSX.Element {
    const [user, setUser] = useState<User | undefined>(undefined); // Change initial state to undefined

    useEffect(() => {
        const getTokenFromUrl = () => {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');
            if (token) {
                // Token found in the URL, store it in local storage
                localStorage.setItem('jwtToken', token);
            }
        };

        getTokenFromUrl(); // Call the function to check for token in URL

        const getUser = async () => {
            try {
                const token = localStorage.getItem('jwtToken');
                if (!token) {
                    throw new Error('JWT token not found in local storage');
                }

                const response = await fetch('http://localhost:5000/auth/login/success', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`, // Include JWT token in the Authorization header
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 200) {
                    const data = await response.json();
                    console.log(data);
                    setUser(data.user);
                } else {
                    throw new Error('Authentication has failed!');
                }
            } catch (error) {
                console.error('Error fetching user:', error);
                // Handle error gracefully, e.g., display error message to user
            }
        };
        getUser();
    }, []);

    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    );
}
