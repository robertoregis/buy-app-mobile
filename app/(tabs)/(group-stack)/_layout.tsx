import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

export default function GroupStackLayout() {
  return (
    <>
      <StatusBar 
        style="light" // Conteúdo branco (texto, bateria)
      />
      <Stack
        screenOptions={{
          // 1. Remove o cabeçalho padrão do Stack para todas as telas.
          headerShown: false,
          // Configuração de animação nativa
          animation: 'slide_from_right', 
        }}
      >
        {/* 1. Lista de Grupos (Rota: /) */}
        <Stack.Screen 
          name="index" 
          options={{ title: 'Meus Grupos' }} 
        />

        {/* 2. Detalhe do Grupo (Rota: /group/[group-id]/index) */}
        <Stack.Screen 
          name="group/[group-id]/index" 
          options={{ title: 'Detalhes do Grupo' }} 
        />
        
        {/* 3. Lista de Compras (Rota: /group/[group-id]/purchases/index) */}
        <Stack.Screen 
          name="group/[group-id]/purchases/index" 
          options={{ title: 'Lista de Compras' }} 
        />
        
        {/* 4. Detalhe da Compra (Rota: /group/[group-id]/purchases/[purchase-id]/index) */}
        <Stack.Screen 
          name="group/[group-id]/purchases/[purchase-id]/index" 
          options={{ title: 'Detalhe da Compra' }} 
        />

        {/* 5. Lista de Participantes (Rota: /group/[group-id]/participants/index) */}
        <Stack.Screen 
          name="group/[group-id]/participants/index" 
          options={{ title: 'Participantes' }} 
        />
        
        {/* 6. Detalhe do Participante (Rota: /group/[group-id]/participants/[participant-id]/index) */}
        <Stack.Screen 
          name="group/[group-id]/participants/[participant-id]/index" 
          options={{ title: 'Detalhe do Participante' }} 
        />
        
        {/* As rotas execute.tsx e planned.tsx são descobertas automaticamente
          como sub-rotas do detalhe da compra.
        */}
      </Stack>
    </>
  );
}