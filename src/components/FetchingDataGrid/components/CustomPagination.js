import { useGridSlotComponentProps } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

export default function CustomPagination({ defaultOptions, ...props }) {
    const { state, apiRef } = useGridSlotComponentProps();
    const handleChange = (e) => {
        props.onChange(e.target.value);
    };

    useEffect(() => {
        apiRef.current.setState((s) => ({
            ...s,
            pagination: {
                ...s.pagination,
                pageCount: props.tableState.totalPages,
            },
        }));
    }, [props.tableState.totalPages]);

    const handleCustomPaginationOnChange = (e, value) => {
        apiRef.current.setPage(value - 1);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'end',
                paddingTop: '12px',
            }}
        >
            <Select
                defaultValue={defaultOptions.rowsPerPageOptions[0]}
                onChange={handleChange}
                style={{
                    marginRight: '12px',
                    fontSize: '0.875rem',
                }}
            >
                {defaultOptions.rowsPerPageOptions.map((option) => (
                    <MenuItem key={`keyId-${option}`} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
            <Pagination
                size={props.isMobile ? 'small' : 'medium'}
                color="primary"
                siblingCount={props.isMobile ? 0 : 1}
                count={state.pagination.pageCount}
                page={state.pagination.page + 1}
                onChange={(event, value) =>
                    handleCustomPaginationOnChange(event, value)
                }
            />
        </div>
    );
}
