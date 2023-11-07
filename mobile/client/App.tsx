import { StatusBar } from 'expo-status-bar';
import Theme from './config/styles/theme';
import Navigation from './config/navigation';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './config/server/utils/queryClient';

const App = () => {
  return (
    <Theme>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
   </Theme>
  );
};

export default App;
