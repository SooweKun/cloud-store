import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:8080/account/auth/me');
      return data;
    },
  });
};
