**Basic Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors, Grid } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <CardJob
                jobTitle="Senior Developer"
                badgeColor={colors.red[500]}
                badgeTitle="tech"
                jobLocation="Milan, Italy"
                jobType="Full Time"
                jobDate="2 days ago"
                companyName="Slack"
                companyLogo="/assets/images/logos/slack.svg"
            />
        </Grid>
        <Grid item xs={4}>
            <CardJob
                jobTitle="Web designer internship"
                badgeColor={colors.blue[500]}
                badgeTitle="web design"
                jobLocation="Milan, Italy"
                jobType="Full Time"
                jobDate="2 days ago"
                companyName="Slack"
                companyLogo="/assets/images/logos/slack.svg"
            />
        </Grid>
        <Grid item xs={4}>
            <CardJob
                jobTitle="UI/UX Designer"
                badgeColor={colors.green[500]}
                badgeTitle="web design"
                jobLocation="Milan, Italy"
                jobType="Full Time"
                jobDate="2 days ago"
                companyName="Slack"
                companyLogo="/assets/images/logos/slack.svg"
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
            <CardJob
                variant="outlined"
                jobTitle="Senior Developer"
                badgeColor={colors.red[500]}
                badgeTitle="tech"
                jobLocation="Milan, Italy"
                jobType="Full Time"
                jobDate="2 days ago"
                companyName="Slack"
                companyLogo="/assets/images/logos/slack.svg"
            />
        </Grid>
        <Grid item xs={4}>
            <CardJob
                variant="outlined"
                jobTitle="Web designer internship"
                badgeColor={colors.blue[500]}
                badgeTitle="web design"
                jobLocation="Milan, Italy"
                jobType="Full Time"
                jobDate="2 days ago"
                companyName="Slack"
                companyLogo="/assets/images/logos/slack.svg"
            />
        </Grid>
        <Grid item xs={4}>
            <CardJob
                variant="outlined"
                jobTitle="UI/UX Designer"
                badgeColor={colors.green[500]}
                badgeTitle="web design"
                jobLocation="Milan, Italy"
                jobType="Full Time"
                jobDate="2 days ago"
                companyName="Slack"
                companyLogo="/assets/images/logos/slack.svg"
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
            <CardJob
                withShadow
                liftUp
                jobTitle="Senior Developer"
                badgeColor={colors.red[500]}
                badgeTitle="tech"
                jobLocation="Milan, Italy"
                jobType="Full Time"
                jobDate="2 days ago"
                companyName="Slack"
                companyLogo="/assets/images/logos/slack.svg"
            />
        </Grid>
        <Grid item xs={4}>
            <CardJob
                withShadow
                liftUp
                jobTitle="Web designer internship"
                badgeColor={colors.blue[500]}
                badgeTitle="web design"
                jobLocation="Milan, Italy"
                jobType="Full Time"
                jobDate="2 days ago"
                companyName="Slack"
                companyLogo="/assets/images/logos/slack.svg"
            />
        </Grid>
        <Grid item xs={4}>
            <CardJob
                withShadow
                liftUp
                jobTitle="UI/UX Designer"
                badgeColor={colors.green[500]}
                badgeTitle="web design"
                jobLocation="Milan, Italy"
                jobType="Full Time"
                jobDate="2 days ago"
                companyName="Slack"
                companyLogo="/assets/images/logos/slack.svg"
            />
        </Grid>
    </Grid>
</ThemeProvider>
```