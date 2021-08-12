import { Box, Grid, Paper, Typography } from "@material-ui/core";
import useTheme from "@material-ui/core/styles/useTheme";
import React from "react";
import { formatMoney, formatNumber, formatPercent } from "../utils";

const PricingProduct = {
  auto_loan: "auto_loan",
  consumer_loan: "consumer_loan",
};

const PricingRangeType = {
  period: "period",
  principal: "principal",
};

export default function Pricing(props) {


  const { palette: themePalette, customBorderRadius } = useTheme();
  const { pricingData } = props;
  return (
    <Paper elevation={6}>
      <Box p={3}>
        {/* <Box>
          <Grid container direction="row" alignItems="center" spacing={1}>
            {pricingData.product === PricingProduct.auto_loan && (
              <Grid item>
                <i
                  className="material-icons"
                  style={{ color: themePalette.secondary.main, width: 24 }}
                >{`drive_eta`}</i>
              </Grid>
            )}
          </Grid>
        </Box> */}
        <div style={{ flexGrow: 1 }}>
          <Grid container direction="row" spacing={2} alignItems="center">
            <Grid item sm={12} md={4}>
              <Grid container>
                <Grid item sm={3} md={6}>
                  <Box mt={1}>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>
                        <i
                          className="material-icons"
                          style={{
                            color: themePalette.primary.main,
                            width: 24,
                          }}
                        >{`money`}</i>
                      </Grid>
                      <Grid item>
                        <Typography variant="caption" color={themePalette.text.title}>
                          Importe
                        </Typography>
                        <br />
                        <Typography
                          variant="caption"
                          color={themePalette.text.title}
                          style={{
                            fontWeight: 700,
                          }}
                        >{`${formatNumber(
                          pricingData.range_principal_min,
                          0
                        )} a ${formatMoney(
                          pricingData.range_principal_max,
                          0
                        )}`}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item sm={3} md={6}>
                  <Box mt={1}>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>
                        <i
                          className="material-icons"
                          style={{
                            color: themePalette.primary.main,
                            width: 24,
                          }}
                        >{`date_range`}</i>
                      </Grid>
                      <Grid item>
                        <Typography variant="caption">
                          Plazo
                        </Typography>
                        <br />
                        <Typography
                          variant="caption"
                          color={themePalette.text.title}
                          style={{ fontWeight: 700 }}
                        >{`${pricingData.range_period_min} a ${pricingData.range_period_max} meses`}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item sm={3} md={6}>
                  <Box mt={1}>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>
                        <i
                          className="material-icons"
                          style={{
                            color: themePalette.primary.main,
                            width: 24,
                          }}
                        >{`account_circle_outlined`}</i>
                      </Grid>
                      <Grid item>
                        <Typography variant="caption" color={themePalette.text.title}>
                          Comisión apertura
                        </Typography>
                        <br />
                        <Typography
                          variant="caption"
                          color={themePalette.text.title}
                          style={{ fontWeight: 700 }}
                        >
                          {pricingData.range_setup_fee_max === undefined
                            ? "-"
                            : pricingData.range_setup_fee_max > 0 &&
                              pricingData.range_setup_fee_max >
                                pricingData.range_setup_fee_min
                            ? `desde ${formatPercent(
                                pricingData.range_setup_fee_min,
                                2
                              )}`
                            : `${formatPercent(
                                pricingData.range_setup_fee_min,
                                2
                              )}`}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item sm={3} md={6}>
                  <Box mt={1}>
                    {pricingData.range_type === PricingRangeType.period && (
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item>
                          <i
                            className="material-icons"
                            style={{
                              color: themePalette.primary.main,
                              width: 24,
                            }}
                          >{`account_circle_outlined`}</i>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption" color={themePalette.text.title}>
                            Interés cliente
                          </Typography>
                          <br />
                          <Typography
                            variant="caption"
                            color={themePalette.text.title}
                            style={{ fontWeight: 700 }}
                          >
                            {/* FIXME: Find a more robust approach */}
                            {pricingData.product === PricingProduct.auto_loan
                              ? `${formatPercent(
                                  pricingData.ranges[0].annual_interest,
                                  2
                                )}`
                              : `${formatPercent(0, 2)}`}
                          </Typography>
                        </Grid>
                      </Grid>
                    )}
                    {pricingData.range_type === PricingRangeType.principal && (
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item>
                          <i
                            className="material-icons"
                            style={{
                              color: themePalette.primary.main,
                              width: 24,
                            }}
                          >{`storefront_outlined`}</i>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption"  color={themePalette.text.title}>
                            Coste soportado
                          </Typography>
                          <br />
                          <Typography
                            variant="caption"
                            color={themePalette.text.title}
                            style={{ fontWeight: 700 }}
                          >
                            {pricingData.range_merchant_discount_percentage_max ===
                            undefined
                              ? "-"
                              : pricingData.range_merchant_discount_percentage_max >
                                0
                              ? `desde ${formatPercent(
                                  pricingData.range_merchant_discount_percentage_min,
                                  2
                                )}`
                              : `${formatPercent(
                                  pricingData.range_merchant_discount_percentage_min,
                                  2
                                )}`}
                          </Typography>
                        </Grid>
                      </Grid>
                    )}
                  </Box>
                </Grid>
                {pricingData.product === PricingProduct.auto_loan && (
                  <Grid item sm={3} md={6}>
                    <Box mt={1}>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item>
                          <i
                            className="material-icons"
                            style={{
                              color: themePalette.primary.main,
                              width: 24,
                            }}
                          >{`drive_eta`}</i>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption"  color={themePalette.text.title}>
                            Antigüedad vehículo
                          </Typography>
                          <br />
                          <Typography
                            variant="caption"
                            color={themePalette.text.title}
                            style={{ fontWeight: 700 }}
                          >
                            {`${pricingData.range_auto_registration_min} a ${pricingData.range_auto_registration_max} años`}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                )}
                {pricingData.product === PricingProduct.auto_loan && (
                  <Grid item sm={3} md={6}>
                    <Box mt={1}>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        spacing={1}
                      >
                        <Grid item>
                          <i
                            className="material-icons"
                            style={{
                              color: themePalette.primary.main,
                              width: 24,
                            }}
                          >{`security`}</i>
                        </Grid>
                        <Grid item>
                          <Typography variant="caption" color={themePalette.text.title}>
                            Seguro
                          </Typography>
                          <br />
                          <Typography
                            variant="caption"
                            color={themePalette.text.title}
                            style={{ fontWeight: 700 }}
                          >
                            {pricingData.insurance_value
                              ? pricingData.insurance_value
                              : "Sin seguro"}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Grid>
            {pricingData.range_type === PricingRangeType.principal && (
              <Grid item sm={12} md={8}>
                <Box>
                  <Grid container direction="row">
                    <Grid item style={{ flexGrow: 1, maxWidth: 120 }}>
                      <Grid container direction="column">
                        {/* Range */}
                        <Grid item>
                          <Box
                            p={0.5}
                            style={{
                              margin: 1,
                              height: 30,
                              backgroundColor: themePalette.grey[300],
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius:
                                customBorderRadius.paper > 10
                                  ? 5
                                  : customBorderRadius.paper,
                            }}
                          >
                            <Typography
                              variant="caption"
                              color={themePalette.text.title}
                              style={{ fontWeight: 700 }}
                            >
                              Importe
                            </Typography>
                          </Box>
                        </Grid>
                        {/* TIN */}
                        <Grid item>
                          <Box
                            p={0.5}
                            style={{
                              margin: 1,
                              height: 30,
                              backgroundColor: themePalette.grey[200],
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius:
                                customBorderRadius.paper > 10
                                  ? 5
                                  : customBorderRadius.paper,
                            }}
                          >
                            <Typography
                              variant="caption"
                              color={themePalette.text.title}
                              style={{ fontWeight: 700 }}
                            >
                              Interés cliente
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item style={{ flexGrow: 1 }}>
                      <Grid container direction="row">
                        {pricingData.ranges.map((range) => (
                          <Grid
                            item
                            key={range.range_start}
                            style={{ flexGrow: 1 }}
                          >
                            <Grid container direction="column">
                              {/* Range */}
                              <Grid item>
                                <Box
                                  p={0.5}
                                  style={{
                                    margin: 1,
                                    height: 30,
                                    backgroundColor: themePalette.grey[300],
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius:
                                      customBorderRadius.paper > 10
                                        ? 5
                                        : customBorderRadius.paper,
                                  }}
                                >
                                  <Typography
                                    variant="caption"
                                    color={themePalette.text.title}
                                    style={{ fontWeight: 700 }}
                                  >
                                    {`${formatNumber(
                                      range.range_start,
                                      0
                                    )} - ${formatNumber(range.range_end, 2)}`}
                                  </Typography>
                                </Box>
                              </Grid>
                              {/* TIN */}
                              <Grid item>
                                <Box
                                  p={0.5}
                                  style={{
                                    margin: 1,
                                    height: 30,
                                    backgroundColor: themePalette.grey[200],
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius:
                                      customBorderRadius.paper > 10
                                        ? 5
                                        : customBorderRadius.paper,
                                  }}
                                >
                                  <Typography
                                    variant="caption"
                                    color={themePalette.text.title}
                                    align="center"
                                    style={{ fontWeight: 700 }}
                                  >
                                    {formatPercent(range.annual_interest, 2)}
                                  </Typography>
                                </Box>
                              </Grid>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            )}
            {pricingData.range_type === PricingRangeType.period && (
              <Grid item sm={12} md={8}>
                <Box>
                  <Grid container direction="row">
                    <Grid item style={{ flexGrow: 1, maxWidth: 120 }}>
                      <Grid container direction="column">
                        {/* Range */}
                        <Grid item>
                          <Box
                            p={0.5}
                            style={{
                              margin: 1,
                              height: 30,
                              backgroundColor: themePalette.grey[300],
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius:
                                customBorderRadius.paper > 10
                                  ? 5
                                  : customBorderRadius.paper,
                            }}
                          >
                            <Typography
                              variant="caption"
                              color={themePalette.text.title}
                              style={{ fontWeight: 700 }}
                            >
                              Plazo
                            </Typography>
                          </Box>
                        </Grid>
                        {/* Coste programa */}
                        {pricingData.product ===
                          PricingProduct.consumer_loan && (
                          <Grid item>
                            <Box
                              p={0.5}
                              style={{
                                margin: 1,
                                height: 30,
                                backgroundColor: themePalette.grey[200],
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius:
                                  customBorderRadius.paper > 10
                                    ? 5
                                    : customBorderRadius.paper,
                              }}
                            >
                              <Typography
                                variant="caption"
                                color={themePalette.text.title}
                                style={{ fontWeight: 700 }}
                              >
                                Coste soportado
                              </Typography>
                            </Box>
                          </Grid>
                        )}
                        {/* Comision */}
                        {pricingData.product === PricingProduct.auto_loan &&
                          pricingData.range_merchant_fee_max > 0 && (
                            <Grid item>
                              <Box
                                p={0.5}
                                style={{
                                  margin: 1,
                                  height: 30,
                                  backgroundColor: themePalette.grey[200],
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  borderRadius:
                                    customBorderRadius.paper > 10
                                      ? 5
                                      : customBorderRadius.paper,
                                }}
                              >
                                <Typography
                                  variant="caption"
                                  color={themePalette.text.title}
                                  style={{ fontWeight: 700 }}
                                >
                                  Comisión
                                </Typography>
                              </Box>
                            </Grid>
                          )}
                      </Grid>
                    </Grid>
                    <Grid item style={{ flexGrow: 1 }}>
                      <Grid container direction="row">
                        {pricingData.ranges.map((range) => (
                          <Grid
                            item
                            key={range.range_start}
                            style={{ flexGrow: 1 }}
                          >
                            <Grid container direction="column">
                              {/* Range */}
                              <Grid item>
                                <Box
                                  p={0.5}
                                  style={{
                                    margin: 1,
                                    height: 30,
                                    backgroundColor: themePalette.grey[300],
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius:
                                      customBorderRadius.paper > 10
                                        ? 5
                                        : customBorderRadius.paper,
                                  }}
                                >
                                  <Typography
                                    variant="caption"
                                    color={themePalette.text.title}
                                    style={{ fontWeight: 700 }}
                                  >
                                    {`${formatNumber(
                                      range.range_start,
                                      0
                                    )} - ${formatNumber(range.range_end, 2)}`}
                                  </Typography>
                                </Box>
                              </Grid>
                              {/* Coste programa */}
                              {pricingData.product ===
                                PricingProduct.consumer_loan && (
                                <Grid item>
                                  <Box
                                    p={0.5}
                                    style={{
                                      margin: 1,
                                      height: 30,
                                      backgroundColor: themePalette.grey[200],
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      borderRadius:
                                        customBorderRadius.paper > 10
                                          ? 5
                                          : customBorderRadius.paper,
                                    }}
                                  >
                                    <Typography
                                      variant="caption"
                                      color={themePalette.text.title}
                                      align="center"
                                      style={{ fontWeight: 700 }}
                                    >
                                      {formatPercent(
                                        range.merchant_discount_percentage,
                                        2
                                      )}
                                    </Typography>
                                  </Box>
                                </Grid>
                              )}
                              {/* Comision */}
                              {pricingData.product ===
                                PricingProduct.auto_loan &&
                                pricingData.range_merchant_fee_max > 0 && (
                                  <Grid item>
                                    <Box
                                      p={0.5}
                                      style={{
                                        margin: 1,
                                        height: 30,
                                        backgroundColor: themePalette.grey[200],
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius:
                                          customBorderRadius.paper > 10
                                            ? 5
                                            : customBorderRadius.paper,
                                      }}
                                    >
                                      <Typography
                                        variant="caption"
                                        color={themePalette.text.title}
                                        align="center"
                                        style={{ fontWeight: 700 }}
                                      >
                                        {formatPercent(
                                          range.merchant_fee_value,
                                          2
                                        )}
                                      </Typography>
                                    </Box>
                                  </Grid>
                                )}
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            )}
          </Grid>
        </div>
      </Box>
    </Paper>
  );
}

Pricing.propTypes = {
  // options: PropTypes.object,
  // subCircleClassName: PropTypes.string,
  // subCircleValue: PropTypes.number,
  // value: PropTypes.number.isRequired
};
