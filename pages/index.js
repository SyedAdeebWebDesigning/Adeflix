
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({ results }) 
{
  return (
    <div className="">
      <Header /> {/* Header */ }
      <Nav /> {/* Nav */ }
      <Results results={ results } /> {/* Results */ }
    </div>
  )
}

export async function getServerSideProps(context)
{
  const genre = context.query.genres;
  const request = await fetch(
    `https://api.themoviedb.org/3${ requests[ genre ]?.url || requests.fetchTrending.url}`).then((res) => res.json())

  return {
    props: {
      results: request.results
    }
  }
}
