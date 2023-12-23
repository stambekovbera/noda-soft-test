import React, { useState } from 'react';

export const App: React.FC = () => {
    const [item, setItem] = useState<Record<number, User>>(null);

    const receiveRandomUser = async () => {
        const id = Math.floor(Math.random() * (10 - 1)) + 1;
        const response = await fetch(`${URL}/${id}`);
        const _user = (await response.json()) as User;
        setItem(_user);
    };

    const handleButtonClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.stopPropagation();
        receiveRandomUser();
    };

    return (
        <div>
            <header>Get a random user</header>
            <Button onClick={handleButtonClick} />
            <UserInfo user={item} />
        </div>
    );
};
