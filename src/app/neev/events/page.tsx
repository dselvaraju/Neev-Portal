'use client';

import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import EventsTable from '../components/EventsTable';

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let config = {
      method: 'get',
      url: `/${process.env.NEXT_PUBLIC_API_BASE_PATH}/events`,
    };

    axios
      .request(config)
      .then((response) => {
        const { events: allEvents } = response?.data || {};

        setEvents(allEvents);
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
      <EventsTable tableData={events} />
    </Flex>
  );
}
