import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Perfume } from '../type/Perfume';


// Define the context
const PerfumesContext = createContext({} as PerfumesContextType);


// Define the type for the context
type PerfumesContextType = {
    perfumes: Perfume[];
    loading: boolean;
};

// Custom hook to use the context
export const usePerfumes = () => useContext(PerfumesContext);

// Provider component to wrap your application
export const PerfumesProvider = ({ children }: { children: ReactNode }) => {
    const [perfumes, setPerfumes] = useState<Perfume[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchStoreItems = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:5000/perfumes/');
                if (!response.ok) {
                    throw new Error('Failed to fetch data from the server');
                }
                const data = await response.json();
                setPerfumes(data.data);
            } catch (error) {
                console.error('Error fetching store items:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchStoreItems();
    }, []);
    console.log(perfumes)
    return (
        <PerfumesContext.Provider value={{ perfumes, loading }}>
            {children}
        </PerfumesContext.Provider>
    );
};
