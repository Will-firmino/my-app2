// Arquivo responsável por criar um contexto de navegação
import { NavigationContainer, StackRouter } from "@react-navigation/native";

import { StackRoutes } from "./StackRoutes";

export function Routes() {
    return(
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}