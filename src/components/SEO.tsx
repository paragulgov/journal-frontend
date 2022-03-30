import Head from 'next/head';

interface SEOProps {
  title: string;
  siteTitle?: string;
  description?: string;
}

const SEO = (props: SEOProps) => {
  const { description, title, siteTitle = 'Journal' } = props;

  const readyTitle = title.length ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Head>
      <title>{readyTitle}</title>
      <meta name="description" content={description}/>
    </Head>
  );
};

export default SEO;