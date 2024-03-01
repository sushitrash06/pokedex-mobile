import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./app/Page/Home";
import ButtonComponent from "./app/Component/Atoms/Button";
import { MaterialIcons } from "@expo/vector-icons";
import FavoritePage from "./app/Page/Favorite";
import { QueryClient, QueryClientProvider } from "react-query";
import DetailPage from "./app/Page/Detail";
import { MMKV } from "react-native-mmkv";

interface AppNavigatorParams {
  initialRouteName: string;
  [key: string]: any;
}

const Stack = createNativeStackNavigator<AppNavigatorParams>();

const queryClient = new QueryClient();

export default function App() {
  return (
<QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={() => ({
              headerShown: false,
            })}
          />

          <Stack.Screen
            name="Favorite"
            component={FavoritePage}
            options={({ navigation }) => ({
              headerTitle: "Favorite",
              headerTitleAlign: "center",
              headerLeft: () => (
                <ButtonComponent
                  type="transparent"
                  Icon={
                    <MaterialIcons
                      name="keyboard-arrow-left"
                      size={24}
                      style={{
                        marginTop: -15,
                        color: "#c5d4c9"
                      }}
                    />
                  }
                  onPress={() => navigation.goBack()}
                />
              ),
            })}
          />
          <Stack.Screen
            name="DetailPage"    
            component={DetailPage}
            options={({ navigation }) => ({
              headerTransparent: true,
              headerTitle: "Pokemon",
              headerTintColor:"#474640",
              headerTitleAlign: "center",
              headerLeft: () => (
                <ButtonComponent
                  type="transparent"
                  Icon={
                    <MaterialIcons
                      name="keyboard-arrow-left"
                      size={24}
                      style={{
                        marginTop: -15,
                        color: "#474640"
                      }}
                    />
                  }
                  onPress={() => navigation.goBack()}
                />
              ),
            headerRight: () => (
              <ButtonComponent
                type="transparent"
                Icon={
                  <MaterialIcons
                    name="favorite-outline"
                    size={24}
                    style={{
                      marginTop: -15,
                      color: "#474640"
                    }}
                  />
                }
                onPress={() => navigation.navigate("Favorite")}
              />
            ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

