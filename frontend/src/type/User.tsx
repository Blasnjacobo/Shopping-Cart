export interface User {
    displayName: string;
    id: string;
    name: {
        familyName: string;
        givenName: string;
    };
    photos: Photo[];
    provider: string;
    _json: {
        sub: string;
        name: string;
        given_name: string;
        family_name: string;
        picture: string;
        // Add any other properties as needed
    };
    _raw: string;
}

interface Photo {
    value: string;
}