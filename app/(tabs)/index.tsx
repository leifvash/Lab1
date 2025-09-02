import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "../../styles/auth.styles";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Leifvash Cellan&apos;s App</Text>

      <Link href="/(tabs)/profile">Click to Visit Profile</Link>
    </View>
  );
}

