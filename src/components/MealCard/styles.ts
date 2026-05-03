import styled, { css } from "styled-components/native";

type StatusProps = {
  isOnDiet: boolean;
};

export const Container = styled.TouchableOpacity`
  width: 100%;
  min-height: 72px;
 
  border: 1px solid ${({ theme }) => theme.colors.low_contrast};

  border-radius: ${({ theme }) => theme.shaping.radius_lg}px;
  flex-direction: row;
  align-items: center;
  padding: 0 18px;
  margin-bottom: 12px;

  background-color: ${({ theme }) => theme.colors.ui_surface_white};

  shadow-color: #000;
  shadow-opacity: 0.03;
  shadow-radius: 6px;
  elevation: 1;
`;

export const Time = styled.Text`
  font-size: 13px;
  font-weight: 900;

  color: #000000;
  margin-right: 12px;
`;

export const Divider = styled.View`
  width: 1px;
  height: 18px;

  background-color: ${({ theme }) => theme.colors.low_contrast};
  margin-right: 12px;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 15px;
 
  color: #333333;
`;

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  margin-left: 12px;

  ${({ isOnDiet, theme }) =>
    isOnDiet
      ? css`
       
          background-color: ${theme.colors.status_positive};
        `
      : css`
     
          background-color: ${theme.colors.status_negative};
        `}
`;