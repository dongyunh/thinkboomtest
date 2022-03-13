type ThemeVariables = {
  bg_page1: string;
  bg_page2: string;
  button_1: string;
  button_2: string;
  overlay: string;
  component_1: string;
  white: string;
  black: string;
  gray: string;
  red: string;
};

type Theme = 'light' | 'dark';
type VariableKey = keyof ThemeVariables;
type ThemedPalette = Record<VariableKey, string>;

const themeVariableSets: Record<Theme, ThemeVariables> = {
  light: {
    bg_page1: '#FFFFFF',
    bg_page2: '#F5F5F5',
    button_1: '#1B1818',
    button_2: '#F5F5F5',
    overlay: '#1B11818',
    component_1: '#1B1818',
    white: '#fffff',
    black: '#1B1818',
    gray: '#F5F5F5',
    red: '#F41414',
  },
  dark: {
    bg_page1: '#FFFFFF',
    bg_page2: '#F5F5F5',
    button_1: '#1B1818',
    button_2: '#F5F5F5',
    overlay: '#1B11818',
    component_1: '#1B1818',
    white: '#fffff',
    black: '#1B1818',
    gray: '#F5F5F5',
    red: '#F41414',
  },
};

const buildCssVariables = (variables: ThemeVariables) => {
  const keys = Object.keys(variables) as (keyof ThemeVariables)[];
  return keys.reduce(
    (acc, key) => acc.concat(`--${key.replace(/_/g, '-')} : ${variables[key]}; `, '\n'),
    '',
  );
};

export const themes = {
  light: buildCssVariables(themeVariableSets.light),
  dark: buildCssVariables(themeVariableSets.dark),
};

const cssVar = (name: string) => `var(--${name.replace(/_/g, '-')})`;

const variableKeys = Object.keys(themeVariableSets.light) as VariableKey[];

export const themedPalette: Record<VariableKey, string> = variableKeys.reduce((acc, current) => {
  acc[current] = cssVar(current);
  return acc;
}, {} as ThemedPalette);
console.log(themedPalette);
