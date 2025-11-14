// Exemplo: components/CustomHeader.tsx

import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

// Você pode passar a foto e o nome do usuário como props
interface CustomHeaderProps {
  userName: string;
  userPhotoUrl: string;
}

export default function CustomHeader({ userName, userPhotoUrl }: CustomHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      {/* 1. Nome do Usuário */}
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      
      {/* 2. Foto do Usuário (Avatar) */}
      <Image 
        source={{ uri: userPhotoUrl }} 
        style={styles.avatar}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12, // Um pouco de padding vertical
    backgroundColor: '#3812e0ff', // Cor de fundo suave (para "ofuscar" o branco)
    borderBottomWidth: 1,
    borderBottomColor: '#8e99ffff',
    // Adicione padding extra no topo se não estiver usando SafeAreaView aqui
  },
  greeting: {
    fontSize: 14,
    color: '#fff7f7ff',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f8f7f7ff',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20, // Circular
  },
});