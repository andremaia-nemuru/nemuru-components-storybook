import React, { Fragment } from "react";
import { InputRange, InputRangeMobile } from "nemuru-components";


export default function ResponsiveInputRange({ label, ...props }) {
  const isMobile = true
  const [hideDetails, setHideDetails] = React.useState(true);

  React.useEffect(() => {
    setHideDetails(isMobile);
  }, [isMobile]);

  const onFocus = () => setHideDetails(false);
  const onBlur = () => setHideDetails(true);

  return (
    <div
      className="mb-4"
      onFocus={isMobile ? onFocus : () => {}}
      onBlur={isMobile ? onBlur : () => {}}
    >
      {!isMobile && <Fragment>{label}</Fragment>}
      {isMobile ? (
        <InputRangeMobile {...props} hideDetails={hideDetails} />
      ) : (
        <InputRange {...props} />
      )}
    </div>
  );
}
