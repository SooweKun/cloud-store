import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type RegFlowResponse = {
  flow_id: string;
};

export const useRegFlowId = () => {
  return useQuery({
    queryKey: ['reg-flow-id'],
    queryFn: async () => {
      const { data } = await axios.get<RegFlowResponse>('http://localhost:8080/api/auth/registration/flow');
      console.log(data, 'register-flow-id');

      return data;
    },
  });
};
