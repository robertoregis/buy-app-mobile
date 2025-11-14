// app/(tabs)/(group-stack)/index.tsx

import CircleMagic from '@/components/CircleMagic';
import CustomHeader from '@/components/CustomHeader';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Você pode definir a interface do seu objeto 'Grupo' aqui
interface Group {
  id: string;
  name: string;
}

// Dados de exemplo (mock) para a lista
const mockGroups: Group[] = [
  { id: '1', name: 'Compras da Casa' },
  { id: '2', name: 'Churrasco Fim de Semana' },
  { id: '3', name: 'Viagem Ano Novo' },
];

export default function GroupListScreen() {

  // Função para navegar para o detalhe do grupo
  const openGroup = (groupId: string) => {
    // Navega para a rota dinâmica [group-id]
    router.push(`/group/${groupId}`);
  };
  const loadMoreGroups = () => {}

  const renderLoadingIndicator = () => {
    return <View><Text>Load</Text></View>
  }

  const cardGroup = (item: any) => {
    return <TouchableOpacity style={styles.cardGroup} activeOpacity={0.8}>
      <View style={styles.cardGroupTop}>
        <Text style={{ fontSize: 17, fontWeight: '600' }}>Compra de novembro</Text>
        <Text style={{ fontSize: 11, color: '#7a7878ff' }}>10/10/2025 - 20:24:21</Text>
      </View>
      <View style={styles.cardGroupBottom}>
        <Text style={{fontSize: 12.5, marginBottom: 2 }}>Compras feitas para todos da família fazer</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="account-group" size={13} color="#7a7878ff" />
          <Text style={{ fontSize: 12, fontWeight: '500', marginLeft: 3, color: '#7a7878ff' }}>2 membros</Text>
        </View>
      </View>
      <CircleMagic type='group' />
    </TouchableOpacity>
  }

  const mockUserName = "Seu Nome Aqui"; 
  const mockUserPhoto = "https://firebasestorage.googleapis.com/v0/b/buy-app-8c9ec.firebasestorage.app/o/avatar.png?alt=media&token=ae2cef95-b633-491a-9394-4723e541e8e2";

  return (
    // 2. Envolva o conteúdo da sua tela com ele
    <SafeAreaView style={styles.safeContainer} edges={['top', 'left', 'right']}>
      {/* 1. SEU CABEÇALHO CUSTOMIZADO */}
      <CustomHeader 
        userName={mockUserName} 
        userPhotoUrl={mockUserPhoto} 
      />
      <View style={styles.container}>
        <View style={styles.headerContent}>
            <Text style={styles.title}>Grupo</Text>
            {/* Adicione um Subtítulo aqui, se necessário */}
            <Text style={styles.subtitle}>Gerencie suas compras com amigos.</Text> 
        </View>
        
        <FlatList
          data={mockGroups}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            cardGroup(item)
          )}
          // --- Lógica de Paginação ---
          onEndReached={loadMoreGroups} // Função que você criará para carregar a próxima página
          onEndReachedThreshold={0.5} // Carrega quando o usuário chega na metade do final da lista
          ListFooterComponent={
            <Ionicons name="ellipsis-horizontal" size={25} color="#ffffffa1" style={{textAlign: 'center'}} />
          } // Componente (ex: Spinner) mostrado no final da lista
        />
        
        {/* Botão flutuante, etc. */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1, // Faz o SafeAreaView ocupar a tela inteira
    backgroundColor: '#3812e0ff', // Defina a cor de fundo aqui
  },
  container: {
    flex: 1,
    padding: 16, // Padding interno do seu conteúdo
    backgroundColor: '#3812e0ff',
  },
  headerContent: {
    //backgroundColor: '#fff'
    marginBottom: 15
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#fff'
  },
  subtitle: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center'
  },
  cardGroup: {
    flexDirection: 'column',
    padding: 4,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 4
  },
  cardGroupTop: {
    marginBottom: 3
  },
  cardGroupBottom: {
  }
});