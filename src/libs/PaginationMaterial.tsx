import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type Props = {
    pageSize: number
    totalUsersCount: number
    page: number                          // current page number
    onPageChanged: (page: number) => void
}

export const PaginationMaterial: React.FC<Props> = ({pageSize, totalUsersCount, page, onPageChanged}) => {


    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    return (
        <Stack spacing={2}>
            <Pagination count={pagesCount}
                        onChange={(e, page) => onPageChanged(page)}
                        siblingCount={3}
                        page={page}
                        color="primary"
                        shape="rounded"
                        size="small"/>
        </Stack>

    );
}
