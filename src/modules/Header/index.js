import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";

import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";

export default class Header extends Component {
    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string
    }

    render() {
        const {
            logged,
            children,
            className,
            bottomMenuVariant,
            logo,
            ...rest
        } = this.props

        return (
            <div className={className}>
                {bottomMenuVariant ? (
                    <Fragment>
                        <AppBar position='fixed' color='transparent' style={{bottom: 0, top: 'auto'}}>
                            {children}
                        </AppBar>
                        <Paper square elevation={3}
                               style={{
                                   height: '80px',
                                   display: 'flex',
                                   justifyContent: 'center',
                                   alignItems: 'center',
                                   marginBottom: '30px'
                               }}
                        >

                            {logo}
                        </Paper>
                    </Fragment>
                ) : (
                    <Fragment>
                        <AppBar position='fixed' color='transparent'
                                style={{
                                    top: 0,
                                    height: '80px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                        >
                            <Container>
                                <Toolbar>
                                    {logo}
                                    {children}
                                </Toolbar>
                            </Container>
                        </AppBar>
                        <div style={{paddingTop: '130px'}}/>
                    </Fragment>
                )}

            </div>
        )
    }
}
