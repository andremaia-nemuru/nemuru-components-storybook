import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { Button, TextField } from '@material-ui/core';
import React from 'react';

export default function CustomToolbar({
    showSearch,
    showExport,
    showRefresh,
    value,
    onChange,
    searchState,
    onClick,
}) {
    return (
        <>
            <GridToolbarContainer>
                {showSearch && (
                    <TextField
                        variant="standard"
                        value={value}
                        onChange={onChange}
                        InputProps={{
                            startAdornment: (
                                <i className="material-icons-outlined">
                                    search
                                </i>
                            ),
                            endAdornment: (
                                <Button
                                    disabled={!searchState.searchString}
                                    onClick={() => onClick('')}
                                    endIcon={
                                        <i className="material-icons-outlined">
                                            clear
                                        </i>
                                    }
                                    style={{ minWidth: 0 }}
                                />
                            ),
                        }}
                    />
                )}
                {showExport && <GridToolbarExport />}
                {showRefresh && (
                    <div>
                        <Button
                            onClick={() => onClick()}
                            startIcon={
                                <i
                                    className="material-icons-outlined"
                                    style={{ fontSize: 26 }}
                                >
                                    restart_alt
                                </i>
                            }
                            style={{ minWidth: 0 }}
                        />
                    </div>
                )}
            </GridToolbarContainer>
        </>
    );
}
