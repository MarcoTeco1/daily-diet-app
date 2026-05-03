import styled, { css } from "styled-components/native";

type TopBoxProps = {
  isPositive: boolean;
};

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.ui_background};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ui_background};
`;

export const TopBox = styled.View<TopBoxProps>`
  align-items: center;
  padding: 56px 24px 32px;
  
  background-color: ${({ theme }) => theme.colors.ui_surface_white};
  border-bottom-left-radius: ${({ theme }) => theme.shaping.radius_lg}px;
  border-bottom-right-radius: ${({ theme }) => theme.shaping.radius_lg}px;
`;

export const Percentage = styled.Text`

  font-size: ${({ theme }) => theme.font.size_xl}px;
  font-weight: 900;
  color: #000000;
`;

export const Subtitle = styled.Text`

  font-size: ${({ theme }) => theme.font.size_md}px;
  color: #333333;
  margin-top: ${({ theme }) => theme.tokens.gap}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 28px 24px;
`;

export const SectionTitle = styled.Text`

  font-size: ${({ theme }) => theme.font.size_md}px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.high_contrast};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.tokens.section}px;
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.ui_surface_white};
  border: 1px solid ${({ theme }) => theme.colors.low_contrast};
  border-radius: ${({ theme }) => theme.shaping.radius_lg}px;
  padding: 22px 16px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const SmallCard = styled(Card)`
  flex: 1;
  margin-bottom: 0;
`;

export const CardGreen = styled(Card)`
  background-color: ${({ theme }) => theme.colors.status_positive};
  border-color: ${({ theme }) => theme.colors.status_positive};
`;

export const CardRed = styled(Card)`
  background-color: ${({ theme }) => theme.colors.status_negative};
  border-color: ${({ theme }) => theme.colors.status_negative};
`;

export const CardValue = styled.Text`

  font-size: ${({ theme }) => theme.font.size_lg}px;
  font-weight: 900;
  color: #000000;
`;

export const CardText = styled.Text`

  font-size: ${({ theme }) => theme.font.size_xs}px;
  text-align: center;
  color: #333333;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.tokens.gap}px;
`;