import React, { useCallback, useState } from 'react';
import { Button } from "../shared/UI/Button/Button.tsx";
import { getUserById, IUser, UserCard } from "../entities/User";

export const App: React.FC = () => {
    const [ item, setItem ] = useState<IUser | null>( null );

    const receiveRandomUser = useCallback( async () => {
        const id = Math.floor( Math.random() * ( 10 - 1 ) ) + 1;
        const user = await getUserById( id );
        setItem( () => user );
    }, [] );

    const handleButtonClick = useCallback( () => {
        receiveRandomUser();
    }, [ receiveRandomUser ] );

    return (
        <div>
            <header>Get a random user</header>
            <Button onClick={ handleButtonClick }>
                Get
            </Button>
            <UserCard user={ item }/>
        </div>
    );
};
