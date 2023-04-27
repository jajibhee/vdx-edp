import Example from './event/page'
import Seo, { ISeo } from '@/components/Seo'
import Edp from '@/components/edp'


interface ISSRProps {
  data1: any;
  data2: any;
  seo: ISeo
}
export default function Home(
  { data1, data2, seo }: ISSRProps) {
  const { description, title, pathname, imgUrl } = seo

  console.log(data1)
  console.log(data2)

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

export async function getServerSideProps({ req, res }: any) {
  // Fetch data from external API
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const [data1, data2] = await Promise.all([
    fetch(`https://david.vendelux.com/ajax/event_sponsors/53af1bf6-91a2-409f-9d89-db30b1540325/`).then((res) => res.json()),
    fetch('https://david.vendelux.com/ajax/event_attendees/53af1bf6-91a2-409f-9d89-db30b1540325/').then((res) => res.json()),
  ]);


  const seo = {
    title: "Web Summit",
    description: 'Web Summit is a technology conference that takes place annually in Lisbon, Portugal.',
    imgUrl: 'https://vendelux.com/wp-content/uploads/2022/02/logo-4.svg',
    pathname: "app/event/web-summit-2023/53af1bf6-91a2-409f-9d89-db30b1540325"
  }

  // Pass data to the page via props
  return { props: { data1, data2, seo } }
}