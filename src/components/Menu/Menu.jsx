import React, { useState } from 'react';
import "./Menu.css";
import { menu_list } from '../../assets/assets';

const Menu = ({ category, setCategory }) => {
  

  const handleItemClick = (itemName) => {
    setCategory(itemName); // Update the category state when item is clicked
   
  };

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta perferendis illum temporibus.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => handleItemClick(item.menu_name)} key={index} className='explore-menu-list-item'>
              <img src={item.menu_image}  className={` ${category === item.menu_name ? 'active' : ''}`} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Menu;

