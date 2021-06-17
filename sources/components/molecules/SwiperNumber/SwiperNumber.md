**Basic Example**
```jsx

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import 'swiper/css/swiper.min.css';

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <SwiperNumber
        items={[{
            title: 'attendees',
            number: '70,000+'
        }, {
            title: 'countries',
            number: '160+'
        }, {
            title: 'speakers',
            number: '1,200+'
        }, {
            title: 'journalists',
            number: '2,500+'
        }, {
            title: 'CEO\'s',
            number: '11,000+'
        }, {
            title: 'fimale',
            number: '46%'
        }, {
            title: 'investors',
            number: '1,200+'
        }]}
    />
</ThemeProvider>