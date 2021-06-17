```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <IconAlternate shape="circle" size="small" fontIconClass="far fa-address-book" color={colors.purple} />
        <IconAlternate fontIconClass="fas fa-users" color={colors.pink} />
        <IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.blue} />
        <IconAlternate fontIconClass="fas fa-phone-alt" size="large" color={colors.green} />
    </div>
</ThemeProvider>