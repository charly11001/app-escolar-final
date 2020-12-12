import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Alumnos from "../screens/Alumno/Alumno";
import AlumnosAdd from "../screens/Alumno/AlumnoAdd";
import AlumnosDet from "../screens/Alumno/AlumnoDet";
import AlumnosGpo from "../screens/Alumno/AlumnoGpo";
import AlumnosList from "../screens/Alumno/AlumnoList";


const Stack = createStackNavigator();

export default function AlumnosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="alumnos"
        component={Alumnos}
        options={{ title: "Alumnos" }}
      />
      <Stack.Screen
        name="alumnos-add"
        component={AlumnosAdd}
        options={{ title: "Agregar Alumnos" }}
      />
      <Stack.Screen
        name="alumnos-det"
        component={AlumnosDet}
        options={{ title: "Alumnos detalle" }}
      />
      <Stack.Screen
        name="alumnos-gpo"
        component={AlumnosGpo}
        options={{ title: "Alumnos por Grupo" }}
      />
      <Stack.Screen
        name="alumnos-list"
        component={AlumnosList}
        options={{ title: "Lista de Alumnos" }}
      />
    </Stack.Navigator>
  );
}
