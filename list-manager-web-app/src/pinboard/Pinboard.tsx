import "./Pinboard.css"

function Pinboard() {
    return (
        <div className="pinboard">
            <div className="pinboard-top-left-border"></div>
            <div className="pinboard-top-right-border"></div>
            <div className="pinboard-bottom-right-border"></div>
            <div className="pinboard-bottom-left-border"></div>
            <div className="new-list-dialogue-container">
                <p>Create new list</p>
                <p>+</p>
            </div>
        </div>
    );
}

export default Pinboard;