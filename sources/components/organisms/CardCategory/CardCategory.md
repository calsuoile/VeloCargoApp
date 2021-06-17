**Basic Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors, Grid } from "@material-ui/core";
import { IconAlternate } from '../../molecules';

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <CardCategory
                title="Web Design"
                icon={<IconAlternate fontIconClass="fas fa-pen-nib" size="medium" color={colors.pink} />}
            />
        </Grid>
        <Grid item xs={4}>
            <CardCategory
                title="Business Analytics"
                icon={<IconAlternate fontIconClass="fas fa-book-open" size="medium" color={colors.purple} />}
            />
        </Grid>
        <Grid item xs={4}>
            <CardCategory
                title="Photography"
                icon={<IconAlternate fontIconClass="fas fa-camera-retro" size="medium" color={colors.blue} />}
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
import { IconAlternate } from '../../molecules';

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <CardCategory
                variant="outlined"
                title="Web Design"
                icon={<IconAlternate fontIconClass="fas fa-pen-nib" size="medium" color={colors.pink} />}
            />
        </Grid>
        <Grid item xs={4}>
            <CardCategory
                variant="outlined"
                title="Business Analytics"
                icon={<IconAlternate fontIconClass="fas fa-book-open" size="medium" color={colors.purple} />}
            />
        </Grid>
        <Grid item xs={4}>
            <CardCategory
                variant="outlined"
                title="Photography"
                icon={<IconAlternate fontIconClass="fas fa-camera-retro" size="medium" color={colors.blue} />}
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
import { IconAlternate } from '../../molecules';

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <CardCategory
                withShadow
                liftUp
                title="Web Design"
                icon={<IconAlternate fontIconClass="fas fa-pen-nib" size="medium" color={colors.pink} />}
            />
        </Grid>
        <Grid item xs={4}>
            <CardCategory
                withShadow
                liftUp
                title="Business Analytics"
                icon={<IconAlternate fontIconClass="fas fa-book-open" size="medium" color={colors.purple} />}
            />
        </Grid>
        <Grid item xs={4}>
            <CardCategory
                withShadow
                liftUp
                title="Photography"
                icon={<IconAlternate fontIconClass="fas fa-camera-retro" size="medium" color={colors.blue} />}
            />
        </Grid>
    </Grid>
</ThemeProvider>
```

**Left Aligned**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors, Grid } from "@material-ui/core";
import { IconAlternate } from '../../molecules';

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <CardCategory
                withShadow
                liftUp
                align="left"
                title="Web Design"
                icon={<IconAlternate fontIconClass="fas fa-pen-nib" size="medium" color={colors.pink} />}
            />
        </Grid>
        <Grid item xs={4}>
            <CardCategory
                withShadow
                liftUp
                align="left"
                title="Business Analytics"
                icon={<IconAlternate fontIconClass="fas fa-book-open" size="medium" color={colors.purple} />}
            />
        </Grid>
        <Grid item xs={4}>
            <CardCategory
                withShadow
                liftUp
                align="left"
                title="Photography"
                icon={<IconAlternate fontIconClass="fas fa-camera-retro" size="medium" color={colors.blue} />}
            />
        </Grid>
    </Grid>
</ThemeProvider>
```