import { createGlobalStyle } from 'styled-components';
import { themes } from './styleTheme';

const GlobalStyles = createGlobalStyle`
body {
    ${themes.light};
}

@media (prefets-color-scheme: dark) {
    body {
        ${themes.dark}
    }
}

body[data-theme='light']{
    ${themes.light}
}

body[data-theme='dark']{
    ${themes.dark}
}
`;

export default GlobalStyles;
