import styles from "./pagination.module.css"

import {useState} from "react";

const Pagination = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const startShowingPage = currentPage - 3 < 0 ? 0 : currentPage - 3;
    const endShowingPage = startShowingPage + 6;


    const {totalUsersCount, pageSize} = props;

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.pageRow}>
            <div className={styles.gridify}>
                <button disabled={currentPage === 1} onClick={() => {
                    setCurrentPage(currentPage - 1)
                    props.onPageChanged(currentPage - 1)
                }}>
                    &#9664;</button>

                {pages.slice(startShowingPage, endShowingPage).map(page => {
                    return <button className={currentPage === page && styles.selectedPage}
                                   key={page}
                                   onClick={(e) => {
                                       setCurrentPage(page)
                                       props.onPageChanged(page)
                                   }}>{`${page} `}</button>
                })}
                <button disabled={currentPage === totalUsersCount} onClick={() => {
                    setCurrentPage(currentPage + 1)
                    props.onPageChanged(currentPage + 1)
                }}>
                    &#9654;</button>
            </div>
        </div>
    )

}

export default Pagination;