'use client';

import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import UsersTable from '../components/UsersTable';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let config = {
      method: 'get',
      url: `/${process.env.NEXT_PUBLIC_API_BASE_PATH}/users`,
    };

    axios
      .request(config)
      .then((response) => {
        const { users: allUsers } = response?.data || {};

        setUsers(allUsers);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  loading && <p>Loading...</p>;

  return (
    <Flex direction="column" pt={{ sm: '125px', lg: '75px' }}>
      <UsersTable tableData={users} />
    </Flex>
  );
}
