import logo from './logo.svg';
import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
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
        Hedy Lamar was not only a film star but also an inventor. Her work laid the foundations for modern wireless communication.
      </p>

      <div style={{ margin: '20px 0' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gAjR4_CbPpQ"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <button onClick={() => alert('Button clicked!')}>
        Click Me
      </button>
    </>
  );
}
