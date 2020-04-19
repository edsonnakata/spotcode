import React, {Fragment, useEffect, useState} from 'react';
import Album from '../album';
import { Columns, Heading } from 'react-bulma-components';
import styled from 'styled-components';
import AlbumsService from '../../services/albums';

const DivSpaced = styled.div`
  margin-top: 50px;
`

const Discovery = () => {
  const [recent_albums, setRecentAlbums] = useState([]);
  const [recommend_albums, setRecommendAlbums] = useState([]);

  async function fetchAlbums() {
    const response = await AlbumsService.index();
    setRecentAlbums(response.data['recent_albums']);
    setRecommendAlbums(response.data['recommend_albums']);
  }

  useEffect(() => {
    fetchAlbums();
  }, []);

  const recent_albums_components = recent_albums.map((album, key) =>
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} key={key} id={album.id}/>
    </Columns.Column>
  );

  const recommend_albums_components = recommend_albums.map((album, key) =>
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album artist_name={album.artist_name} title={album.title} cover_url={album.cover_url} key={key} id={album.id}/>
    </Columns.Column>
  );

  return(
    <Fragment>
      {recent_albums_components.length > 0 &&
        <div>
          <Heading className='has-text-white' size={4}>
            Tocadas recentemente
          </Heading>
          <Columns className='is-mobile'>
            {recent_albums_components}
          </Columns>
        </div>
      }
​
      {recommend_albums_components.length > 0 &&
      <DivSpaced>
        <Heading className='has-text-white' size={4}>
          Recomendadas
        </Heading>
        <Columns className='is-mobile'>
          {recommend_albums_components}
        </Columns>
      </DivSpaced>
      }
    </Fragment>
  );
}
export default Discovery;