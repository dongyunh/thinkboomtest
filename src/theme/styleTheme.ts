type ThemeVariables = {
  bg_page1: string;
  bg_page2: string;
  button_1: string;
  button_2: string;
  overlay: string;
  white: string;
  black: string;
  gray: string;
  red: string;
  component_1: string;
  component_2: string;
  input_1: string;
  input_2: string;
  input_3: string;
  main_text1: string;
  main_text2: string;
  hover_text1: string;
  hover_text2: string;
  sub_text1: string;
  sub_text2: string;
  border_1: string;
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
    component_2: '#FFFFFF',
    white: '#ffffff',
    black: '#1B1818',
    gray: '#F5F5F5',
    red: '#F41414',
    input_1: '#1B1818',
    input_2: '#F5F5F5',
    input_3: '#F41414',
    main_text1: '#1B1818',
    main_text2: '#FFFFFF',
    hover_text1: '#1B1818',
    hover_text2: '#FFFFFF',
    sub_text1: '#F41414',
    sub_text2: '#F5F5F5',
    border_1: '#1B1818',
  },
  dark: {
    bg_page1: '#FFFFFF',
    bg_page2: '#45474A',
    button_1: '#1B1818',
    button_2: '#F5F5F5',
    overlay: '#1B11818',
    component_1: '#1B1818',
    component_2: '#FFFFFF',
    white: '#fffff',
    black: '#1B1818',
    gray: '#F5F5F5',
    red: '#F41414',
    input_1: '#EEEEEE',
    input_2: '#F5F5F5',
    input_3: '#F41414',
    main_text1: '#EEEEEE',
    main_text2: '#1B1B1B',
    hover_text1: '#1B1818',
    hover_text2: '#FFFFFF',
    sub_text1: '#890B0B',
    sub_text2: '#86878C',
    border_1: '#1B1818',
  },
};

const buildCssVariables = (variables: ThemeVariables) => {
  const keys = Object.keys(variables) as (keyof ThemeVariables)[];
  return keys.reduce(
    (acc, key) => acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'),
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
