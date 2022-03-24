import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CustomToolbar from './components/CustomToolbar';
import CustomPagination from './components/CustomPagination';

const SEARCH_TIMEOUT = 1000;
const DEFAULT_OPTIONS = {
    PAGE_NUMBER: 0,
    PAGE_SIZE: 10,
    ORDER_BY: 'created_at',
    ORDER_DIRECTION: 'desc',
    ROWS_PER_PAGE_OPTIONS: [10, 25, 50, 100],
    SHOW_SEARCH: false,
    SHOW_EXPORT: false,
    SHOW_REFRESH: false,
};

export default function FetchingDataGrid({
    parentComponentSearchString,
    clearParentComponentSearchString,
    columns,
    fetch,
    defaultPageNumber,
    defaultPageSize,
    defaultOrderBy,
    defaultOrderDirection,
    rowsPerPageOptions,
    showSearch,
    showExport,
    showRefresh,
    filters,
    ...props
}) {
    const { breakpoints, palette: themePalette } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('sm'));
    const isScreenMd = useMediaQuery(breakpoints.down('md'));

    const initialTableParams = {
        pageNumber: defaultPageNumber || DEFAULT_OPTIONS.PAGE_NUMBER,
        pageSize: defaultPageSize || DEFAULT_OPTIONS.PAGE_SIZE,
        orderBy: defaultOrderBy || DEFAULT_OPTIONS.ORDER_BY,
        orderDirection:
            defaultOrderDirection || DEFAULT_OPTIONS.ORDER_DIRECTION,
        rowsPerPageOptions:
            rowsPerPageOptions || DEFAULT_OPTIONS.ROWS_PER_PAGE_OPTIONS,
    };

    const [tableOptionsState, setTableOptionsState] =
        useState(initialTableParams);

    const [state, setState] = useState({
        data: [],
        totalCount: undefined,
        loading: true,
        filters: [],
    });

    const [searchState, setSearchState] = useState({
        searchString: undefined,
        lastChangeTime: undefined,
        forcedTimestamp: undefined,
    });

    const { searchString, lastChangeTime, forcedTimestamp } = searchState;

    const { pageNumber, pageSize, orderBy, orderDirection } = tableOptionsState;

    const { loading, data } = state;

    const useStyles = makeStyles({
        root: {
            border: 'none',
            padding: isMobile ? '30px 0px' : 20,
            '& .MuiDataGrid-columnSeparator': {
                visibility: 'hidden',
            },
            '& .MuiDataGrid-columnHeaderTitleContainer': {
                padding: 0,
            },
            '& .MuiDataGrid-row': {
                cursor: 'pointer',
            },
            '& .MuiDataGrid-toolbarContainer': {
                justifyContent: isMobile ? 'center' : 'end',
                color: themePalette.text.secondary,
            },
            '& .MuiButton-label': {
                color: themePalette.text.secondary,
                fontSize: 0,
            },
            '& .MuiButton-iconSizeSmall > *:first-child': {
                fontSize: 26,
            },
            '& .MuiButton-startIcon': {
                margin: 0,
            },
            '& .MuiButton-endIcon': {
                margin: 0,
            },
            '& .MuiDataGrid-cell': {
                opacity: loading ? 0.25 : 1,
                lineHeight: isScreenMd ? '1.43 !important' : '',
            },
            '& .MuiDataGrid-cell:focus': {
                outline: 'none',
            },
            '& .MuiDataGrid-columnHeader:focus': {
                outline: 'none',
            },
            '& .MuiSelect-root': {
                paddingBlock: 0,
                paddingRight: 24,
            },
        },
    });

    const classes = useStyles();

    const handleSorting = (sortParams) => {
        let params = sortParams[0];
        if (
            JSON.stringify(orderBy) !== JSON.stringify(params?.field) ||
            (JSON.stringify(orderDirection) !== JSON.stringify(params?.sort) &&
                sortParams.length > 0)
        )
            fetchData({
                orderBy: sortParams[0]?.field,
                orderDirection: sortParams[0]?.sort,
            });
    };

    useEffect(() => {
        parentComponentSearchString &&
            onChangeSearchText(parentComponentSearchString);
    }, [parentComponentSearchString]);

    const onChangeSearchText = (searchValue) => {
        const timeStamp = new Date();
        setSearchState((s) => ({
            ...s,
            searchString: searchValue,
            lastChangeTime: timeStamp,
        }));
        setState((s) => ({ ...s, loading: true }));
        setTimeout(() => {
            forcedCheckTrigger(timeStamp);
        }, SEARCH_TIMEOUT);
    };

    useEffect(() => {
        const currentFilters = filters || [];
        if (JSON.stringify(currentFilters) !== JSON.stringify(state.filters)) {
            setState((s) => ({
                ...s,
                filters: currentFilters,
            }));
            fetchData({ filters: [{ wut: '' }] });
        }
    }, [filters]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        TriggerRequestIfTimeIsUp();
    }, [forcedTimestamp]);

    const forcedCheckTrigger = (timeStamp) => {
        setSearchState((s) => ({
            ...s,
            forcedTimestamp: timeStamp,
        }));
    };

    const TriggerRequestIfTimeIsUp = () => {
        const timeDifference = new Date() - lastChangeTime;
        if (timeDifference >= SEARCH_TIMEOUT) {
            fetchData();
        }
    };

    const fetchData = (customQueryParams) => {
        const queryParams = {
            ...state,
            ...tableOptionsState,
            searchString,
            filters: state.filters,
            ...customQueryParams,
        };

        fetch(queryParams).then((result) => {
            setState((s) => ({
                ...s,
                data: result.data,
                totalCount: result.totalCount,
                totalPages: result.totalPages,
                loading: false,
            }));
        });
        setState((s) => ({
            ...s,
            loading: true,
        }));
        setTableOptionsState((s) => ({
            ...s,
            ...customQueryParams,
        }));
    };

    const handleToolbarClick = (searchValue) => {
        const refresh = () => {
            fetchData();
        };
        const fetchWithSearchValue = () => {
            setSearchState((s) => ({
                ...s,
                searchString: searchValue,
            }));
            fetchData({ searchString: searchValue });
        };

        if (searchValue === '') {
            clearParentComponentSearchString();
        }

        if (searchValue === undefined) {
            refresh();
        } else {
            fetchWithSearchValue();
        }
    };

    return (
        <DataGrid
            className={classes.root}
            autoHeight
            loading={loading}
            rowHeight={74}
            disableColumnMenu
            disableColumnFilter
            columns={columns}
            rows={data}
            paginationMode="server"
            rowCount={state?.totalCount}
            rowsPerPageOptions={[10, 25, 50, 100]}
            page={pageNumber}
            pageSize={pageSize}
            onPageChange={(pageNumber) => fetchData({ pageNumber })}
            onPageSizeChange={(pageSize) => fetchData({ pageSize })}
            sortingMode="server"
            onSortModelChange={handleSorting}
            sortModel={[{ field: orderBy, sort: orderDirection }]}
            pagination
            components={{
                Toolbar: CustomToolbar,
                Pagination: CustomPagination,
            }}
            componentsProps={{
                pagination: {
                    defaultOptions: initialTableParams,
                    labelRowsPerPage: null,
                    onChange: (pageSize) => fetchData({ pageSize }),
                    tableState: state,
                    isMobile,
                },
                toolbar: {
                    value: searchString,
                    onChange: (e) => onChangeSearchText(e.target.value),
                    onClick: (searchSting) => handleToolbarClick(searchSting),
                    searchState: searchState,
                    showSearch: showSearch,
                    showExport: showExport,
                    showRefresh: showRefresh,
                },
            }}
            {...props}
        />
    );
}
