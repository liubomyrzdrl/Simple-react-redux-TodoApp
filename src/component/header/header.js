import React from 'react';
import './header.css';

const Header = (props) => {
    return (
        <div className='todo-list_container'>
              <h4>  TODO list </h4>
              <a><img src ={'images/delete.png'} onClick={props.onRemoveItem}/></a>   
        </div>
    );
};

export default Header;