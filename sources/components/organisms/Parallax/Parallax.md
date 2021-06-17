```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

import theme from "../../../theme";

import { SectionHeader } from "components/molecules";
import { CardBase } from "components/organisms";

<ThemeProvider theme={theme}>
        <Parallax backgroundImage="/assets/images/photos/blog/cover2.jpg">
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#007b3d3d' }}>
                <CardBase withShadow style={{ width: 500, height: 'auto', background: 'transparent' }}>
                    <SectionHeader
                        title={
                            <span style={{ color: 'white' }}>
                                Use flexible components.<br />
                                <Typography component="span" variant="inherit" color="primary">
                                to build an app quickly.
                                </Typography>
                            </span>
                        }
                        subtitle={<span style={{ color: 'white' }}>
                            TheFront styles and extends Material UI components, but also included brand new landing page focused components.
                        </span>}
                    />
                </CardBase>
            </div>
        </Parallax>
</ThemeProvider>