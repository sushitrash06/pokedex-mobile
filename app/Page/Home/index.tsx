import { QueryClientProvider, QueryClient } from "react-query";
import ListPokemon from "../../Component/Organism/ListPokemon";

const queryClient = new QueryClient();

const HomePage: React.FunctionComponent<{ navigation: any }> = ({
  navigation,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ListPokemon navigation={navigation} />
    </QueryClientProvider>
  );
};

export default HomePage;