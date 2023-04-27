import Example from './event/page'
import Seo, { ISeo } from '@/components/Seo'
import Edp from '@/components/edp'

export default function Home({ description,
  title,
  pathname = '',
  imgUrl }: ISeo) {
  return (
    <div>
      <Seo description={description}
        title={title}
        pathname={pathname}
        imgUrl={imgUrl} />
      <Example />
      <Edp />
    </div>
  )
}

export async function getStaticProps() {
  const seo = {
    title: "Web Summit",
    description: 'Web Summit is a technology conference that takes place annually in Lisbon, Portugal.',
    imgUrl: 'https://vendelux.com/wp-content/uploads/2022/02/logo-4.svg',
    pathname: "app/event/web-summit-2023/53af1bf6-91a2-409f-9d89-db30b1540325"
  }
  // Pass data to the page via props
  return { props: { seo } };
}