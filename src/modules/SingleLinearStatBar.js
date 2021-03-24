import React, { Fragment } from 'react';
import { getIconName } from 'nemuru-components';
import { Grid, Box, Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function SingleLinearStatBar(props) {
    const {
        i,
        maximumValueForFilter,
        formatAmountForDisplay,
        filterMetrics,
        agent,
        selectFilterSalesChannel,
        filterSalesChannel,
        amountToShowPerChannel,
        maximumReferenceForChannel,
        amountToShowPerAgent,
        maximumReferenceForAgents,
        isScreenXs,
        maximumValueForSelectedAgent,
    } = props;

    var percentage = 0;
    var linearBar = 0;

    const calculatePercentage = (value, maxReference, maxValue, maxAgent) => {
        if (filterSalesChannel !== '' && amountToShowPerAgent !== undefined) {
            if (maxReference === 0) {
                linearBar = 0;
                percentage = 0;
            } else {
                const calcLinearBar = (value / maxReference) * 100;
                const calcPercentage = (value / maxAgent) * 100;
                linearBar = calcLinearBar;
                percentage = calcPercentage;
            }
        } else {
            const calcLinearBar = (value / maxReference) * 100;
            const calcPercentage = (value / maxValue) * 100;
            linearBar = calcLinearBar;
            percentage = calcPercentage;
        }
    };

    switch (true) {
        case amountToShowPerChannel !== undefined && filterMetrics === 'AMOUNT':
            calculatePercentage(
                amountToShowPerChannel.amount,
                maximumReferenceForChannel.amount,
                maximumValueForFilter.amount
            );
            break;
        case amountToShowPerAgent !== undefined &&
            maximumValueForSelectedAgent !== undefined &&
            filterMetrics === 'AMOUNT':
            calculatePercentage(
                amountToShowPerAgent.amount,
                maximumReferenceForAgents.amount,
                maximumValueForFilter.amount,
                maximumValueForSelectedAgent.amount
            );
            break;
        case amountToShowPerChannel !== undefined &&
            filterMetrics === 'OPERATIONS':
            calculatePercentage(
                amountToShowPerChannel.number,
                maximumReferenceForChannel.number,
                maximumValueForFilter.number
            );
            break;
        case amountToShowPerAgent !== undefined &&
            maximumValueForSelectedAgent !== undefined &&
            filterMetrics === 'OPERATIONS':
            calculatePercentage(
                amountToShowPerAgent.number,
                maximumReferenceForAgents.number,
                maximumValueForFilter.number,
                maximumValueForSelectedAgent.number
            );
            break;
        default:
            break;
    }

    return (
        <Fragment>
            <Box
                className="appear-anim"
                component="span"
                display="flex"
                alignItems="center"
                width={1}
                key={i}
            >
                {amountToShowPerChannel !== undefined ? (
                    <>
                        <Grid
                            className={
                                filterSalesChannel ===
                                amountToShowPerChannel.channelDescription
                                    ? 'stat-results selected'
                                    : filterSalesChannel === ''
                                    ? 'stat-results'
                                    : 'stat-results opacity'
                            }
                            container
                            onClick={() =>
                                selectFilterSalesChannel(
                                    amountToShowPerChannel.channelDescription,
                                    i
                                )
                            }
                        >
                            <Grid className="flex-icons" item xs={1}>
                                <i
                                    className="material-icons"
                                    style={{ height: 24 }}
                                >
                                    {getIconName(
                                        amountToShowPerChannel.channelType
                                    )}
                                </i>
                            </Grid>
                            <Grid item xs={4} sm={2}>
                                <Typography className="text-overflow">
                                    {amountToShowPerChannel.channelDescription}
                                </Typography>
                            </Grid>
                            {amountToShowPerChannel !== undefined ? (
                                <>
                                    <Grid
                                        className="stat-results"
                                        item
                                        xs={7}
                                        sm={4}
                                    >
                                        <Grid
                                            item
                                            className="stat-strong-value"
                                            xs={7}
                                        >
                                            <Typography className="amount">
                                                <strong>
                                                    {filterMetrics === 'AMOUNT'
                                                        ? formatAmountForDisplay(
                                                              amountToShowPerChannel.amount
                                                          )
                                                        : amountToShowPerChannel.number}
                                                </strong>
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={5}
                                            className={'stat-strong-value'}
                                        >
                                            <Typography className="percentage">
                                                {percentage !== 100
                                                    ? `${percentage.toFixed(
                                                          1
                                                      )}%`
                                                    : `${percentage.toFixed(
                                                          0
                                                      )}%`}
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} sm={5}>
                                        <LinearProgress
                                            className={
                                                isScreenXs
                                                    ? filterSalesChannel ==
                                                      amountToShowPerChannel.channelDescription
                                                        ? 'stat-bar thin selected'
                                                        : 'stat-bar thin'
                                                    : filterSalesChannel ==
                                                      amountToShowPerChannel.channelDescription
                                                    ? 'stat-bar selected'
                                                    : 'stat-bar'
                                            }
                                            variant="determinate"
                                            value={linearBar}
                                        />
                                    </Grid>
                                </>
                            ) : null}
                        </Grid>
                    </>
                ) : (amountToShowPerAgent !== undefined &&
                      filterSalesChannel === '') ||
                  (amountToShowPerAgent !== undefined &&
                      agent.agentLocation === filterSalesChannel) ? (
                    <>
                        <Grid
                            className="stat-results"
                            container
                            key={i}
                            style={{ cursor: 'default' }}
                        >
                            <Grid item xs={5} sm={3}>
                                <Typography className="text-overflow">
                                    {agent.agentName}
                                </Typography>
                            </Grid>
                            <Grid className="stat-results"   style={{ cursor: 'default' }} item xs={7} sm={4}>
                                <Grid item className="stat-strong-value" xs={7}>
                                    <Typography className="amount">
                                        <strong>
                                            {filterMetrics === 'AMOUNT'
                                                ? formatAmountForDisplay(
                                                      amountToShowPerAgent.amount
                                                  )
                                                : amountToShowPerAgent.number}
                                        </strong>
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={5}
                                    className={'stat-strong-value'}
                                >
                                    <Typography className="percentage">
                                        {percentage !== 100
                                            ? `${percentage.toFixed(1)}%`
                                            : `${percentage.toFixed(0)}%`}
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={5}>
                                <LinearProgress
                                    className={
                                        isScreenXs
                                            ? 'stat-bar thin'
                                            : 'stat-bar'
                                    }
                                    variant="determinate"
                                    value={linearBar}
                                />
                            </Grid>
                        </Grid>
                    </>
                ) : null}
            </Box>
        </Fragment>
    );
}
