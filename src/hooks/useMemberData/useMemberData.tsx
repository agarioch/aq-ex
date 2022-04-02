import { useEffect, useState } from 'react';
import { Company } from '../../types/Company';
import { getMember } from './dataAccess';

const useMemberData = (id: number) => {
  const [member, setMember] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getMember(id)
      .then((data) => {
        setMember(data);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [id]);

  return { member, isLoading, isError };
};
export default useMemberData;
