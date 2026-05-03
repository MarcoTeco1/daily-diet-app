import styled, { css } from "styled-components/native";

type SummaryCardProps = {
  isPositive: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.ui_background};
`;

// "Refeições" centralizado e branco
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font.size_lg}px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.high_contrast};
  text-align: center;
  margin: 30px 0 20px;
`;

export const Content = styled.View`
  padding: 0 ${({ theme }) => theme.tokens.padding}px;
`;

export const SummaryCard = styled.View<SummaryCardProps>`
  width: 100%;
  padding: 40px 24px;
  background-color: ${({ theme }) => theme.colors.ui_surface_white};
  border-radius: ${({ theme }) => theme.shaping.radius_lg}px;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const SummaryValue = styled.Text`
  font-size: ${({ theme }) => theme.font.size_xl}px;
  font-weight: 900;
  color: #000000; 
`;

export const SummaryText = styled.Text`
  font-size: ${({ theme }) => theme.font.size_md}px;
  color: #333333;
  text-align: center;
`;

// Botões branco amarelados (Creme)
export const FilterOpenButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.button_cream};
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.shaping.radius_sm}px;
`;

export const FilterOpenButtonText = styled.Text`
  color: #000000;
  font-weight: 700;
`;

export const NewButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.button_cream};
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.shaping.radius_sm}px;
`;

export const NewButtonText = styled.Text`
  color: #000000;
  font-weight: 800;
`;

export const EmptyContainer = styled.View`
  margin: 20px 24px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.ui_surface_black};
  border-radius: ${({ theme }) => theme.shaping.radius_lg}px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.low_contrast};
`;

export const EmptyTitle = styled.Text`
  font-size: ${({ theme }) => theme.font.size_md}px;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 8px;
  text-align: center;
`;

export const EmptyText = styled.Text`
  font-size: ${({ theme }) => theme.font.size_xs}px;
  color: #FFFFFF;
  text-align: center;
`;

export const HeaderRow = styled.View` flex-direction: row; align-items: center; justify-content: center; `;
export const ActionsRow = styled.View` flex-direction: row; gap: 10px; margin-top: 10px; `;
export const SummaryButton = styled.TouchableOpacity` margin-top: 15px; border: 1px solid #000; padding: 8px; border-radius: 8px; `;
export const SummaryButtonText = styled.Text` font-weight: bold; color: #000; `;
export const SectionTitle = styled.Text` color: white; font-weight: bold; margin: 24px 24px 10px; font-size: 18px; `;