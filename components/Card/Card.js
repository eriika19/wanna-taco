const Card = ({ id, rating, name, contact, address }) => {
  return (
    <div id={`${id}-card`} className='tile is-child box'>
      <article className='media'>
        <figure className='media-left'>
          <p className='image is-96x96 is-img-card'>
            <img className='is-rounded' src='/logo.png' />
          </p>
        </figure>
        <div className='media-content'>
          <div className='content'>
            <p className='title is-4'>{name}</p>
            <p className='subtitle is-5 has-text-weight-bold is-spaced'>Dirección</p>
            <p>📍 &nbsp; {`${address.street}, ${address.city}, ${address.state}`}</p>
            <p className='subtitle is-5 is-spaced'>
              <small>📞 &nbsp; {` ${contact.phone}`} </small>
            </p>
            <p className='subtitle is-5'>
              <small> ⭐ &nbsp; Estrellas: &nbsp; {rating} </small>
            </p>
            <div className='level has-text-centered'>
              <p className='level-item is-vertical-align'>
                <a href={contact.site} target='_blank'>
                  <span className='is-vertical-align'>
                    <small className='has-text-weight-semibold'> 👍 &nbsp; Me gusta </small>
                  </span>
                </a>
              </p>
              <p className='level-item is-vertical-align'>
                <a href={contact.site} target='_blank'>
                  <span className='is-vertical-align'>
                    <small className='has-text-weight-semibold'> 🌐 &nbsp; Abrir sitio web </small>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;