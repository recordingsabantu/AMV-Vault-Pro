import dynamic from 'next/dynamic';

// This tells Next.js: "Only load this page in the browser, never on the server"
const ReleasesPage = () => {
  return (
    // ... all your current page code goes here ...
  );
};

export default dynamic(() => Promise.resolve(ReleasesPage), {
  ssr: false,
});
