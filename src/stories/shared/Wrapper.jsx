import React from 'react';

export default function Wrapper({ ...props }) {
    const { maxWidth = '350px' } = props;
    return <div style={{ maxWidth: maxWidth }}>{props.children}</div>;
}
