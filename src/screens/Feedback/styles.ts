import styled, { css } from "styled-components/native";

type TitleProps = {
  isOnDiet: boolean;
};

export const Container = styled.View`
  flex: 1;
  /* Atualizado para o seu azul escuro marinho */
  background-color: ${({ theme }) => theme.colors.ui_background};
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Title = styled.Text<TitleProps>`
  /* Atualizado para font.size_xl e adicionado px */
  font-size: ${({ theme }) => theme.font.size_xl}px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 12px;

  ${({ isOnDiet, theme }) =>
    isOnDiet
      ? css`
          color: ${theme.colors.status_positive};
        `
      : css`
          color: ${theme.colors.status_negative};
        `}
`;

export const Description = styled.Text`
  /* Atualizado para font.size_lg e mid_contrast (cinza claro) */
  font-size: ${({ theme }) => theme.font.size_lg}px;
  color: ${({ theme }) => theme.colors.mid_contrast};
  text-align: center;
  line-height: 32px;
  max-width: 300px;
`;

export const Bold = styled.Text`
  font-weight: 800;
  /* Texto em branco para destacar no fundo azul */
  color: ${({ theme }) => theme.colors.high_contrast};
`;

export const Button = styled.TouchableOpacity`
  min-height: 56px;
  width: 100%;
  /* Atualizado para a cor creme (branco amarelado) */
  background-color: ${({ theme }) => theme.colors.button_cream};
  border-radius: ${({ theme }) => theme.shaping.radius_sm}px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const ButtonText = styled.Text`
  /* Texto preto para contraste no botão creme */
  color: #000000;
  font-size: ${({ theme }) => theme.font.size_md}px;
  font-weight: 800;
`;