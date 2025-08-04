const EventComponent: React.FC = () => {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <input onChange={(e) => console.log(e)} />
    </div>
  );
};

export default EventComponent;
