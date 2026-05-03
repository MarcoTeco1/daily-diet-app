import styled, { css } from "styled-components/native";

type OptionProps = {
  isActive: boolean;
  variant: "neutral" | "green" | "red";
};

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7); 
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.ui_surface_black};
  border-radius: ${({ theme }) => theme.shaping.radius_lg}px;
  padding: 28px;
  border: 1px solid ${({ theme }) => theme.colors.low_contrast};

  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 14px;
  elevation: 10;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
`;

export const Title = styled.Text`
  /* Mudado para font.size_lg e high_contrast (Branco) */
  font-size: 24px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.high_contrast};
`;

export const CloseButton = styled.TouchableOpacity`
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
`;

export const CloseText = styled.Text`
  font-size: 28px;
  /* Mudado para mid_contrast */
  color: ${({ theme }) => theme.colors.mid_contrast};
`;

export const SectionTitle = styled.Text`
  font-size: 12px;
  font-weight: 900;
  /* Mudado para mid_contrast */
  color: ${({ theme }) => theme.colors.mid_contrast};
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const OptionsContainer = styled.View`
  gap: 12px;
  margin-bottom: 28px;
`;

export const OptionButton = styled.TouchableOpacity<OptionProps>`
  height: 52px;
  border-radius: ${({ theme }) => theme.shaping.radius_lg}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.low_contrast};
  justify-content: center;
  padding: 0 16px;

  background-color: ${({ theme }) => theme.colors.ui_background};

  ${({ isActive, variant, theme }) =>
    isActive &&
    variant === "neutral" &&
    css`
      background-color: ${theme.colors.low_contrast};
      border-color: ${theme.colors.mid_contrast};
    `}

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

export const OptionText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.high_contrast};
`;

export const Footer = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const ClearButton = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
  border-radius: ${({ theme }) => theme.shaping.radius_sm}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.low_contrast};
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const ClearButtonText = styled.Text`
  font-size: ${({ theme }) => theme.font.size_md}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.high_contrast};
`;

export const ApplyButton = styled.TouchableOpacity`
  flex: 1;
  height: 50px;
  border-radius: ${({ theme }) => theme.shaping.radius_sm}px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.button_cream};
`;

export const ApplyButtonText = styled.Text`
  font-size: ${({ theme }) => theme.font.size_md}px;
  font-weight: 700;

  color: #000000;
`;