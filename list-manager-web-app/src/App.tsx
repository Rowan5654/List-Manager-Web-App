import React, { useState } from 'react';
// Components
import Pinboard from "./pinboard/Pinboard";
import NewListMenu from "./new-list-menu/new-list-menu";

// CSS
import './App.css';

const App = () => {
    const [isNewListMenuVisible, setIsNewMenuVisible] = useState(false);

    const toggleIsNewMenuVisible = (newValue: boolean) => {
        setIsNewMenuVisible(newValue);
    }

    return (
        <div className="root">
            <Pinboard toggleIsNewMenuVisible={ toggleIsNewMenuVisible } />
            <NewListMenu isNewListMenuVisible={ isNewListMenuVisible } />
        </div>
    );
}

export default App;
