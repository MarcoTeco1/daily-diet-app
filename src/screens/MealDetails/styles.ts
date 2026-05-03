import styled, { css } from "styled-components/native";

type StatusProps = {
  isOnDiet: boolean;
};

export const Container = styled.View`
  flex: 1;
  /* Mudado para ui_background (Azul Escuro) */
  background-color: ${({ theme }) => theme.colors.ui_background};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ui_background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  margin-top: 8px;
`;

export const Title = styled.Text`
  /* Mudado para font.size_lg e high_contrast (Branco) */
  font-size: ${({ theme }) => theme.font.size_lg}px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.high_contrast};
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  /* Mudado para font.size_md e mid_contrast */
  font-size: ${({ theme }) => theme.font.size_md}px;
  color: ${({ theme }) => theme.colors.mid_contrast};
  line-height: 24px;
  margin-bottom: 28px;
`;

export const Label = styled.Text`
  /* Mudado para font.size_md e high_contrast */
  font-size: ${({ theme }) => theme.font.size_md}px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.high_contrast};
  margin-bottom: 8px;
`;

export const Info = styled.Text`
  font-size: ${({ theme }) => theme.font.size_md}px;
  color: ${({ theme }) => theme.colors.mid_contrast};
  margin-bottom: 28px;
`;

export const StatusBox = styled.View`
  flex-direction: row;
  align-items: center;
  /* Destaque preto para o box de status */
  background-color: ${({ theme }) => theme.colors.ui_surface_black};
  padding: 10px 16px;
  border-radius: ${({ theme }) => theme.shaping.circle}px;
  align-self: flex-start;
`;

export const StatusDot = styled.View<StatusProps>`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-right: 8px;

  ${({ isOnDiet, theme }) =>
    isOnDiet
      ? css`
          background-color: ${theme.colors.status_positive};
        `
      : css`
          background-color: ${theme.colors.status_negative};
        `}
`;

export const StatusText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mid_contrast};
`;

export const Actions = styled.View`
  margin-top: auto;
  gap: 12px;
`;

export const EditButton = styled.TouchableOpacity`
  height: 54px;
  /* Mudado para button_cream (Branco Amarelado) */
  background-color: ${({ theme }) => theme.colors.button_cream};
  border-radius: ${({ theme }) => theme.shaping.radius_lg}px;
  align-items: center;
  justify-content: center;
`;

export const EditButtonText = styled.Text`
  color: #000000;
  font-size: ${({ theme }) => theme.font.size_md}px;
  font-weight: 800;
`;

export const DeleteButton = styled.TouchableOpacity`
  height: 54px;
  border: 1px solid ${({ theme }) => theme.colors.low_contrast};
  border-radius: ${({ theme }) => theme.shaping.radius_lg}px;
  align-items: center;
  justify-content: center;
  /* Fundo preto para o botão de deletar se destacar no azul */
  background-color: ${({ theme }) => theme.colors.ui_surface_black};
`;

export const DeleteButtonText = styled.Text`
  font-size: ${({ theme }) => theme.font.size_md}px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.high_contrast};
`;

export const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const ModalContent = styled.View`
  width: 100%;
  /* Modal em destaque preto */
  background-color: ${({ theme }) => theme.colors.ui_surface_black};
  border-radius: ${({ theme }) => theme.shaping.radius_lg}px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.colors.low_contrast};
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.high_contrast};
  margin-bottom: 12px;
  text-align: center;
`;

export const ModalText = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.mid_contrast};
  line-height: 22px;
  margin-bottom: 24px;
  text-align: center;
`;

export const ModalButtons = styled.View`
  gap: 12px;
`;

export const ModalCancelButton = styled.TouchableOpacity`
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.low_contrast};
  border-radius: ${({ theme }) => theme.shaping.radius_sm}px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const ModalCancelText = styled.Text`
  font-size: ${({ theme }) => theme.font.size_md}px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.high_contrast};
`;

export const ModalDeleteButton = styled.TouchableOpacity`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.status_negative};
  border-radius: ${({ theme }) => theme.shaping.radius_sm}px;
  align-items: center;
  justify-content: center;
`;

export const ModalDeleteText = styled.Text`
  font-size: ${({ theme }) => theme.font.size_md}px;
  font-weight: 800;
  color: #FFFFFF;
`;