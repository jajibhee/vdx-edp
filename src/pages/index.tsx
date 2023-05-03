import { EventAttendeeSummary } from "@/components/Cards/EventAttendeeSummary";
import Seo, { ISeo } from "@/components/Seo";
import Edp from "@/components/edp";
import Layout from "@/components/Layout/Layout";
import TableContainer from "@/components/Table/TableContainer";
import { getFormattedDate } from "@/components/utils/utils";

interface ISSRProps {
  sponsors: any;
  attendees: any;
  attendeeSummary: any;
  eventSummary: any;
  seo?: ISeo;
}
export default function Home({
  sponsors,
  attendees,
  attendeeSummary,
  eventSummary,

}: ISSRProps) {
  // const { description, title, pathname, imgUrl } = seo;

  // fix seo pathname url
  return (
    <div>
      <Seo
        description={eventSummary.vdx_description}
        title={eventSummary.name}
        pathname={eventSummary.historic_link}
        imgUrl={eventSummary.image}
      />
      <Layout>
        <div className="flex flex-col justify-between">
          <Edp
            title={eventSummary?.name}
            image={eventSummary?.image}
            date={getFormattedDate(
              eventSummary?.date_start,
              eventSummary?.date_end
            )}
            venue={eventSummary?.venue}
            location={eventSummary?.location}
            country={eventSummary?.country}
            url={eventSummary?.url}
            description={eventSummary?.vdx_description}
            costHigh={eventSummary?.cost_high}
            costLow={eventSummary?.cost_low}
          />
          <EventAttendeeSummary
            data={attendeeSummary}
            sponsorsCount={eventSummary.total_orgs}
            attendeesCount={eventSummary.total_people}
          />
          <TableContainer
            attendeesCount={eventSummary.total_people}
            sponsorsCount={eventSummary.total_orgs}
            attendees={attendees?.all_attendees}
            sponsors={sponsors?.all_sponsors}
          />
        </div>
      </Layout>
    </div>
  );
}

export async function getServerSideProps({ req, res }: any) {
  // TODO: infer props
  // infer props with xport const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
  };
  // Fetch data from external API
  res.setHeader('User-Agent', headers['User-Agent']);
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const [sponsors, attendees, attendeeSummary, eventSummary] =
    await Promise.all([
      fetch(
        `https://vendelux.com/ajax/event_sponsors/53af1bf6-91a2-409f-9d89-db30b1540325/`
      ).then((res) => res.json()),
      fetch(
        "https://vendelux.com/ajax/event_attendees/53af1bf6-91a2-409f-9d89-db30b1540325/"
      ).then((res) => res.json()),
      fetch(
        "https://vendelux.com/ajax/event_attendee_summaries/53af1bf6-91a2-409f-9d89-db30b1540325/"
      ).then((res) => res.json()),
      fetch(
        `https://vendelux.com/ajax/event_summary/53af1bf6-91a2-409f-9d89-db30b1540325/`
      ).then((res) => res.json()),
    ]);

  // const seo = {
  //   title: "Web Summit",
  //   description:
  //     "Web Summit is a technology conference that takes place annually in Lisbon, Portugal.",
  //   imgUrl: "https://vendelux.com/wp-content/uploads/2022/02/logo-4.svg",
  //   pathname: "app/event/web-summit-2023/53af1bf6-91a2-409f-9d89-db30b1540325",
  // };

  // Pass data to the page via props
  return { props: { sponsors, attendees, attendeeSummary, eventSummary } };
}
