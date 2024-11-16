import { StyleSheet, SafeAreaView, Image, Text, Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: 'https://example.com/profile.jpg' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>홍길동</Text>
      <Text style={styles.bio}>안녕하세요, 저는 앱 개발자입니다!</Text>
      <Button
        title="메시지 보내기"
        onPress={() => alert('메시지를 보냈습니다!')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 10,
  },
});

