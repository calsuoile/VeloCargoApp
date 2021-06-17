**Basic Example**
```jsx

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import 'swiper/css/swiper.min.css';

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <SwiperImage
        style={{
            width: 500,
            height: 300,
        }}
        items={[{
            src: '/assets/images/photos/coworking/place2.jpg',
            srcset: '/assets/images/photos/coworking/place2.jpg 2x',
            alt: '...'
        }, {
            src: '/assets/images/photos/coworking/place3.jpg',
            srcset: '/assets/images/photos/coworking/place3.jpg 2x',
            alt: '...'
        }]}
    />
</ThemeProvider>