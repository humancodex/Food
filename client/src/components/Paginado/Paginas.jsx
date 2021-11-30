import React from 'react'
import styles from './Pages.module.css'




function Paginas({recipsPerPage , recips , paginado}) {
const pageNumbers = []
for (let i = 1; i <= Math.ceil(recips / recipsPerPage) ; i++){
pageNumbers.push(i)
}




    return (
       <nav>
           <ul className={styles.pagination}>
               {pageNumbers?.map(n=> (
                   <li>
                       <button onClick={()=>{paginado(n)}}>{n}</button>
                   </li>
               ))}
           </ul>
       </nav>
    )
}

export default Paginas
