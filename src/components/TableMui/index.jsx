import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

export default class TableMui extends Component {
    static propTypes = {
        columns: PropTypes.oneOfType([
            PropTypes.func.isRequired,
            PropTypes.arrayOf(PropTypes.object).isRequired,
        ]),
        data: PropTypes.oneOfType([
            PropTypes.func.isRequired,
            PropTypes.arrayOf(PropTypes.object).isRequired,
        ]),
    };

    static defaultProps = {
        title: '',
        style: {
            borderRadius: '15px',
            padding: '0px 15px',
        },
        options: {
            headerStyle: {
                fontWeight: 'bold',
            },
            searchFieldStyle: {
                '& MuiInputunderline:after': {
                    display: 'none',
                },
            },
        },
        localization: {
            body: {
                emptyDataSourceMessage: 'No hay resultados que mostrar',
            },
            toolbar: {
                searchTooltip: 'Buscar',
                searchPlaceholder: 'Buscar',
            },
            header: {
                actions: '',
            },
            pagination: {
                labelRowsSelect: 'filas',
                labelDisplayedRows: ' {from}-{to} de {count}',
                firstTooltip: 'Primera página',
                previousTooltip: 'Página anterior',
                nextTooltip: 'Página siguiente',
                lastTooltip: 'Última página',
            },
        },
    };

    render() {
        const {columns, data, title, options, localization, ...rest} =
            this.props;

        return (
            <MaterialTable
                columns={columns}
                data={data}
                title={title}
                options={options}
                localization={localization}
                components={{
                    Container: (props) => <div {...props} />,
                }}
                {...rest}
            />
        );
    }
}
