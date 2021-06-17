**Basic Example**
```jsx
import React from "react";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Typography } from "@material-ui/core";

import theme from "../../../theme";

const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
});
<ThemeProvider theme={theme}>
    <HeroSideImage imageSrc="/assets/images/photos/expo-gallery/gallery1.jpg">
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant="h4" style={{ color: isMd ? 'inherit' : 'white' }}>
                    Join the world's leading companies at TheFront 2020
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" style={{ color: isMd ? 'inherit' : 'white' }}>
                    Download our overview and a member of our specialist team will be in touch.
                </Typography>
            </Grid>
        </Grid>
    </HeroSideImage>
</ThemeProvider>
```

**Reverse Order Example**
```jsx
import React from "react";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Typography } from "@material-ui/core";

import theme from "../../../theme";

const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
});
<ThemeProvider theme={theme}>
    <HeroSideImage imageSrc="/assets/images/photos/expo-gallery/gallery2.jpg" reverse>
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant="h4" style={{ color: isMd ? 'inherit' : 'white' }}>
                    Join the world's leading companies at TheFront 2020
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" style={{ color: isMd ? 'inherit' : 'white' }}>
                    Download our overview and a member of our specialist team will be in touch.
                </Typography>
            </Grid>
        </Grid>
    </HeroSideImage>
</ThemeProvider>
```