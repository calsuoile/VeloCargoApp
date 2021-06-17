**Basic Example**
```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import theme from "../../../theme";
const browserHistory = createBrowserHistory();

const items = [{
    id: 'faq-1',
    title: 'Flexible access to facilities.',
    subtitle: 'Our new key fobs make it so easy!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
    link: 'Check it out',
}, {
    id: 'faq-2',
    title: 'Snacks, drinks, coffee, and more.',
    subtitle: 'Our new key fobs make it so easy!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
    link: 'Check it out',
}, {
    id: 'faq-3',
    title: 'On site tech support.',
    subtitle: 'Our new key fobs make it so easy!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
    link: 'Check it out',
}, {
    id: 'faq-4',
    title: 'Flexible access to facilities.',
    subtitle: 'Our new key fobs make it so easy!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
    link: 'Check it out',
}, {
    id: 'faq-5',
    title: 'Snacks, drinks, coffee, and more.',
    subtitle: 'Our new key fobs make it so easy!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
    link: 'Check it out',
}, {
    id: 'faq-6',
    title: 'On site tech support.',
    subtitle: 'Our new key fobs make it so easy!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur. Reprehenderit magnam necessitatibus vel culpa provident quas nesciunt sunt aut cupiditate fugiat!',
    link: 'Check it out',
}];

<ThemeProvider theme={theme}>
    <Router history={browserHistory}>
        <Accordion items={items} />
    </Router>
</ThemeProvider>
```