import { useState } from "react";
import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <HighLight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
