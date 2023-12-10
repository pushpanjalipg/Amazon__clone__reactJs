import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='img' />
            <div className="header__search">
                <input className='header__searchInput' type='text' />
                <SearchIcon className="header__searchIcon" />
               
               </div>

            <div className="header__nav">
            <div className="header__optionFlag">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" className="header-_optionImg" alt="img"/>
                <span className="header-_optionLineTwo">EN</span>
            </div>
            <div className="header__option">
                <span className="header-_optionLineOne"> Hello sign in</span>
                <span className="header-_optionLineTwo">Account & List</span>
            </div>
            <div className="header__option">
            <span className="header-_optionLineOne">Returns</span>
                <span className="header-_optionLineTwo">& Orders</span>
            </div>
            <div className="header__optionCart">
            <AddShoppingCartIcon sx={{ fontSize: 35 }}/>
            <span className="header-_optionLineTwo">Cart</span>
            </div>
           
            </div>

        </div>
    )
}

export default Header
