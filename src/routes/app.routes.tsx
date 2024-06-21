import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { Dashboard } from '../pages/Dashboard'
import { ListExpenses } from '../pages/ListExpenses'
import { SearchExpenses } from '../pages/SearchExpenses'

type AppRoutes = {
  dashboard: undefined;
  listExpenses: undefined;
  searchExpenses: undefined;
}

export type AppNavigationRoutesProp = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()
      
export function AppRoutes() {
  const theme = useTheme()

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarLabelPosition: 'beside-icon',
      tabBarActiveTintColor: theme.colors.secondary,
      tabBarInactiveTintColor: theme.colors.text,
      tabBarStyle: {
        height: 80
      }
    }}>
      <Screen
        name='dashboard'
        component={Dashboard}
        options={{
          tabBarLabel: 'Cadastro',
          tabBarIcon: (({ size, color }: { size: number; color: string }) =>
            <MaterialIcons
              name='add'
              size={size}
              color={color} />
          )
        }}
      />

      <Screen
        name='listExpenses'
        component={ListExpenses}
        options={{
          tabBarLabel: 'Listagem',
          tabBarIcon: (({ size, color }: { size: number; color: string }) =>
            <MaterialIcons
              name='list'
              size={size}
              color={color}
            />
          )
        }}
      />

      <Screen
        name='searchExpenses'
        component={SearchExpenses}
        options={{
          tabBarLabel: 'Pesquisa',
          tabBarIcon: (({ size, color }: { size: number; color: string }) =>
            <MaterialIcons
              name='list'
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}
