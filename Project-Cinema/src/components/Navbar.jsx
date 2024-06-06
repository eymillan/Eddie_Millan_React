import React from 'react';

function Navbar({ currentPage, setPage, lastPage }) {
    return (
        <nav className='button-container'>
            <button className="button" onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
                Anterior
            </button>

            <span className="button"> Página {currentPage} </span>

            <button className="button" onClick={() => setPage(currentPage + 1)} disabled={currentPage===lastPage}>
                Siguiente
            </button>
        </nav>
    );
}

export default Navbar;