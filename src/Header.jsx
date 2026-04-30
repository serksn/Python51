import React, {useState} from "react";
import { FaRegUser } from 'react-icons/fa'

function Header() {
    const [searchValue, setSearchValue] = useState('');
    const [isHoverd, setIsHoverd] = useState('false');
    const [sizeOfIcons, setSizeOfIcons] = useState(24);
    const [colorOfIcons, setColorOfIcons] = useState('#d7accd');

    const handleMouseOver = () => {
        setIsHoverd(true);
        setSizeOfIcons(28);
        setColorOfIcons('#c30095');
    }
    const handleMouseOut = () => {
        setIsHoverd(true);
        setSizeOfIcons(24);
        setColorOfIcons('#d7accd');
    }

    console.log(searchValue);

    return (
        <header className="header">
            <div>
                <h2>Store</h2>
                <input
                    value={searchValue}
                    type='text'
                    onChange={e=>setSearchValue(e.target.value)}
                />
            </div>
            <div>
                <FaRegUser
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    size={sizeOfIcons} 
                    color={colorOfIcons} 
                />
            </div>
            <button>Профиль</button>
        </header>
    )
}

export default Header;