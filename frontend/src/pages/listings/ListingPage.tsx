import ListingDetail from '@/components/listing/ListingDetail';
import { RootState } from '@/store/store';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ListingPage = () => {
  const listings = useSelector((state: RootState) => state.listings.listings);
  const router = useRouter();
  const { id } = router.query;

  const [listing, setListing] = useState<Listing | null>(null);

  useEffect(() => {
    if (id) {
      // find parsing id to int
      const parseToInt = (id: string | string[]) => {
        if (typeof id === 'string') {
          return parseInt(id);
        }
        return parseInt(id[0]);
      };

      const ls = listings.find((l) => l.id === parseToInt(id));

      if (!ls) {
        router.push('../');
        return;
      }

      setListing(ls);
    }
  }, [id, listings, router]);

  return (
    <>
      <Head>
        <title>{`Real Estate Listing Web App - ${listing?.title}`}</title>
        <meta name='description' content={`Real Estate Listing Web App - ${listing?.title}`} />
      </Head>
      <ListingDetail listing={listing} />
    </>
  );
};

export default ListingPage;
