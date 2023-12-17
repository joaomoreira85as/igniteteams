import { useState } from "react";
import { Header } from "@components/Header";
import { Container } from "./styles";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Galera do ignite"]);

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="joque com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
}
