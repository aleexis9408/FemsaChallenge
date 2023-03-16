import {useEffect, useMemo} from 'react';
import {usePoins} from '../../services/usePoints';

export const usePointList = (): ResponseHook => {
  const [getData, {isLoading, isError, data}] = usePoins();

  useEffect(() => {
    getData();
  }, []);

  const totalPoints = useMemo(() => {
    let total = 0;
    if (!isLoading && data) {
      total = data?.reduce((valor, point) => {
        return valor + point?.points ?? 0;
      }, 0);
    }
    return total;
  }, [data, isLoading]);

  return {totalPoints, isLoading, isError, data};
};

interface ResponseHook {
  totalPoints: number;
  isLoading: boolean;
  isError: boolean;
  data: boolean;
}
