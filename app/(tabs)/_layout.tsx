import { Tabs } from 'expo-router';
import React from 'react';

// Assumindo que estes imports funcionam no seu projeto:
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffffff',
        tabBarInactiveTintColor: '#c4bebeff',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#3812e0ff', // <-- Cor de fundo da Tab Bar
          borderTopColor: '#8e99ffff',  // Opcional: Para mudar a cor da linha superior
        },
      }}
    >

      {/* 1. ABA GRUPO / LISTA PRINCIPAL (index) */}
      <Tabs.Screen
        name="(group-stack)"
        options={{
          title: 'Grupo',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            // Ícone Sugerido: 'basket' ou 'cart' para compras/grupo
            <IconSymbol size={28} name="house.fill" color={color} /> 
          ),
        }}
      />

      {/* 2. ABA AMIGOS (friends) */}
      <Tabs.Screen
        name="friends" // Renomeamos 'explore' para 'friends'
        options={{
          title: 'Amigos',
          tabBarIcon: ({ color }) => (
            // Ícone Sugerido: 'people' para amigos/pedidos
            <IconSymbol size={28} name="house.fill" color={color} /> 
          ),
        }}
      />
      
      {/* 3. ABA CONFIGURAÇÕES (settings) */}
      <Tabs.Screen
        name="settings" // Nova rota
        options={{
          title: 'Configuração',
          tabBarIcon: ({ color }) => (
            // Ícone Sugerido: 'settings'
            <IconSymbol size={28} name="house.fill" color={color} /> 
          ),
        }}
      />
    </Tabs>
  );
}