import { Tabs } from 'expo-router';

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: 'Inicio' }}
        />
        <Tabs.Screen
        name="sumadora"
        options={{ title: 'Sumadora' }}
        />
        <Tabs.Screen
        name="tabla"
        options={{ title: 'Tabla de Multiplicar' }}
        />
        <Tabs.Screen
        name="traductor"
        options={{ title: 'Traductor' }}
        />
        <Tabs.Screen
        name="experiencia"
        options={{ title: 'Experiencia' }}
        />
    </Tabs>
  )
}

export default TabLayout
