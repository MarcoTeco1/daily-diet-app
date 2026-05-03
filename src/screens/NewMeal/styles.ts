import styled, { css } from "styled-components/native";

type DietButtonProps = {
  isActive: boolean;
  variant: "green" | "red";
};

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.ui_background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  margin-top: 8px;
  justify-content: space-between;
`;

export const Form = styled.View`
  gap: 20px;
`;

export const Field = styled.View`
  gap: 6px;
`;

export const FlexField = styled(Field)`
  flex: 1;
`;

export const Label = styled.Text`
  /* Mudado para font.size_md e high_contrast (Branco) */
  font-size: ${({ theme }) => theme.font.size_md}px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.high_contrast};
`;

export const Input = styled.TextInput`
  height: 52px;
  border-width: 1px;
  /* Mudado para low_contrast e shaping.radius_lg */
  border-color: ${({ theme }) => theme.colors.low_contrast};
  border-radius: ${({ theme }) => theme.shaping.radius_lg}px;
  padding: 0 16px;
  /* Fundo branco para o input se destacar no azul escuro */
  background-color: ${({ theme }) => theme.colors.ui_surface_white};
  color: #000000;
  font-size: ${({ theme }) => theme.font.size_md}px;
`;

export const TextArea = styled(Input)`
  min-height: 110px;
  height: 110px;
  padding: 14px 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const DietButton = styled.TouchableOpacity<DietButtonProps>`
  flex: 1;
  height: 52px;
  border-radius: ${({ theme }) => theme.shaping.radius_lg}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.low_contrast};
  align-items: center;
  justify-content: center;
  /* Fundo creme para os botões de dieta não selecionados */
  background-color: ${({ theme }) => theme.colors.button_cream};

  ${({ isActive, variant, theme }) =>
    isActive &&
    variant === "green" &&
    css`
      background-color: ${theme.colors.status_positive};
      border-color: ${theme.colors.status_positive};
    `}

  ${({ isActive, variant, theme }) =>
    isActive &&
    variant === "red" &&
    css`
      background-color: ${theme.colors.status_negative};
      border-color: ${theme.colors.status_negative};
    `}
`;

export const DietText = styled.Text`
  font-size: ${({ theme }) => theme.font.size_md}px;
  font-weight: 800;
 
  color: #000000;
`;

export const SaveButton = styled.TouchableOpacity`
  height: 54px;

  background-color: ${({ theme }) => theme.colors.button_cream};
  border-radius: ${({ theme }) => theme.shaping.radius_lg}px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const SaveButtonText = styled.Text`

  color: #000000;
  font-size: ${({ theme }) => theme.font.size_md}px;
  font-weight: 800;
`;