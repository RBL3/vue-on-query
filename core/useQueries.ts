import {QueryKey, QueryFn, QueryResponse} from '../types';
import {useQuery} from './useQuery';

type QueriesBody<T> = {
    queryKey: QueryKey,
    queryFn: QueryFn<T>
}

export function useQueries<T = any, E = any>(queriesBodyList: QueriesBody<T>[]) {
  const resList: QueryResponse<T, E>[] = [];
  queriesBodyList.forEach(({queryKey, queryFn}) => {
    const result: QueryResponse<T> = useQuery<T, E>(queryKey, queryFn, {
      queries: {
        refetchOnWindowFocus: false,
      },
    });
    resList.push({...result});
  });
  return resList;
}
