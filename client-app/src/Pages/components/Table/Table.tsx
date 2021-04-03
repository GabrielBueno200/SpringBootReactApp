import React from 'react';

import './Table.css';


const Table:React.FC = ({children}) => 
    <table className="styled-table">
        {children}
    </table>

export default Table;