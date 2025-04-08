
import './App.css';

const user = {
  name: 'Hedy Lamar',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />

      <p>
        Hedy Lamar was not only a film star but also an inventor.
      </p>

      {[0, 1, 2, 3].map((_, index) => (
        <div key={index} style={{ margin: '120px 0' }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gAjR4_CbPpQ"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ display: 'block', margin: '0 auto' }}
          ></iframe>
        </div>
      ))}

      <button
        onClick={() => window.open('https://www.youtube.com/watch?v=gAjR4_CbPpQ', '_blank')}
        style={{ marginTop: '20px' }}
      >
        Watch on YouTube
      </button>
    </div>
  );
}
