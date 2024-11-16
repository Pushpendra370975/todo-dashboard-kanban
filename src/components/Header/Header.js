
import React, { useState } from 'react';
import './Header.css';

const Header = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="header">
      <div className="display-dropdown">
        <button 
          className="display-button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="icon">≡</span> Display <span className="arrow">▼</span>
        </button>
        
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item">
              <span>Grouping</span>
              <select 
                value={grouping}
                onChange={(e) => onGroupingChange(e.target.value)}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-item">
              <span>Ordering</span>
              <select 
                value={sorting}
                onChange={(e) => onSortingChange(e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;