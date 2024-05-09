const user = {
  name: 'SONIC',
  imageUrl: 'https://play-lh.googleusercontent.com/CvU2EiRbIpdQcGBqDinwf-J4Q4_B1M6g11P3o5ylTGsa8PGMzxdQTrSHXYjjzMOmNq4=w240-h480-rw',
  imageSize: 200,
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
    </>
  );
}

