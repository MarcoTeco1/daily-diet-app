import styled, { css } from "styled-components/native";

type Variant = "green" | "red" | "neutral";

type Props = {
  variant: Variant;
  roundedBottom: boolean;
};

export const Container = styled.View<Props>`
  height: 112px;
  padding: 52px 20px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ roundedBottom, theme }) =>
    roundedBottom &&
    css`
     
      border-bottom-left-radius: ${theme.shaping.radius_lg}px;
      border-bottom-right-radius: ${theme.shaping.radius_lg}px;
    `}

  ${({ theme, variant }) =>
    variant === "green" &&
    css`
 
      background-color: ${theme.colors.status_positive};
    `}

  ${({ theme, variant }) =>
    variant === "red" &&
    css`

      background-color: ${theme.colors.status_negative};
    `}

  ${({ theme, variant }) =>
    variant === "neutral" &&
    css`
      /* Mudado de gray100 para ui_background (seu azul escuro) */
      background-color: ${theme.colors.ui_background};
    `}
`;

export const BackButton = styled.TouchableOpacity`
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
`;

export const BackText = styled.Text`
  /* Mudado de fontSize.lg para font.size_lg */
  font-size: ${({ theme }) => theme.font.size_lg}px;
  font-weight: 800;

  color: ${({ theme }) => theme.colors.high_contrast};
`;

export const Title = styled.Text`

  font-size: ${({ theme }) => theme.font.size_lg}px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.high_contrast};
`;

export const Spacer = styled.View`
  width: 34px;
  height: 34px;
`;