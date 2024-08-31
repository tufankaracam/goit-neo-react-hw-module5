import styles from "./pagination.module.css";

export default function Pagination({ page, totalPage, setPage }) {
  
    const handleClickBack = (e)=>{
        setPage(page-1)
    }

    const handleClickNext = (e)=>{
        setPage(page+1)
    }


    const handleClick = (e)=>{
        setPage(e.target.innerText)
    }
    
    return (
    <ul className={styles.pages}>
        <li>
          <button onClick={handleClickBack} disabled={page===1}>{'<'}</button>
        </li>
      {page - 3 >= 1 && (
        <li>
          <button onClick={handleClick}>{1}</button>
        </li>
      )}
      {page - 2 >= 1 && (
        <li>
          <button onClick={handleClick}>{page - 2}</button>
        </li>
      )}
      {page - 1 >= 1 && (
        <li>
          <button onClick={handleClick}>{page - 1}</button>
        </li>
      )}
      <li>
        <button onClick={handleClick} className={styles.active} >{page}</button>
      </li>
      {page + 1 <= totalPage && (
        <li>
          <button onClick={handleClick}>{page + 1}</button>
        </li>
      )}
      {page + 2 <= totalPage && (
        <li>
          <button onClick={handleClick}>{page + 2}</button>
        </li>
      )}
      {page + 3 <= totalPage && (
        <li>
          <button onClick={handleClick}>{totalPage}</button>
        </li>
      )}
      <li>
          <button onClick={handleClickNext} disabled={page===totalPage}>{'>'}</button>
        </li>
    </ul>
  );
}
