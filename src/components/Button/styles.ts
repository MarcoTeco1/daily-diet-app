import styled, { css } from "styled-components/native";

type Variant = "primary" | "secondary" | "outline" | "danger";

type Props = {
  variant: Variant;
};

export const Container = styled.TouchableOpacity<Props>`
  height: 54px;
  /* Mudado de theme.radius.lg para theme.shaping.radius_lg */
  border-radius: ${({ theme }) => theme.shaping.radius_lg}px;
  align-items: center;
  justify-content: center;
  padding: 0 18px;

  ${({ theme, variant }) =>
    variant === "primary" &&
    css`
      /* Mudado de button para button_cream (seu novo branco amarelado) */
      background-color: ${theme.colors.button_cream};
    `}

  ${({ theme, variant }) =>
    variant === "secondary" &&
    css`
      /* Mudado de white para ui_surface_white e border para low_contrast */
      background-color: ${theme.colors.ui_surface_white};
      border: 1px solid ${theme.colors.low_contrast};
    `}

  ${({ theme, variant }) =>
    variant === "outline" &&
    css`
      background-color: transparent;
      border: 1px solid ${theme.colors.low_contrast};
    `}

  ${({ theme, variant }) =>
    variant === "danger" &&
    css`
      /* Mudado de redDark para status_negative */
      background-color: ${theme.colors.status_negative};
    `}
`;

export const Title = styled.Text<Props>`
  /* Mudado de theme.fontSize.lg para theme.font.size_md */
  font-size: ${({ theme }) => theme.font.size_md}px;
  font-weight: 800;

  ${({ theme, variant }) =>
    variant === "primary" &&
    css`
      /* Texto preto para contrastar com o botão creme */
      color: #000000;
    `}

  ${({ theme, variant }) =>
    variant === "secondary" &&
    css`
      color: #000000;
    `}
  ${({ theme, variant }) =>
    variant === "outline" &&
    css`
      /* Texto branco para aparecer no fundo azul do app */
      color: ${theme.colors.high_contrast};
    `}
  ${({ theme, variant }) =>
    variant === "danger" &&
    css`
      color: #FFFFFF;
    `}
`;