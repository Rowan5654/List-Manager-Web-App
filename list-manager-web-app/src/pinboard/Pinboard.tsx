import "./Pinboard.css"

type PinboardProps = {
    toggleIsNewMenuVisible: (newValue: boolean) => void;
}

const Pinboard: React.FC<PinboardProps> = ({ toggleIsNewMenuVisible }) => {
    const CreateList = () => {
        console.log("I am working!");
        toggleIsNewMenuVisible(true);
    }

    return (
        <div className="pinboard" onClick={ () => CreateList() }>
            <div className="pinboard-top-left-border pinboard-borders"></div>
            <div className="pinboard-top-right-border pinboard-borders"></div>
            <div className="pinboard-bottom-right-border pinboard-borders"></div>
            <div className="pinboard-bottom-left-border pinboard-borders"></div>
            <div className="pinboard-new-list-dialogue-container">
                <div className="pinboard-new-list-dialogue-container-top-left-border pinboard-new-list-dialogue-container-borders"></div>
                <div className="pinboard-new-list-dialogue-container-top-right-border pinboard-new-list-dialogue-container-borders"></div>
                <div className="pinboard-new-list-dialogue-container-bottom-right-border pinboard-new-list-dialogue-container-borders"></div>
                <div className="pinboard-new-list-dialogue-container-bottom-left-border pinboard-new-list-dialogue-container-borders"></div>
                <p>No lists found :(<br></br> Click here to create a new list</p>
                <p>+</p>
            </div>
        </div>
    );
}

export default Pinboard;