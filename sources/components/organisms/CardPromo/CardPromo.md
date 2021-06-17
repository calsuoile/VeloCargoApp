**Basic Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors, Grid } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <CardPromo
                title="1000+"
                subtitle="Online Courses"
                description="Choose from over 1000+ online video courses."
                fontIconClass="fas fa-pen-nib"
                color={colors.pink}
            />
        </Grid>
        <Grid item xs={4}>
            <CardPromo
                title="800+"
                subtitle="Online Courses"
                description="Choose from over 1000+ online video courses."
                fontIconClass="fas fa-book-open"
                color={colors.purple}
            />
        </Grid>
        <Grid item xs={4}>
            <CardPromo
                title="100K+"
                subtitle="Online Courses"
                description="Choose from over 1000+ online video courses."
                fontIconClass="fas fa-camera-retro"
                color={colors.blue}
            />
        </Grid>
    </Grid>
</ThemeProvider>
```

**Outlined Effect**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors, Grid } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <CardPromo
                variant="outlined"
                title="1000+"
                subtitle="Online Courses"
                description="Choose from over 1000+ online video courses."
                fontIconClass="fas fa-pen-nib"
                color={colors.pink}
            />
        </Grid>
        <Grid item xs={4}>
            <CardPromo
                variant="outlined"
                title="800+"
                subtitle="Online Courses"
                description="Choose from over 1000+ online video courses."
                fontIconClass="fas fa-book-open"
                color={colors.purple}
            />
        </Grid>
        <Grid item xs={4}>
            <CardPromo
                variant="outlined"
                title="100K+"
                subtitle="Online Courses"
                description="Choose from over 1000+ online video courses."
                fontIconClass="fas fa-camera-retro"
                color={colors.blue}
            />
        </Grid>
    </Grid>
</ThemeProvider>
```

**Custom Shadow and LiftUp Effect**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors, Grid } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <CardPromo
                withShadow
                liftUp
                title="1000+"
                subtitle="Online Courses"
                description="Choose from over 1000+ online video courses."
                fontIconClass="fas fa-pen-nib"
                color={colors.pink}
            />
        </Grid>
        <Grid item xs={4}>
            <CardPromo
                withShadow
                liftUp
                title="800+"
                subtitle="Online Courses"
                description="Choose from over 1000+ online video courses."
                fontIconClass="fas fa-book-open"
                color={colors.purple}
            />
        </Grid>
        <Grid item xs={4}>
            <CardPromo
                withShadow
                liftUp
                title="100K+"
                subtitle="Online Courses"
                description="Choose from over 1000+ online video courses."
                fontIconClass="fas fa-camera-retro"
                color={colors.blue}
            />
        </Grid>
    </Grid>
</ThemeProvider>
```

**Center Aligned**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors, Grid } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <CardPromo
                withShadow
                liftUp
                align="center"
                title="1000+"
                subtitle="Online Courses"
                description="Choose from over 1000+ online video courses."
                fontIconClass="fas fa-pen-nib"
                color={colors.pink}
            />
        </Grid>
        <Grid item xs={4}>
            <CardPromo
                withShadow
                liftUp
                align="center"
                title="800+"
                subtitle="Online Courses"
                description="Choose from over 1000+ online video courses."
                fontIconClass="fas fa-book-open"
                color={colors.purple}
            />
        </Grid>
        <Grid item xs={4}>
            <CardPromo
                withShadow
                liftUp
                align="center"
                title="100K+"
                subtitle="Online Courses"
                description="Choose from over 1000+ online video courses."
                fontIconClass="fas fa-camera-retro"
                color={colors.blue}
            />
        </Grid>
    </Grid>
</ThemeProvider>
```