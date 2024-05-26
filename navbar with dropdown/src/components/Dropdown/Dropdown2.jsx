// Importing Modules
import React, { useState } from 'react';

// Creating a function to add DropDown options with respect to their values
function DropdownExample() {
    const [selectedValue, setSelectedValue] = useState('');
    const options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    ];
    // Returning the DropDownMenu
return (
    <select
    value={selectedValue}
    onChange={(e) => setSelectedValue(e.target.value)}
    >
    {options.map((option) => (
    <option key={option.value} value={option.value}>
    {option.label}
    </option>
    ))}
    </select>
    );
    }
    export default DropdownExample