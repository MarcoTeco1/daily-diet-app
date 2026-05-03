import { useCallback, useState } from "react";
import { SectionList, ActivityIndicator, Image } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../@types/navigation";
import { Meal } from "../../types/meal";
import { mealGetAll } from "../../storage/meal/mealGetAll";
import { mealGetStatistics } from "../../storage/meal/mealGetStatistics";

import { MealCard } from "../../components/MealCard";
import { FilterModal } from "../../components/FilterModal";
import { lightTheme } from "../../theme";

import {
  Container,
  SummaryCard,
  SummaryValue,
  SummaryText,
  SummaryButton,
  SummaryButtonText,
  Content,
  HeaderRow,
  Title,
  ActionsRow,
  FilterOpenButton,
  FilterOpenButtonText,
  NewButton,
  NewButtonText,
  SectionTitle,
  EmptyContainer,
  EmptyTitle,
  EmptyText,
} from "./styles";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

type SectionData = {
  title: string;
  data: Meal[];
};

export function Home() {
  const navigation = useNavigation<NavigationProps>();

  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState<SectionData[]>([]);
  const [percentage, setPercentage] = useState(0);
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const [statusFilter, setStatusFilter] = useState<"all" | "onDiet" | "offDiet">("all");
  const [sortType, setSortType] = useState<"recent" | "oldest">("recent");

  // Função para carregar os dados do Storage
  async function loadData() {
    try {
      setLoading(true);
      const data = await mealGetAll();
      const stats = await mealGetStatistics();

      // Filtragem e Agrupamento
      const filtered = data.filter((meal) => {
        if (statusFilter === "all") return true;
        return statusFilter === "onDiet" ? meal.isOnDiet : !meal.isOnDiet;
      });

      const grouped = filtered.reduce((acc, meal) => {
        if (!acc[meal.date]) acc[meal.date] = [];
        acc[meal.date].push(meal);
        return acc;
      }, {} as Record<string, Meal[]>);

      const formatted = Object.keys(grouped).map((date) => ({
        title: date,
        data: grouped[date],
      }));

      setSections(formatted);
      setPercentage(stats.percentage);
    } finally {
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [statusFilter, sortType])
  );

  const isPositive = percentage >= 50;

  if (loading) {
    return (
      <Container style={{ justifyContent: 'center' }}>
        <ActivityIndicator color={lightTheme.colors.status_positive} size="large" />
      </Container>
    );
  }

  return (
    <Container>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            {/* Logo do App */}
            <HeaderRow style={{ marginTop: 40 }}>
               <Image source={require("../../../assets/logo.png")} style={{ width: 40, height: 40 }} />
            </HeaderRow>

            {/* Card de Porcentagem (Fundo Branco) */}
            <Content>
              <SummaryCard isPositive={isPositive}>
                <SummaryValue>{percentage.toFixed(2).replace(".", ",")}%</SummaryValue>
                <SummaryText>das refeições dentro da dieta</SummaryText>
                
                <SummaryButton onPress={() => navigation.navigate("statistics")}>
                  <SummaryButtonText>Ver estatísticas</SummaryButtonText>
                </SummaryButton>
              </SummaryCard>

              {/* Título Centralizado */}
              <Title>Refeições</Title>

              {/* Botões Creme */}
              <ActionsRow style={{ justifyContent: 'center', marginBottom: 32 }}>
                <FilterOpenButton onPress={() => setFilterModalVisible(true)}>
                  <FilterOpenButtonText>Filtrar</FilterOpenButtonText>
                </FilterOpenButton>

                <NewButton onPress={() => navigation.navigate("newMeal")}>
                  <NewButtonText>+ Nova refeição</NewButtonText>
                </NewButton>
              </ActionsRow>
            </Content>
          </>
        }
        renderSectionHeader={({ section }) => (
          <SectionTitle>{section.title}</SectionTitle>
        )}
        renderItem={({ item }) => (
          <MealCard 
            meal={item} 
            onPress={() => navigation.navigate("mealDetails", { mealId: item.id })} 
          />
        )}
        ListEmptyComponent={
          <EmptyContainer>
            <EmptyTitle>Nenhuma refeição encontrada</EmptyTitle>
            <EmptyText>Cadastre sua primeira refeição</EmptyText>
          </EmptyContainer>
        }
      />
<FilterModal
        visible={filterModalVisible}
        selected={statusFilter}
        selectedSort={sortType}
        onClose={() => setFilterModalVisible(false)}
        onSelect={setStatusFilter}
        onSelectSort={setSortType}
        onApply={() => {
          setFilterModalVisible(false);
          loadData(); 
        }}
        onClear={() => {
          setStatusFilter("all");
          setSortType("recent");
        }}
      />
    </Container>
  );
}