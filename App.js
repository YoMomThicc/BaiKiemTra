import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import images from './assets';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.username}>Chris Doe</Text>
      </View>
      <Image source={images.profile} style={styles.profileImage} />
    </View>
    <Text style={styles.subtitle}>Your Insights</Text>
    <View style={styles.insightsContainer}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Scan')}>
          <Image source={images.scan} style={styles.iconImage} />
          <Text>Scan new</Text>
          <Text style={styles.cardText}>Scanned 483</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={images.counterfeits} style={styles.iconImage} />
          <Text>Counterfeits</Text>
          <Text style={styles.cardText}>Counterfeit 32</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}>
          <Image source={images.success} style={styles.iconImage} />
          <Text>Success</Text>
          <Text style={styles.cardText}>Checkouts 8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image source={images.directory} style={styles.iconImage} />
          <Text>Directory</Text>
          <Text style={styles.cardText}>History 26</Text>
        </TouchableOpacity>
      </View>
    </View>
    <Text style={styles.exploreMore}>Explore More</Text>
    <View style={styles.extraOptions}>
      <TouchableOpacity style={styles.card}><Text>Option 1</Text></TouchableOpacity>
      <TouchableOpacity style={styles.card}><Text>Option 2</Text></TouchableOpacity>
      <TouchableOpacity style={styles.card}><Text>Option 3</Text></TouchableOpacity>
      <TouchableOpacity style={styles.card}><Text>Option 4</Text></TouchableOpacity>
    </View>
  </View>
);

const ScanScreen = () => (
  <View style={styles.scanContainer}>
    <Image source={images.scanBackground} style={styles.backgroundImage} />
    <View style={styles.fixedBottomBar}>
      <Text style={styles.juiceName}>Lemon</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Scan" component={ScanScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Scan" component={ScanScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F9FA' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  username: { fontSize: 18, color: 'gray', marginTop: 5 },
  subtitle: { fontSize: 22, fontWeight: 'bold', marginVertical: 15 },
  exploreMore: { fontSize: 16, color: 'black', textAlign: 'center', marginTop: 20 },
  profileImage: { width: 40, height: 40, borderRadius: 20 },
  insightsContainer: { marginTop: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  card: { flex: 1, padding: 20, margin: 5, backgroundColor: 'white', borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, alignItems: 'center' },
  cardText: { fontSize: 12, color: 'gray' },
  iconImage: { width: 40, height: 40, marginBottom: 5 },
  extraOptions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  scanContainer: { flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#F5F5F5' },
  fixedBottomBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 15, width: '90%', borderRadius: 10, marginBottom: 20, justifyContent: 'space-between' },
  juiceName: { fontSize: 18, fontWeight: 'bold' },
  addButton: { padding: 10, backgroundColor: 'blue', borderRadius: 10 },
  addButtonText: { fontSize: 24, color: 'white' },
  backgroundImage: { width: '100%', height: '100%', position: 'absolute', opacity: 0.2 }
});