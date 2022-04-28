import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import {
    Box,
    Paper,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Table,
    Typography,
    useMediaQuery,
    Chip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { formatAmountForDisplay, formatPercent } from '../utils';
import IconWithCircle from './IconWithCircle';

const PRICING_PRODUCT = {
    auto_loan: 'auto_loan',
    consumer_loan: 'consumer_loan',
    credit_line: 'credit_line',
};

const PRICING_PROGRAMS = {
    zero_program: 'zero_program',
    free_program: 'free_program',
};

export default function Pricing(props) {
    const { palette, breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('sm'));
    const { pricingData } = props;

    const minAnnualInterestInRangesArray = Math.min.apply(
        Math,
        pricingData.ranges.map(function (range) {
            return range.annual_interest;
        })
    );

    const PRICING_TABLE_ROWS_BY_PRODUCT_AND_RANGE_TYPE = {
        consumer_loan: {
            period: {
                header: {
                    icon: 'account_balance',
                    title: (
                        <>{`${
                            pricingData.ranges[0].setup_fee > 0 ? 'Con' : 'Sin'
                        } comisión apertura`}</>
                    ),
                },
                firstRow: {
                    title: 'Plazo',
                    value: (range) =>
                        `${range.range_start} - ${range.range_end}`,
                },
                secondRow: {
                    title: isMobile ? 'Coste' : 'Coste soportado',
                    value: (range) =>
                        formatPercent(range.merchant_discount_percentage),
                },
            },
            principal: {
                header: {
                    icon: 'account_balance',
                    title: (
                        <>{`Desde ${formatPercent(
                            minAnnualInterestInRangesArray
                        )} ${
                            pricingData.ranges[0].setup_fee > 0 ? 'con' : 'sin'
                        } comisión apertura`}</>
                    ),
                },
                firstRow: {
                    title: 'Importe',
                    value: (range) =>
                        `${formatAmountForDisplay(
                            range.range_start,
                            0
                        )} - ${formatAmountForDisplay(range.range_end, 0)}`,
                },
                secondRow: {
                    title: isMobile ? 'Interés' : 'Interés cliente',
                    value: (range) => formatPercent(range.annual_interest),
                },
            },
        },
        auto_loan: {
            period: {
                header: {
                    icon: 'directions_car',
                    title: (
                        <>{`0% ${
                            pricingData.ranges[0].setup_fee > 0 ? 'con' : 'sin'
                        } comisión apertura`}</>
                    ),
                },
                firstRow: {
                    title: 'Plazo',
                    value: (range) =>
                        `${range.range_start} - ${range.range_end}`,
                },
                secondRow: {
                    title: 'Comisión',
                    value: (range) => formatPercent(range.merchant_fee_value),
                },
            },
            principal: {
                header: {
                    icon: 'directions_car',
                    title: (
                        <>{`Desde ${formatPercent(
                            minAnnualInterestInRangesArray
                        )} ${
                            pricingData.ranges[0].setup_fee > 0 ? 'con' : 'sin'
                        } comisión apertura`}</>
                    ),
                },
                firstRow: {
                    title: 'Importe',
                    value: (range) =>
                        `${formatAmountForDisplay(
                            range.range_start,
                            0
                        )} - ${formatAmountForDisplay(range.range_end, 0)}`,
                },
                secondRow: {
                    title: isMobile ? 'Interés' : 'Interés cliente',
                    value: (range) => formatPercent(range.annual_interest),
                },
            },
        },
    };

    const useStyles = makeStyles({
        root: {
            '&.MuiChip-root': {
                backgroundColor: palette.secondary.main,
                color: palette.secondary.contrastText,
            },
        },
        MuiTableCell: {
            padding: 8,
            borderBottom: 'none',
            minWidth: 72,
        },
        MuiTableCellLastRow: {
            padding: 8,
            borderBottom: 'none',
        },
        MuiTableRow: {
            borderTop: '1px solid rgba(224, 224, 224, 1)',
            borderBottom: '1px solid rgba(224, 224, 224, 1)',
        },
        BottomCellBorder: {
            position: 'relative',
            top: '8px',
            borderBottom: '1px solid rgba(224, 224, 224, 1)',
            width: '100%',
        },
    });
    const classes = useStyles();

    const FeeParamBox = (props) => (
        <Box
            display={'flex'}
            flexDirection={isMobile ? 'row' : 'column'}
            paddingRight={isMobile ? 0 : 3}
            justifyContent={isMobile ? 'space-between' : 'flex-start'}
            pb={isMobile && 2}
        >
            {props.children}
        </Box>
    );
    const tableFirstColumnFixedWidth = isMobile ? 70 : 120;

    const allowChipVisualization = false;

    return (
        <Paper elevation={0} className={isMobile ? 'py-2' : 'py-4'}>
            <Box
                display={'inline-flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                width={'100%'}
            >
                <Box display={'inline-flex'} alignItems={'center'}>
                    <IconWithCircle
                        backgroundColor={palette.secondary.main}
                        height={isMobile ? 36 : 30}
                        width={isMobile ? 36 : 30}
                    >
                        <i
                            className="material-icons-outlined"
                            style={{
                                verticalAlign: 'sub',
                                fontSize: isMobile ? '20px' : '18px',
                                color: palette.common.white,
                            }}
                        >
                            {
                                PRICING_TABLE_ROWS_BY_PRODUCT_AND_RANGE_TYPE[
                                    pricingData.product
                                ][pricingData.range_type].header.icon
                            }
                        </i>
                    </IconWithCircle>
                    <Box
                        display={isMobile ? 'block' : 'inline-flex'}
                        alignItems={'baseline'}
                    >
                        <Typography
                            className="px-2"
                            variant={isMobile ? 'body2' : 'body1'}
                            style={{
                                color: palette.text.title,
                                lineHeight: isMobile && 1.25,
                            }}
                        >
                            <strong>
                                {
                                    PRICING_TABLE_ROWS_BY_PRODUCT_AND_RANGE_TYPE[
                                        pricingData.product
                                    ][pricingData.range_type].header.title
                                }
                            </strong>
                        </Typography>
                    </Box>
                </Box>
                {allowChipVisualization && (
                    <Box>
                        {pricingData.tags.map((tag) => (
                            <Chip className={classes.root} label={tag} />
                        ))}
                    </Box>
                )}
            </Box>
            {pricingData.range_grace_period_max > 0 && (
                <Box mt={2}>
                    <Box
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <IconWithCircle
                            backgroundColor={palette.primary.main}
                            height={22}
                            width={22}
                        >
                            <i
                                className="material-icons-outlined"
                                style={{
                                    fontSize: 14,
                                    color: palette.common.white,
                                }}
                            >
                                check
                            </i>
                        </IconWithCircle>
                        <Typography
                            variant="caption"
                            style={{
                                color: palette.text.title,
                                paddingLeft: 8,
                            }}
                        >
                            <strong>Campaña con carencia activa</strong>
                        </Typography>
                    </Box>
                </Box>
            )}
            <Box
                display={'inline-flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                width={'100%'}
            >
                <Paper
                    className="p-2 pt-3"
                    elevation={0}
                    style={{ width: '100%' }}
                >
                    <Box
                        display={isMobile ? 'flex' : 'inline-flex'}
                        flexDirection={isMobile ? 'column' : 'row'}
                        justifyContent={
                            isMobile ? 'flex-start' : 'space-between'
                        }
                    >
                        <FeeParamBox>
                            <Typography variant="caption">IMPORTE</Typography>
                            <Typography
                                variant="body2"
                                style={{ color: palette.text.title }}
                            >
                                <strong>
                                    {formatAmountForDisplay(
                                        pricingData.range_principal_min,
                                        0
                                    )}
                                    &nbsp; a &nbsp;
                                    {formatAmountForDisplay(
                                        pricingData.range_principal_max,
                                        0
                                    )}
                                </strong>
                            </Typography>
                        </FeeParamBox>
                        <FeeParamBox>
                            <Typography variant="caption">PLAZO</Typography>
                            <Typography
                                variant="body2"
                                style={{ color: palette.text.title }}
                            >
                                <strong>
                                    {pricingData.range_period_min}
                                    &nbsp; a &nbsp;
                                    {pricingData.range_period_max}
                                    &nbsp; Meses
                                </strong>
                            </Typography>
                        </FeeParamBox>
                        <FeeParamBox>
                            <Typography variant="caption">
                                COMISIÓN DE APERTURA
                            </Typography>
                            <Typography
                                variant="body2"
                                style={{ color: palette.text.title }}
                            >
                                <strong>
                                    {formatPercent(
                                        pricingData.ranges[0].setup_fee
                                    )}
                                </strong>
                            </Typography>
                        </FeeParamBox>
                        {pricingData.program ===
                            PRICING_PROGRAMS.free_program && (
                            <FeeParamBox>
                                <Typography variant="caption">
                                    COSTE SOPORTADO
                                </Typography>
                                <Typography
                                    variant="body2"
                                    style={{ color: palette.text.title }}
                                >
                                    <strong>
                                        {/* FIXME: Find a more robust approach*/}
                                        {`${formatPercent(0, 2)}`}
                                    </strong>
                                </Typography>
                            </FeeParamBox>
                        )}
                        {pricingData.program ===
                            PRICING_PROGRAMS.zero_program && (
                            <FeeParamBox>
                                <Typography variant="caption">
                                    INTERÉS CLIENTE
                                </Typography>
                                <Typography
                                    variant="body2"
                                    style={{ color: palette.text.title }}
                                >
                                    <strong>
                                        {pricingData.product ===
                                        PRICING_PRODUCT.auto_loan
                                            ? `${formatPercent(
                                                  pricingData.ranges[0]
                                                      .annual_interest,
                                                  2
                                              )}`
                                            : `${formatPercent(0, 2)}`}
                                    </strong>
                                </Typography>
                            </FeeParamBox>
                        )}
                        {pricingData.product === PRICING_PRODUCT.auto_loan && (
                            <>
                                <FeeParamBox>
                                    <Typography variant="caption">
                                        SEGURO
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        style={{ color: palette.text.title }}
                                    >
                                        <strong>
                                            {pricingData.insurance_value.toUpperCase()}
                                        </strong>
                                    </Typography>
                                </FeeParamBox>
                                <FeeParamBox>
                                    <Typography variant="caption">
                                        ANTIGÜEDAD DEL VEHÍCULO
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        style={{ color: palette.text.title }}
                                    >
                                        <strong>
                                            {
                                                pricingData.range_auto_registration_min
                                            }
                                            &nbsp; a &nbsp;
                                            {
                                                pricingData.range_auto_registration_max
                                            }
                                            &nbsp; Meses
                                        </strong>
                                    </Typography>
                                </FeeParamBox>
                            </>
                        )}
                    </Box>
                </Paper>
            </Box>
            <TableContainer
                component={Box}
                className={classes.MuiTableRow}
                style={{
                    maxHeight: 320,
                }}
            >
                <Table className={classes.MuiTableRoot}>
                    <TableBody>
                        <TableRow>
                            <TableCell
                                classes={{ root: classes.MuiTableCell }}
                                component="th"
                                scope="row"
                                minWidth={`${tableFirstColumnFixedWidth}px`}
                                style={{
                                    position: 'sticky',
                                    left: 0,
                                    backgroundColor: palette.common.white,
                                    minWidth: `${tableFirstColumnFixedWidth}px`,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                }}
                            >
                                <Typography
                                    align={'center'}
                                    variant={'body2'}
                                    component="h1"
                                    style={{
                                        color: palette.text.title,
                                    }}
                                >
                                    <strong>
                                        {
                                            PRICING_TABLE_ROWS_BY_PRODUCT_AND_RANGE_TYPE[
                                                pricingData.product
                                            ][pricingData.range_type].firstRow
                                                .title
                                        }
                                    </strong>
                                </Typography>
                                <div className={classes.BottomCellBorder}></div>
                            </TableCell>
                            {pricingData.ranges.map((item, i) => (
                                <TableCell
                                    key={i}
                                    align="center"
                                    classes={{ root: classes.MuiTableCell }}
                                    style={{
                                        backgroundColor:
                                            i % 2 === 0
                                                ? palette.grey[100]
                                                : 'none',
                                    }}
                                >
                                    <Typography
                                        align={'center'}
                                        variant={'body2'}
                                        component="h1"
                                        color={'textSecondary'}
                                    >
                                        <strong>
                                            {PRICING_TABLE_ROWS_BY_PRODUCT_AND_RANGE_TYPE[
                                                pricingData.product
                                            ][
                                                pricingData.range_type
                                            ].firstRow.value(item)}
                                        </strong>
                                    </Typography>
                                    <div
                                        className={classes.BottomCellBorder}
                                    ></div>
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell
                                classes={{ root: classes.MuiTableCellLastRow }}
                                component="th"
                                scope="row"
                                width={`${tableFirstColumnFixedWidth}px`}
                                style={{
                                    position: 'sticky',
                                    left: 0,
                                    backgroundColor: palette.common.white,
                                    minWidth: `${tableFirstColumnFixedWidth}px`,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                }}
                            >
                                <Typography
                                    align={'center'}
                                    variant={'body2'}
                                    component="h1"
                                    style={{
                                        color: palette.text.title,
                                    }}
                                >
                                    <strong>
                                        {
                                            PRICING_TABLE_ROWS_BY_PRODUCT_AND_RANGE_TYPE[
                                                pricingData.product
                                            ][pricingData.range_type].secondRow
                                                .title
                                        }
                                    </strong>
                                </Typography>
                            </TableCell>
                            {pricingData.ranges.map((item, i) => {
                                return (
                                    <TableCell
                                        key={i}
                                        align="center"
                                        classes={{
                                            root: classes.MuiTableCellLastRow,
                                        }}
                                        style={{
                                            backgroundColor:
                                                i % 2 === 0
                                                    ? palette.grey[100]
                                                    : 'none',
                                        }}
                                    >
                                        <Typography
                                            align={'center'}
                                            variant={'body2'}
                                            component="h1"
                                            color={'textSecondary'}
                                        >
                                            {PRICING_TABLE_ROWS_BY_PRODUCT_AND_RANGE_TYPE[
                                                pricingData.product
                                            ][
                                                pricingData.range_type
                                            ].secondRow.value(item)}
                                        </Typography>
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            {isMobile && (
                <Box
                    display={'inline-flex'}
                    width={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    pt={2}
                    pb={isMobile ? 2 : 0}
                >
                    <Typography variant="body2" style={{ paddingRight: 6 }}>
                        Desliza para ver todos los valores
                    </Typography>
                    <i className="material-icons-outlined">swipe</i>
                </Box>
            )}
        </Paper>
    );
}
