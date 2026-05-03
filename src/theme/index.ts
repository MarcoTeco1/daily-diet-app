import { colors } from "./colors"

export const lightTheme = {
  colors,
  shaping: {
    radius_sm: 8,
    radius_lg: 24,
    circle: 999,
  },
  tokens: {
    padding: 24,
    section: 32,
    gap: 12,
  },
  font: {
    size_xs: 12,
    size_md: 16,
    size_lg: 24,
    size_xl: 48,
  },
} as const

export const theme = lightTheme;