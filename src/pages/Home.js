import Button from "../components/Button";
import CardList from "../components/CardLIsit";

const handleClick = () => {
    alert('Button clicked!');
  };


  const cards = [
    {
      title: 'Card 1',
      content: 'Content for Card 1',
    },
    {
      title: 'Card 2',
      content: 'Content for Card 2',
    },
    {
      title: 'Card 3',
      content: 'Content for Card 3',
    }
  ];

const Home = () => {
    return (
        <>
        
        <Button text="Click me" onClick={handleClick} className="mt-4" />
        <CardList cards={cards}/>
        </>
    )
}

export default Home;