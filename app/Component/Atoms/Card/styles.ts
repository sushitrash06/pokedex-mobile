import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Adjust shadow elevation as needed
    marginBottom: 16, // Add margin for spacing between cards
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8, // Add margin below title
  },
});

export default styles;
