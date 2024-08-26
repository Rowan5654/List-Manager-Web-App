import "./new-list-menu.css";

type NewListMenuProps = {
    isNewListMenuVisible: boolean
}

const NewListMenu: React.FC<NewListMenuProps> = ({ isNewListMenuVisible }) => {
    return (
        <div className="new-list-menu" style={{ display: isNewListMenuVisible ? "flex" : "none" }}>
            <div className="new-list-menu-container">
                <div className="new-list-menu-heading-content">
                    <p>+ Create New List +</p>
                </div>
                <div className="new-list-menu-input-content">
                    <p>Name:</p>
                    <input></input>
                </div>
                <button>Create</button>
            </div>
        </div>
    );
}

export default NewListMenu;